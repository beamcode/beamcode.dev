import React, { Fragment, useEffect, useState } from "react"
import moment from "moment"
import { FaArrowRight } from "react-icons/fa6"
import { FaArrowLeft } from "react-icons/fa6"

export const getSpecificDate = (month, dayOfMonth, year) => {
  return moment(`${month}-${dayOfMonth}-${year}`, "MM-DD-YYYY").toDate()
}
export const getDayOfMonth = (date) => moment(date).date()
export const getMonth = (date) => moment(date).month()
export const getYear = (date) => moment(date).year()
export const getToday = () => moment().toDate()
export const getReadableWeekday = (date) => moment(date).format("dddd")
export const getReadableMonthDate = (date) => moment(date).format("MMMM Do")
export const getMonthDayYear = (date) => moment(date).format("MM-DD-YYYY")

const getDaysInMonth = (month, year) => {
  return moment(`${month}-${year}`, "MM-YYYY").daysInMonth()
}

const getFirstWeekdayOfMonth = (month, year) => {
  return moment(`${month}-${year}`, "MM-YYYY").startOf("month").weekday()
}

const getPrevMonthYear = (month, year) => {
  if (month === 1) {
    return {
      month: 12,
      year: year - 1,
    }
  } else {
    return {
      month: month - 1,
      year,
    }
  }
}

const getNextMonthYear = (month, year) => {
  if (month === 12) {
    return {
      month: 1,
      year: year + 1,
    }
  } else {
    return {
      month: month + 1,
      year,
    }
  }
}

const getDatesInMonthDisplay = (month, year) => {
  const totalDatesPerMonthView = 42 // 6 rows, 7 days a week...
  const daysInMonth = moment(`${month}-${year}`, "MM-YYYY").daysInMonth()
  const firstWeekday = moment(`${month}-${year}`, "MM-YYYY").startOf("month").weekday()
  const result = []

  // Based on index number of firstWeekday, add number of previous month's overflow dates
  const prevMonthYear = getPrevMonthYear(month, year)
  const prevDaysInMonth = moment(
    `${prevMonthYear.month}-${prevMonthYear.year}`,
    "MM-YYYY"
  ).daysInMonth()

  for (let i = firstWeekday - 1; i >= 0; i--) {
    result.push({
      currentMonth: false,
      date: getSpecificDate(prevMonthYear.month, prevDaysInMonth - i, prevMonthYear.year),
    })
  }

  // Add all current month dates
  for (let j = 1; j <= daysInMonth; j++) {
    result.push({
      currentMonth: true,
      date: getSpecificDate(month, j, year),
    })
  }

  // Overflow dates for next month to meet totalDatesPerMonthView requirement
  if (result.length < totalDatesPerMonthView) {
    const daysToAdd = totalDatesPerMonthView - result.length
    const nextMonthYear = getNextMonthYear(month, year)
    for (let k = 1; k <= daysToAdd; k++) {
      result.push({
        currentMonth: false,
        date: getSpecificDate(nextMonthYear.month, k, nextMonthYear.year),
      })
    }
  }

  return result
}

const Header = ({ date, onChange }) => {
  return (
    <Fragment>
      <div className="mb-4 flex w-full justify-between gap-0 pl-[6.5px]">
        <p className="m-0 text-xl">{moment(date).format("MMMM YYYY")}</p>
        <div className="flex items-center gap-1">
          <button
            onClick={() => onChange("prev")}
            className="border-opacity-0 hover:bg-opacity-20 active:border-opacity-40 h-full rounded-lg border-2 border-[gray] px-2 pr-2.5 transition duration-150 hover:bg-[gray]"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => onChange("next")}
            className="border-opacity-0 hover:bg-opacity-20 active:border-opacity-40 h-full rounded-lg border-2 border-[gray] px-2 pl-2.5 transition duration-150 hover:bg-[gray]"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="mb-3 flex select-none">
        {moment.weekdaysShort().map((day, key) => (
          <div key={key} className="text-light m-0 flex w-full items-center justify-center">
            {day}
          </div>
        ))}
      </div>
    </Fragment>
  )
}

const DisplayDates = ({ datesInMonth, selectDate, setSelectDate, glow = false }) => {
  function isCurrentDate(date) {
    return moment(date).format("DD-MM-YYYY") === moment().format("DD-MM-YYYY") ? true : false
  }

  return (
    <div className="grid grid-cols-7">
      {datesInMonth.map((i, key) => (
        <button
          key={key}
          onClick={() => setSelectDate(i.date)}
          className="group flex min-w-[40px] flex-col items-center justify-center gap-0.5 pb-1"
        >
          <div
            className={`${!i.currentMonth && "text-text-disabled"} ${isCurrentDate(i.date) && "bg-secondary-main"} group-hover:bg-primary-main flex max-h-[25px] min-h-[25px] max-w-[25px] min-w-[25px] items-center justify-center overflow-hidden rounded-full transition duration-300 group-hover:text-[white] group-hover:shadow-xs`}
          >
            <div className="m-0 text-[15px] font-medium select-none">{getDayOfMonth(i.date)}</div>
          </div>
          <div className={`opacity-50 ${!!glow && "bg-[purple]"} h-1 w-1 rounded-full`} />
        </button>
      ))}
    </div>
  )
}

export default function Calendar({ width = "fit-content", height = "fit-content" }) {
  const [selectDate, setSelectDate] = useState(moment().toDate())
  const [selectDates, setSelectDates] = useState(moment().toDate())
  const datesInMonth = getDatesInMonthDisplay(getMonth(selectDates) + 1, getYear(selectDates))

  function switchMonth(dir) {
    if (dir === "next") setSelectDates(moment(selectDates).add(1, "M"))
    if (dir === "prev") setSelectDates(moment(selectDates).subtract(1, "M"))
  }

  useEffect(() => {
    if (moment(selectDate).month() !== moment(selectDates).month()) setSelectDates(selectDate)
  }, [selectDate, selectDates])

  return (
    <div
      className="border-divider flex min-w-max flex-col rounded-lg border-2 p-2"
      style={{ width: width, height: height }}
    >
      <Header date={selectDates} onChange={switchMonth} />
      <DisplayDates
        datesInMonth={datesInMonth}
        selectDate={selectDate}
        setSelectDate={setSelectDate}
        glow={false}
      />
    </div>
  )
}
