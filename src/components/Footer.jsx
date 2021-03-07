import React from "react";

export default function Footer({messageHovered}) {
  return (
    <footer className="flex justify-between md:pb-10 flex-col-reverse md:flex-row text-center md:text-left">
      <p>Updated: 2021</p>
      <div className="flex justify-center md:justify-start">
        <p className="mr-1">Contact:</p>
        <a
          className="text-base hover:underline transition-all duration-700 ease-in-out"
          href="mailto:hello@aleksanderwalczuk.com"
          rel="noopener noreferrer"
        >
          <span className={messageHovered ? "text-red-400" : null}>hello</span>
          @aleksanderwalczuk.com
        </a>
      </div>
    </footer>
  );
}
