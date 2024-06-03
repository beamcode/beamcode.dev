import { useState } from "react";

const quotes = [
  {
    quote:
      "If you don't think you have enough time in your day to get things done, then remember that Elon Musk had the time to play all of Elden Ring while scaling an electric car company, building spaceships, and putting in an offer to buy Twitter.",
    author: "@joshterryplays",
  },
  {
    quote:
      "You have plenty of time, you're just not using it to your best advantage. A sure way to never acheive your goals is to tell yourself that you're going to to them later. You're either doing it now or you're not doing it at all.",
    author: "@notmattgraham",
  },
  {
    quote:
      "Running is terrible, running is the worst. It get easier, everyday it gets a little easier. But you gotta do it everyday. That's the hard part... But it does get easier. Ok.",
    author: "BoJack Horseman Out to Sea (s02e12)",
  },
  {
    quote:
      "Five increasingly painful truth that would dramatically improve your life, It's hard so move on if you're not ready to hear this. One. You said you start months ago, yet no progress. You'll be in the same place next year. Call yourself out. Stop putting it off. Two. Successful People are not constantly glued to their screens, watching motivation and productivity videos. Take what you need to put yourself away and do what you already know you need to do. Three. Being busy is a convenient excuse to avoid doing the things you afraid to do. Catch yourself when you know you're avoiding. Four. No one wants to hear you complain about your problems for the 10th time and what you do nothing about it. Figure out what you need to do. Create a plan and execute. Five. Whether you like it or not, your life and your opportunity window is disappearing faster than you realize. It's not coming back. Take ownership, step out of your comfort zone and take action.",
    author: "@james.ck.lim",
  },
  {
    quote:
      "Hey man, quick little reminder before you actually passout tonight, like you did a good job today. A really good job. Don't worry about no stupid things that came through, the day is done. Pack it up, get some rest, you deserve it. But remember this before you actually go to sleep. You're worth it. Everything you've done, everything you're going to do, everyone's really proud of you. I'm proud of you. So just know you did good today, all right? Love.",
    author: "@itsclaveriia",
  },
  {
    quote: "The more you mess around the more you find out.",
    author: "unknown",
  },
];

export default function RandomQuotes() {
  const [counter, setCounter] = useState(
    Math.floor(Math.random() * quotes.length)
  );

  function next() {
    if (counter >= quotes.length - 1) setCounter(0);
    else setCounter(counter + 1);
  }

  return (
    <div className="relative flex max-h-[300px] min-h-[300px] w-full flex-col overflow-hidden rounded-md bg-[white] p-4 pt-3 shadow-md dark:bg-[#181A1B]">
      <h1 className="text-md w-full pb-2.5 font-bold dark:text-white">
        Quotes
      </h1>
      <div className="relative grow items-center justify-center overflow-y-scroll">
        <div className="mb-[50px] flex flex-col gap-4">
          <q className="text-sm italic text-gray-600 dark:text-gray-400">
            {quotes[counter].quote}
          </q>
          <h1 className="dark:text-gray-200">- {quotes[counter].author}</h1>
        </div>
      </div>
      <button
        onClick={() => next()}
        className="duration-90 group absolute bottom-0 right-0 mx-4 mb-4 flex h-fit w-fit justify-center rounded-lg bg-[gray] p-2 text-white opacity-30 shadow transition hover:opacity-100 dark:bg-gray-700"
      >
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width={18}
          viewBox="0 0 799 751"
        >
          <g
            className="duration-90 transition group-active:opacity-20"
            transform="translate(0, 751) scale(0.1,-0.1)"
            fill="#FFFFFF"
            stroke="none"
          >
            <path d="M4095 7493 c-534 -20 -1053 -152 -1517 -384 -625 -313 -1101 -736 -1491 -1326 -55 -84 -104 -153 -108 -153 -4 0 -9 190 -11 423 -5 395 -6 426 -26 487 -27 82 -64 141 -131 206 -164 161 -399 177 -600 43 -72 -48 -122 -113 -167 -217 l-34 -77 0 -1006 c0 -958 1 -1008 19 -1060 48 -139 130 -238 248 -296 71 -35 80 -37 216 -44 198 -11 1619 -10 1804 0 171 10 209 22 302 94 71 54 124 123 150 192 92 247 -4 497 -236 612 l-77 38 -165 7 c-92 3 -239 7 -328 7 -92 1 -164 5 -168 11 -9 15 29 82 141 250 127 191 241 327 387 464 345 324 724 543 1153 667 155 45 371 87 499 99 142 13 419 13 565 0 197 -18 494 -87 706 -165 234 -86 543 -262 754 -431 109 -87 357 -334 445 -444 215 -270 388 -598 489 -931 89 -295 123 -574 112 -927 -28 -900 -497 -1719 -1278 -2232 -134 -88 -379 -213 -522 -265 -216 -79 -512 -148 -716 -166 -186 -17 -564 -6 -715 21 -600 105 -1112 368 -1530 785 -225 225 -391 457 -535 750 -93 188 -124 270 -191 494 -51 171 -86 237 -163 308 -150 139 -353 168 -538 76 -184 -92 -280 -287 -250 -506 11 -80 104 -386 164 -537 109 -274 288 -599 451 -815 354 -470 770 -834 1242 -1087 441 -237 838 -364 1343 -428 173 -23 617 -28 818 -10 630 56 1278 299 1819 684 301 213 650 564 873 876 340 475 578 1079 659 1670 26 192 26 815 0 1000 -52 371 -161 738 -323 1090 -349 760 -1005 1421 -1776 1790 -358 171 -758 289 -1135 335 -109 14 -503 37 -543 33 -8 -1 -46 -3 -85 -5z" />
          </g>
        </svg>
      </button>
    </div>
  );
}
