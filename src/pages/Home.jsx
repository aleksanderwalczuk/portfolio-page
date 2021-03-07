import { useState } from "react";
import Footer from "../components/Footer";

export default function Home() {
  const [messageHovered, setMessageHovered] = useState(false);

  return (
    <main className="px-4 md:px-16 md:pt-20 flex flex-col justify-between h-full">
      <div className=""></div>
      <p className="text-center">
        I code websites. Leave me a{" "}
        <a
          href="mailto:hello@aleksanderwalczuk.com"
          className="hover:underline"
          onMouseEnter={() => setMessageHovered(true)}
          onMouseLeave={() => setMessageHovered(false)}
        >
          message
        </a>{" "}
        if you want one.
      </p>
      <Footer messageHovered={messageHovered} />
    </main>
  );
}
