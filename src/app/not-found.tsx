export default function NotFound() {
  return (
    <div className="flex flex-col w-full gap-28 text-primary">
      <div className="flex flex-col gap-4">
        <h1 className="text-primary-light dark:text-primary-dark">
          404 - Page not found
        </h1>
        <p className="text-secondary-light dark:text-secondary-dark">
          {"Uh oh! you're lost mate, get it together dumbo."}
        </p>
        <a
          href="/"
          className="underline underline-offset-4 text-primary-light dark:text-primary-dark"
        >
          Get an Uber
        </a>
      </div>
    </div>
  )
}
