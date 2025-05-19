import React from "react"

/**
 * LogoMarquee – scrolling partner logos
 *
 * Uses Tailwind CSS v4.0 utility classes + one arbitrary‑value animation.
 * Everything lives in a single file (including the @keyframes rule) so you can
 * drop this component straight into any project that already has Tailwind 4
 * configured.
 */
function BrandCarousel() {
  const logos = [
    { src: "https://cdn.brandfetch.io/github.com/logo?c=1id9gSQYSNw8Mf4xwCA", alt: "GitHub" },
    { src: "https://cdn.brandfetch.io/supabase.com/logo?c=1id9gSQYSNw8Mf4xwCA", alt: "Supabase" },
    { src: "https://cdn.brandfetch.io/clerk.com/logo?c=1id9gSQYSNw8Mf4xwCA", alt: "Clerk" },
    {
      src: "https://cdn.brandfetch.io/brandfetch.com/logo?c=1id9gSQYSNw8Mf4xwCA",
      alt: "Brandfetch",
    },
    { src: "https://cdn.brandfetch.io/typeform.com/logo?c=1id9gSQYSNw8Mf4xwCA", alt: "Typeform" },
  ]

  return (
    <>
      {/* Keyframes live in the component so the file is totally self‑contained */}
      <style>{`
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>

      <div className="relative w-full overflow-clip bg-white">
        {/*
         * width: max‑content → make the strip as wide as its content so it can slide
         * animate‑[marquee_15s_linear_infinite] → Tailwind 4 arbitrary animation util
         * gap‑5 + pl‑5 → matches the 20 px (--gap) spacing in the original
         */}
        <div className="flex w-max animate-[marquee_15s_linear_infinite] gap-5 pl-5">
          {/* Duplicate the array so the scroll looks seamless */}
          {[...logos, ...logos].map((logo, idx) => (
            <img
              key={idx}
              src={logo.src}
              alt={logo.alt}
              className="h-10 w-auto opacity-100 transition-transform duration-200 hover:scale-105"
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default BrandCarousel
