/** Wires an ARIA tablist: click, arrow keys, Home/End. Calls onSelect(index, byUser) after each change. */
export function wireTabs(root: HTMLElement, onSelect: (k: number, byUser: boolean) => void) {
  const tabs = [...root.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
  const panels = tabs.map((t) => document.getElementById(t.getAttribute('aria-controls')!)!);
  const select = (k: number, byUser = false, focus = false) => {
    tabs.forEach((t, i) => {
      const on = i === k;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      panels[i].hidden = !on;
    });
    if (focus) tabs[k].focus();
    onSelect(k, byUser);
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(i, true));
    t.addEventListener('keydown', (e) => {
      const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (e.key === 'Home') select(0, true, true);
      else if (e.key === 'End') select(tabs.length - 1, true, true);
      else if (d) select((i + d + tabs.length) % tabs.length, true, true);
      else return;
      e.preventDefault();
    });
  });
  return { tabs, panels, select };
}
