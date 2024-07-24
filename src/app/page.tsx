import SpotifyWidget from "@/components/SpotifyWidget"
import MacTerminal from "@/components/Terminal"
import Image from "next/image"

function LookingForWork() {
  return (
    <div
      className="flex flex-row gap-2 items-center w-full text-secondary-light dark:text-secondary-dark animate-in"
      style={{ "--index": 2 } as React.CSSProperties}
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
      </span>
      <p>Available</p>
    </div>
  )
}

function ProjectComponent({
  title,
  date,
  image,
  technologies,
  description,
  demo_link,
  github_link,
}: {
  title: string
  date: string
  image: string
  technologies: string[]
  description: string
  demo_link?: string
  github_link?: string
}) {
  return (
    <li>
      <section className="flex flex-col md:flex-row gap-1 md:gap-9 text-xs bg-primary-bg rounded-lg">
        <div className="flex flex-col-reverse md:flex-row w-full rounded-lg overflow-hidden">
          <div className="flex flex-col gap-5 grow p-4 rounded-b-lg md:rounded-br-[0] md:rounded-l-lg">
            <div className="flex items-center justify-between w-full">
              <h1 className="text-xl">{title}</h1>
              <h2 className="text-secondary-light shrink-0">{date}</h2>
            </div>

            <div className="flex flex-wrap gap-2 text-[11px] dark:text-black">
              {technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-orange-200 dark:bg-orange-300 rounded-md">
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-secondary-light dark:text-secondary-dark">{description}</p>

            <div className="flex flex-wrap gap-5 text-sm">
              {demo_link && (
                <a href={demo_link} target="_blank" className="underline underline-offset-4">
                  Live Demo ↗
                </a>
              )}
              {github_link && (
                <a href={github_link} target="_blank" className="underline underline-offset-4">
                  Github ↗
                </a>
              )}
            </div>
          </div>
          <div className="flex rounded-tr-lg sm:rounded-l-[0] h-full max-h-[250px] overflow-hidden w-full md:max-w-[200px] shadow cursor-pointer">
            <a className="flex w-full" href={demo_link ? demo_link : github_link} target="_blank">
              <Image
                src={image}
                alt="Project Image"
                width="0"
                height="0"
                sizes="100vw"
                className="object-cover w-full h-auto transition duration-300
                hover:scale-110"
              />
            </a>
          </div>
        </div>
      </section>
    </li>
  )
}

export default function Page() {
  return (
    <div className="flex flex-col w-full gap-28 text-primary-light dark:text-primary-dark animate-in">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <div className="flex items-center">
            <h1 className="font-bold text-[40px] mr-2">Hi.</h1>
            <h1 className="font-bold text-[40px] animate-wave origin-[70%_70%] hover:animate-wave-hover">
              👋
            </h1>
            {/* <h1 className="font-bold text-[40px] animate-wave origin-[70%_70%] hover:animate-wave-hover">🍔</h1> */}
          </div>
          <p
            className="animate-in text-secondary-light dark:text-secondary-dark whitespace-nowrap"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            Coding is a trap.
          </p>
          <LookingForWork />
        </div>

        <SpotifyWidget />
      </div>

      <div
        className="flex flex-col gap-20 animate-in"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <h2 className="text-xl font-extralight">Selected projects</h2>

        <ul className="flex flex-col gap-10">
          <ProjectComponent
            title="Bagnole"
            date="In development"
            technologies={["Next.js", "TypeScript", "TailwindCSS", "Prisma", "React Native"]}
            image="/bagnole.png"
            description="Next generation car meet-up app. Find car events near you, meet new people and share your passion for cars"
            demo_link="https://bagnoleapp.fr/"
          />

          <ProjectComponent
            title="Personal Website"
            date="07 / 2021"
            technologies={["Next.js", "TypeScript", "TailwindCSS"]}
            image="/beamcodedev.png"
            description="A vibrant and dynamic personal website that showcases the best of who I am, highlighting my incredible work, valuable experiences, and infectious enthusiasm.."
            demo_link="https://beamcode.dev"
            github_link="https://github.com/beamcode/beamcode.dev"
          />

          <ProjectComponent
            title="BounceMaster"
            date="04 / 2021"
            technologies={["Unity", "C#"]}
            image="/bounceMaster.png"
            description="A 2D platformer game made in Unity. The player controls a ball and must reach the end of the level by bouncing off of platforms and avoiding obstacles."
            github_link="https://github.com/beamcode/bounce_master"
          />
        </ul>
      </div>

      {/* <div>
        <p className="font-normal pb-6">Fake terminal made with TailwindCSS</p>
        <MacTerminal />
      </div> */}
    </div>
  )
}
