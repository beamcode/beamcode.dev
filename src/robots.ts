export default function Robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/private/"] }],
  }
}
