import Link from "next/link"

export default function Page() {
  return (
    <div className="text-primary-text flex w-full flex-col gap-28">
      <div className="flex flex-col gap-4">
        <h1 className="text-primary">404 - Page not found</h1>
        <p className="text-secondary">{"Uh oh! you're lost mate, get it together dumbo."}</p>
        <Link href="/" className="text-primary-text underline underline-offset-4">
          Get an Taxi 🚕
        </Link>
      </div>
    </div>
  )
}
