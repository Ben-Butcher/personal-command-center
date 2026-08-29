export const PRIORITY_ORDER = { high: 0, medium: 1, low: 2 };

export const PRIORITY_STYLES = {
  high: "bg-red-500/10 text-red-400 border border-red-500/20",
  medium: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
  low: "bg-sky-500/10 text-sky-400 border border-sky-500/20",
};

export function getPriorityStyles(priority) {
  return PRIORITY_STYLES[priority] ?? PRIORITY_STYLES.medium;
}

export function formatPriorityLabel(priority) {
  return priority.charAt(0).toUpperCase() + priority.slice(1);
}
