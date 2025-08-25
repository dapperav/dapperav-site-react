import React, { useEffect, useMemo, useRef, useState } from 'react';

const BRAND = {
  amber: '#FFC300',
  ink: '#121212',
  paper: '#f7f7f7',
};

// --- analytics stubs ---
const analytics = {
  overlay_open: (p) => console.log('[analytics] overlay_open', p),
  overlay_close: (p) => console.log('[analytics] overlay_close', p),
  slide_next: (p) => console.log('[analytics] slide_next', p),
  slide_prev: (p) => console.log('[analytics] slide_prev', p),
  cta_click:  (p) => console.log('[analytics] cta_click', p),
};

// Focus trap
function useFocusTrap(active, containerRef) {
  useEffect(() => {
    if (!active || !containerRef.current) return;
    const el = containerRef.current;
    const getNodes = () =>
      Array.from(
        el.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
      );
    const onKeyDown = (e) => {
      if (e.key !== 'Tab') return;
      const nodes = getNodes();
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    el.addEventListener('keydown', onKeyDown);
    return () => el.removeEventListener('keydown', onKeyDown);
  }, [active, containerRef]);
}

export default function OverlayNavigator({
  open,
  onClose,
  tabs, // [{ key, title, slides:[{icon,title,subtitle,bullets,ctaLabel,image?,specs?}] }]
  initialTabKey = 'services',
  initialIndex = 0,
  formspree = 'https://formspree.io/f/xanbpmwn',
}) {
  const [visible, setVisible] = useState(open);
  const [activeTab, setActiveTab] = useState(initialTabKey);
  const [index, setIndex] = useState(initialIndex);
  const [showHints, setShowHints] = useState(false);
  const [announce, setAnnounce] = useState('');
  const panelRef = useRef(null);

  const activeSlides = useMemo(() => {
    const t = tabs.find((t) => t.key === activeTab);
    return t ? t.slides : [];
  }, [tabs, activeTab]);

  useEffect(() => {
    if (open) {
      setVisible(true);
      setActiveTab(initialTabKey);
      setIndex(initialIndex || 0);
      const flag = sessionStorage.getItem('dapper_overlay_hints_shown');
      if (!flag) {
        setShowHints(true);
        sessionStorage.setItem('dapper_overlay_hints_shown', '1');
      } else setShowHints(false);
      analytics.overlay_open({ tab: initialTabKey, index: initialIndex || 0 });
    } else {
      const t = setTimeout(() => setVisible(false), 240);
      return () => clearTimeout(t);
    }
  }, [open, initialIndex, initialTabKey]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') {
        analytics.overlay_close({ reason: 'esc' });
        onClose();
      }
      if (e.key === 'ArrowRight') {
        analytics.slide_next({ tab: activeTab, index });
        setIndex((i) => (i + 1) % activeSlides.length);
      }
      if (e.key === 'ArrowLeft') {
        analytics.slide_prev({ tab: activeTab, index });
        setIndex((i) => (i - 1 + activeSlides.length) % activeSlides.length);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, activeSlides.length, activeTab, index, onClose]);

  useEffect(() => {
    if (!open) return;
    const s = activeSlides[index];
    if (s) setAnnounce(`${s.title}. Slide ${index + 1} of ${activeSlides.length}.`);
  }, [open, activeSlides, index]);

  useFocusTrap(open, panelRef);

  if (!visible) return null;

  const slide = activeSlides[index] || {};
  const progress = activeSlides.length ? ((index + 1) / activeSlides.length) * 100 : 0;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="overlay-title"
      onMouseDown={() => { analytics.overlay_close({ reason: 'backdrop' }); onClose(); }}
      style={backdrop}
    >
      <div aria-hidden="true" style={grainOverlay} />

      <div ref={panelRef} onMouseDown={(e) => e.stopPropagation()} style={panel}>
        {/* Header: tabs left • step count + dots • back + close right */}
        <div style={panelHeader}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
            {tabs.map((t) => {
              const active = t.key === activeTab;
              return (
                <button
                  key={t.key}
                  onClick={() => { setActiveTab(t.key); setIndex(0); }}
                  style={{
                    ...tabButton,
                    background: active ? 'rgba(0,0,0,0.06)' : 'transparent',
                    borderColor: active ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.12)',
                    color: active ? BRAND.ink : '#444',
                  }}
                >
                  {t.title}
                </button>
              );
            })}
          </div>

          <div style={headerRight}>
            <span style={stepCount}>{index + 1}/{activeSlides.length}</span>
            <div style={dotsWrap}>
              {activeSlides.map((_, i) => (
                <span key={i} style={{ ...dot, opacity: i === index ? 1 : 0.3 }} />
              ))}
            </div>
            <a
              href="#main"
              onClick={(e) => { e.preventDefault(); analytics.overlay_close({ reason: 'back_link' }); onClose(); }}
              style={backLink}
            >
              ← Back to website
            </a>
            <button
              aria-label="Close overlay"
              onClick={() => { analytics.overlay_close({ reason: 'x' }); onClose(); }}
              style={closeBtn}
            >
              ✕
            </button>
          </div>
        </div>

        {/* Thin progress bar */}
        <div style={progressWrap} aria-hidden="true">
          <div style={{ ...progressBar, width: `${progress}%` }} />
        </div>

        {/* Body: tighter padding + smaller media area */}
        <div style={panelBody}>
          <div style={mediaWrap}>
            {slide.image ? (
              <img src={slide.image} alt="" style={mediaImg} />
            ) : (
              <div style={mediaPlaceholder}>
                <div style={mediaBadge}>Image placeholder</div>
              </div>
            )}
          </div>

          <div style={textWrap}>
            <div style={titleRow}>
              <span style={emoji}>{slide.icon || '🟡'}</span>
              <h3 id="overlay-title" style={title}>{slide.title || 'Details'}</h3>
            </div>
            {slide.subtitle && <p style={subtitle}>{slide.subtitle}</p>}
            <p style={tagline}>Done right. No mess. Guaranteed.</p>

            <div style={bulletBox}>
              <ul style={bulletList}>
                {(slide.bullets || []).map((b, i) => (
                  <li key={i} style={{ marginBottom: 6 }}>{b}</li>
                ))}
              </ul>
            </div>

            {slide.specs && (
              <details style={specsDetails}>
                <summary style={specsSummary}>Show specs</summary>
                <div style={specsBody}>
                  <ul style={specsList}>
                    {slide.specs.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                </div>
              </details>
            )}
          </div>
        </div>

        {/* Footer: Prev (left) • Contact form (center) • Next (right) */}
        <div style={panelFooter}>
          <button
            onClick={() => { analytics.slide_prev({ tab: activeTab, index }); setIndex((i) => (i - 1 + activeSlides.length) % activeSlides.length); }}
            style={{ ...navBtn, justifySelf: 'start' }}
          >
            ← Prev
          </button>

          <form
            action={formspree}
            method="POST"
            style={miniForm}
            onSubmit={() => analytics.cta_click({ tab: activeTab, index, type: 'form_submit' })}
          >
            <input required name="name" placeholder="Your name" style={input} />
            <input required type="email" name="email" placeholder="Email" style={input} />
            <input name="subject" type="hidden" value={`Dapper AV — ${slide.title || 'Inquiry'}`} />
            <button type="submit" style={pillCTA}>Contact us</button>
          </form>

          <button
            onClick={() => { analytics.slide_next({ tab: activeTab, index }); setIndex((i) => (i + 1) % activeSlides.length); }}
            style={{ ...navBtn, justifySelf: 'end' }}
          >
            Next →
          </button>
        </div>

        {open && showHints && (
          <div role="note" style={hints}>
            Tip: Use ← / → to navigate • Esc to close
            <button onClick={() => setShowHints(false)} style={hintClose}>Got it</button>
          </div>
        )}

        <div aria-live="polite" style={{ position: 'absolute', left: -9999, top: 'auto', width: 1, height: 1, overflow: 'hidden' }}>
          {announce}
        </div>
      </div>
    </div>
  );
}

