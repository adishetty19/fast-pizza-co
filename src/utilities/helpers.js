export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "INR",
  }).format(value);
}

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(dateStr);
}

export function calcMinutesLeft(dateStr) {
  const d1 = new Date().getDate();
  const d2 = new Date().getDate(dateStr);
  return Math.round((d2 - d1) / 60000);
}
