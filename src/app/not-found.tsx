export default function Page() {
  return (
    <div className="flex w-full flex-col gap-28 text-primary">
      <div className="flex flex-col gap-4">
        <h1 className="text-primary">404 - Page not found</h1>
        <p className="text-secondary">{"Uh oh! you're lost mate, get it together dumbo."}</p>
        <a href="/" className="text-primary underline underline-offset-4">
          Get an Taxi 🚕
        </a>
      </div>
    </div>
  )
}