/* ===== Styles (polished) ===== */

const backdrop = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(0,0,0,0.45)',
  display: 'grid',
  placeItems: 'center',
  zIndex: 10000,
  padding: '1rem',
};

const grainOverlay = {
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  backgroundImage: `
    radial-gradient(rgba(0,0,0,0.07) 1px, transparent 1px),
    radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px)
  `,
  backgroundSize: '3px 3px, 5px 5px',
  opacity: 0.35,
};

const panel = {
  width: 'min(1020px, 96vw)',
  height: 'min(80vh, 860px)',            // slightly shorter to reduce negative space
  background: '#fff',
  color: '#111',
  borderRadius: 24,
  border: '1px solid rgba(0,0,0,0.08)',
  boxShadow: '0 30px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.2) inset',
  display: 'grid',
  gridTemplateRows: 'auto auto 1fr auto',
  overflow: 'hidden',
};

const panelHeader = {
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  alignItems: 'center',
  gap: 10,
  padding: '0.7rem 0.9rem',
  borderBottom: '1px solid rgba(0,0,0,0.08)',
  background: 'linear-gradient(180deg, rgba(255,255,255,0.88), rgba(255,255,255,0.7))',
  backdropFilter: 'blur(6px)',
};

const tabButton = {
  appearance: 'none',
  border: '1px solid rgba(0,0,0,0.12)',
  borderRadius: 9999,
  background: '#fff',
  color: '#333',
  padding: '.38rem .7rem',
  fontWeight: 900,
  cursor: 'pointer',
};

const headerRight = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  flexWrap: 'wrap',
};

const stepCount = { color: '#666', fontWeight: 800, minWidth: 48, textAlign: 'right' };

