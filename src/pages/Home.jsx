import {useState} from 'react'

export default function Home() {
  const [messageHovered, setMessageHovered] = useState(false);

  return (
    <main className="md:px-16 md:pt-20 flex flex-col justify-between h-full">
          <div className=""></div>
          <p className="text-center">
            I code websites. Leave me a{" "}
            <a
              href="mailto:hello@aleksanderwalczuk.com"
              className="hover:underline"
              onMouseEnter={()=> setMessageHovered(true)}
              onMouseLeave={()=> setMessageHovered(false)}
            >
              message
            </a>{" "}
            if you want one.
          </p>
          <footer className="flex justify-between md:pb-10">
            <p>Updated: 2021</p>
            <div className="flex">
              <p className="mr-1">Contact:</p>
              <a
                className="text-base hover:underline transition-all duration-700 ease-in-out"
                href="mailto:hello@aleksanderwalczuk.com"
                rel="noopener noreferrer"
              >
                <span className={messageHovered ? 'text-red-400' : null}>hello</span>@aleksanderwalczuk.com
              </a>
            </div>
          </footer>
        </main>
  )
}
