function App() {
  return (
    <div className="bg-gray h-screen text-base text-current">
      <header className="relative">
        <div className="absolute top-0 left-0 w-full md:h-20 bg-gray md:px-16 flex items-center justify-between">
          <h1 className="text-xl">aleksanderwalczuk</h1>
          <nav>
            <ul className="flex">
              <li className="md:p-2">About</li>
              <li className="md:p-2">Contact</li>
              <li className="md:p-2">Code</li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="md:px-16 md:pt-20 md:pb-10 flex flex-col justify-between h-full">
        <div className=""></div>
        <p className="text-center">
          I code websites. Leave me a <a href="mailto:hello@aleksanderwalczuk.com" className="hover:underline">message</a> if you want one.
        </p>
        <div className="flex justify-between">
          <p>Updated: 2021</p>
          <div className="flex">
            <p className="mr-1">Contact:</p>
            <a
              className="text-base hover:underline transition-all duration-700 ease-in-out"
              href="mailto:hello@aleksanderwalczuk.com"
              rel="noopener noreferrer"
            >
              <span>hello</span>@aleksanderwalczuk.com
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
