"use client"

import { useState, useEffect } from "react"
import moment from "moment"

export default function MacTerminal() {
  const [extend, setExtend] = useState(false)
  const [show, setShow] = useState(true)
  const [cleared, setCleared] = useState(false)
  const [command, setCommand] = useState("")
  const [history, setHistory] = useState<React.ReactElement[]>([])
  const [timeDate, setTimeDate] = useState<string | null>(null)

  useEffect(() => {
    // Generate the timestamp only client-side
    const timestamp = moment().format("ddd MMM D HH:mm:ss").toString()
    setTimeDate(timestamp)
  }, [])

  // const commands = {
  //   whoami: "jackharper",
  //   cd: (directory) => `changed path to ${directory}`
  // }

  function checkCommands() {
    var toAdd = []

    toAdd.push(
      <span className="break-all pb-1">Beam:Devprojects beam$ {command}</span>
    )
    if (command === "clear" || command === "cl") {
      setHistory([])
      setCommand("")
      setCleared(true)
      return
    } else if (command === "whoami")
      toAdd.push(<span className="break-all pb-1">carrots</span>)
    else if (command === "mathieu")
      toAdd.push(
        <span className="break-all pb-1">Mathieu suce des gros chibre</span>
      )
    else if (command.indexOf("cd ", 0) === 0 || command === "cd")
      toAdd.push(
        <span className="break-all pb-1">
          error: this thing is still in dev
        </span>
      )
    else if (command === "ls") {
      toAdd.push(
        <span className="whitespace-pre break-all pb-1">
          secret_stuff archive.zip docs
        </span>
      )
      toAdd.push(
        <span className="whitespace-pre break-all pb-1">pics .ssh</span>
      )
    } else if (command && command.trim().length) {
      toAdd.push(
        <span className="break-all pb-1">
          zsh: command not found: {command}
        </span>
      )
    }
    // console.log(command);
    setCommand("")
    setHistory([...toAdd.reverse(), ...history])
  }

  return (
    <>
      {show && (
        <div
          className={`flex min-h-[256px] w-full flex-col ${
            extend && "h-full"
          } rounded-lg`}
          suppressHydrationWarning
        >
          <div className="flex h-fit items-center rounded-t-lg border-b border-gray-500 bg-gray-100 px-[6px] py-[2px] text-center text-black dark:bg-[#322b2b]">
            <div className="group flex gap-[4px] h-[10px]">
              <button
                onClick={() => setShow((val) => !val)}
                className="flex aspect-square items-center justify-center rounded-full border-red-900 bg-red-500 shadow-inner"
              >
                <svg
                  viewBox="-3 -3 30 30"
                  className="invisible group-hover:visible"
                  width="50%"
                  style={{ opacity: 0.5 }}
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="0" y1="0" x2="24" y2="24" />
                  <line x1="24" y1="0" x2="0" y2="24" />
                </svg>
              </button>

              <button
                onClick={() => {}}
                className="flex aspect-square items-center justify-center rounded-full border-yellow-900 bg-yellow-500 shadow-inner"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="invisible group-hover:visible"
                  width="90%"
                  style={{ opacity: 0.5 }}
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>

              <button
                onClick={() => setExtend((val) => !val)}
                className="flex aspect-square items-center justify-center rounded-full border-green-900 bg-green-500 shadow-inner"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="invisible group-hover:visible"
                  width="50%"
                  style={{ opacity: 0.5 }}
                >
                  <path d="M0,17.45V2.64A2.64,2.64,0,0,1,2.64,0h14.8a.56.56,0,0,1,.4,1L.93,17.84A.55.55,0,0,1,0,17.45Z" />
                  <path d="M21.35,24H6.56a.56.56,0,0,1-.4-.95L23.07,6.16a.55.55,0,0,1,.93.39v14.8A2.64,2.64,0,0,1,21.35,24Z" />
                </svg>
              </button>
            </div>

            <div className="mx-auto pr-[45px]">
              <p className="text-center text-sm font-bold dark:text-[#736c6c]">
                Fake Terminal
              </p>
            </div>
          </div>

          <div className="relative flex grow overflow-y-scroll rounded-b-lg bg-[#242423] bg-opacity-70 subpixel-antialiased shadow-md dark:bg-[black]">
            <div className="absolute flex h-fit w-full flex-col-reverse overflow-y-scroll p-1 font-mono text-xs text-green-200">
              <div className="flex shrink">
                <span className="whitespace-pre pb-1">
                  Beam:Devprojects beam${" "}
                </span>
                <input
                  className="w-full resize-none bg-transparent focus:outline-none"
                  placeholder=""
                  name="command"
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  onKeyDown={(evt) => {
                    if (evt.code === "Enter") checkCommands()
                  }}
                  required
                />
              </div>

              <div className="flex w-fit flex-col-reverse">
                {history.map((val, key) => (
                  <div key={key}>{val}</div>
                ))}
              </div>

              {!cleared && (
                <p className="pb-1">Last login: {timeDate} on ttys002</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