const dotsWrap = { display: 'flex', gap: 6, alignItems: 'center' };
const dot = {
  width: 8,
  height: 8,
  borderRadius: 6,
  background: '#111',
  boxShadow: '0 0 0 2px rgba(0,0,0,0.06)',
};

const backLink = {
  color: '#666',
  textDecoration: 'none',
  fontWeight: 700,
};

const closeBtn = {
  appearance: 'none',
  border: '1px solid rgba(0,0,0,0.2)',
  borderRadius: 9999,
  background: '#fff',
  color: '#111',
  padding: '.38rem .6rem',
  fontWeight: 800,
  cursor: 'pointer',
};

const progressWrap = {
  height: 3,
  background: 'rgba(0,0,0,0.06)',
};
const progressBar = {
  height: 3,
  background: BRAND.amber,
  transition: 'width .28s ease',
};

const panelBody = {
  display: 'grid',
  gridTemplateColumns: '1.05fr 1fr',     // give text a touch more room
  gap: 16,
  padding: '0.85rem 1rem 0.4rem',
  alignItems: 'start',
};

const mediaWrap = {
  borderRadius: 16,
  background: '#f2f2f2',
  overflow: 'hidden',
  minHeight: 220,                        // smaller media area
};
const mediaImg = { width: '100%', height: '100%', objectFit: 'cover' };
const mediaPlaceholder = {
  width: '100%',
  height: '100%',
  minHeight: 220,
  display: 'grid',
  placeItems: 'center',
  background: 'linear-gradient(135deg, #fafafa 0%, #efefef 100%)',
};
const mediaBadge = {
  padding: '.4rem .7rem',
  borderRadius: 9999,
  background: BRAND.amber,
  color: '#000',
  fontWeight: 900,
  boxShadow: '0 10px 20px rgba(255,195,0,0.35)',
};

const textWrap = { display: 'grid', alignContent: 'start', gap: 8 };
const titleRow = { display: 'flex', alignItems: 'center', gap: 8 };
const emoji = { fontSize: 24 };
const title = { margin: 0, fontWeight: 900, fontSize: '1.35rem' };
const subtitle = { margin: '0 0 .25rem', color: '#444', lineHeight: 1.45 };
const tagline = { margin: 0, color: '#777', fontWeight: 800, letterSpacing: '.02em' };

const bulletBox = {
  marginTop: 6,
  background: 'linear-gradient(145deg, rgba(0,0,0,0.04), rgba(0,0,0,0.02))',
  border: '1px solid rgba(0,0,0,0.08)',
  borderRadius: 14,
  padding: '0.75rem .9rem',
};
const bulletList = { margin: 0, paddingLeft: '1.1rem', lineHeight: 1.55 };

const specsDetails = {
  marginTop: 6,
  borderRadius: 12,
  background: '#fff',
  border: '1px solid rgba(0,0,0,0.06)',
};
const specsSummary = { cursor: 'pointer', padding: '.5rem .7rem', fontWeight: 800, color: '#333' };
const specsBody = { padding: '.15rem .8rem .7rem', color: '#333' };
const specsList = { margin: 0, paddingLeft: '1.1rem', lineHeight: 1.5 };

const panelFooter = {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto', // ensures Prev left, form center, Next right
  alignItems: 'center',
  gap: 10,
  padding: '.65rem .9rem .9rem',
  borderTop: '1px solid rgba(0,0,0,0.06)',
  background: 'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.75))',
  position: 'sticky',
  bottom: 0,
};

const navBtn = {
  appearance: 'none',
  border: '1px solid rgba(0,0,0,0.2)',
  borderRadius: 9999,
  background: '#fff',
  color: '#111',
  padding: '.5rem .85rem',
  fontWeight: 800,
  cursor: 'pointer',
};

const miniForm = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
  alignItems: 'center',
  justifyContent: 'center',
};
const input = {
  padding: '.5rem .7rem',
  borderRadius: 10,
  border: '1px solid rgba(0,0,0,0.18)',
  minWidth: 160,
};
const pillCTA = {
  display: 'inline-block',
  padding: '.6rem 1rem',
  borderRadius: 9999,
  background: BRAND.amber,
  color: '#000',
  textDecoration: 'none',
  fontWeight: 900,
  boxShadow: '0 8px 18px rgba(255,195,0,0.25)',
  border: 'none',
  cursor: 'pointer',
};

const hints = {
  position: 'absolute',
  right: 12,
  bottom: 12,
  background: '#111',
  color: '#fff',
  padding: '.5rem .7rem',
  borderRadius: 12,
  fontWeight: 700,
  boxShadow: '0 10px 24px rgba(0,0,0,0.35)',
};
const hintClose = {
  marginLeft: 8,
  appearance: 'none',
  border: '1px solid rgba(255,255,255,0.3)',
  background: 'transparent',
  color: '#fff',
  borderRadius: 9999,
  padding: '.25rem .5rem',
  fontWeight: 800,
  cursor: 'pointer',
};
