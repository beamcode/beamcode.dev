export function timeSince(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()

  // Handle invalid date input
  if (isNaN(date.getTime())) {
    return "Invalid date"
  }

  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  // Handle future dates
  if (seconds < 0) {
    return "Future date"
  }

  const intervals = [
    { label: "y", seconds: 31536000 },
    { label: "mo", seconds: 2592000 },
    { label: "d", seconds: 86400 },
    { label: "h", seconds: 3600 },
    { label: "m", seconds: 60 },
    { label: "s", seconds: 1 },
  ]

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds)
    if (count > 0) {
      return `${count}${interval.label} ago`
    }
  }

  return "just now"
}
