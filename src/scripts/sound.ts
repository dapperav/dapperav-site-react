// Optional interface sounds, drawn with Web Audio (no files). OFF until the visitor turns them on with a
// Sound toggle; the choice is remembered and shared by every toy. Sounds mark a connection, never a hover.
const KEY = 'dav-sound';
let ctx: AudioContext | null = null;

export function soundOn() {
  try {
    return localStorage.getItem(KEY) === 'on';
  } catch {
    return false;
  }
}

function sync(on: boolean) {
  document.querySelectorAll<HTMLButtonElement>('[data-sound-toggle]').forEach((b) => {
    b.setAttribute('aria-pressed', String(on));
    b.querySelector('[data-sound-label]')!.textContent = on ? 'Sound on' : 'Sound off';
  });
}

export function play(kind: 'click' | 'chime' | 'buzz') {
  if (!soundOn()) return;
  ctx ??= new AudioContext();
  const ac = ctx;
  ac.resume();
  const t = ac.currentTime;
  const tone = (freq: number, at: number, dur: number, type: OscillatorType, vol: number) => {
    const o = ac.createOscillator();
    const g = ac.createGain();
    o.type = type;
    o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t + at);
    g.gain.exponentialRampToValueAtTime(vol, t + at + 0.006);
    g.gain.exponentialRampToValueAtTime(0.0001, t + at + dur);
    o.connect(g).connect(ac.destination);
    o.start(t + at);
    o.stop(t + at + dur + 0.02);
  };
  if (kind === 'click') {
    tone(2200, 0, 0.03, 'square', 0.04);
    tone(880, 0.012, 0.06, 'triangle', 0.09);
  } else if (kind === 'chime') {
    tone(660, 0, 0.4, 'sine', 0.12);
    tone(990, 0.13, 0.5, 'sine', 0.1);
  } else {
    tone(150, 0, 0.16, 'sawtooth', 0.04);
  }
}

export function initSoundToggles() {
  sync(soundOn());
  document.querySelectorAll<HTMLButtonElement>('[data-sound-toggle]').forEach((b) => {
    if (b.dataset.bound) return;
    b.dataset.bound = '1';
    b.addEventListener('click', () => {
      const on = !soundOn();
      try {
        localStorage.setItem(KEY, on ? 'on' : 'off');
      } catch {
        /* private mode: sound stays off */
      }
      sync(on);
      play('click');
    });
  });
}
