// Simple line-icon diagrams for common hand therapy exercise shapes.
// Deliberately schematic, not anatomically precise, meant as a quick visual
// alongside the written instruction. Review before patient use.

const EXERCISE_ICONS = {
  "hand-flat": `
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <rect x="26" y="46" width="12" height="14" rx="4"/>
      <rect x="18" y="26" width="28" height="22" rx="9"/>
      <line x1="22" y1="26" x2="22" y2="8"/>
      <line x1="29" y1="26" x2="29" y2="6"/>
      <line x1="36" y1="26" x2="36" y2="6"/>
      <line x1="43" y1="26" x2="43" y2="8"/>
      <line x1="18" y1="32" x2="8" y2="26"/>
    </svg>`,
  "fist-hook": `
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <rect x="26" y="46" width="12" height="14" rx="4"/>
      <rect x="18" y="26" width="28" height="22" rx="9"/>
      <path d="M22,26 L22,16 Q22,12 18,12"/>
      <path d="M29,26 L29,14 Q29,10 25,10"/>
      <path d="M36,26 L36,14 Q36,10 40,10"/>
      <path d="M43,26 L43,16 Q43,12 47,12"/>
      <line x1="18" y1="32" x2="8" y2="26"/>
    </svg>`,
  "fist-full": `
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <rect x="26" y="46" width="12" height="12" rx="4"/>
      <rect x="16" y="24" width="32" height="24" rx="12"/>
      <path d="M22,24 q2,-6 4,0"/>
      <path d="M29,24 q2,-6 4,0"/>
      <path d="M36,24 q2,-6 4,0"/>
      <path d="M43,24 q2,-6 4,0"/>
      <line x1="16" y1="30" x2="7" y2="24"/>
    </svg>`,
  "fist-tabletop": `
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <rect x="26" y="46" width="12" height="14" rx="4"/>
      <rect x="20" y="30" width="20" height="18" rx="8"/>
      <rect x="12" y="18" width="30" height="10" rx="5"/>
      <line x1="20" y1="35" x2="10" y2="30"/>
    </svg>`,
  "thumb-out": `
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <rect x="26" y="46" width="12" height="14" rx="4"/>
      <rect x="18" y="26" width="28" height="22" rx="9"/>
      <line x1="22" y1="26" x2="22" y2="10"/>
      <line x1="29" y1="26" x2="29" y2="8"/>
      <line x1="36" y1="26" x2="36" y2="8"/>
      <line x1="43" y1="26" x2="43" y2="10"/>
      <path d="M18,34 Q4,34 4,22"/>
      <path d="M4,22 l-3,3 M4,22 l4,1"/>
    </svg>`
};
