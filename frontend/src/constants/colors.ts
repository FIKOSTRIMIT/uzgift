export const colors = {
  background: "#09090B",

  surface: "#141419",

  glass: "rgba(255,255,255,.05)",

  border: "rgba(255,255,255,.08)",

  primary: "#00D9FF",

  success: "#4ADE80",

  warning: "#FACC15",

  danger: "#EF4444",

  white: "#FFFFFF",

  text: "#FFFFFF",

  textSecondary: "#9CA3AF",
} as const;

export type ColorKey = keyof typeof colors;