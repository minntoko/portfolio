const Header = () => {
  return (
    <header className="text-gray-700 border-b border-gray-200 sticky top-0 backdrop-blur-xl bg-white/60 z-50">
      <div className="flex container mx-auto p-5 flex-col md:flex-row justify-between items-center">
        <a href="/#home" className="font-medium text-gray-900 mb-3 md:mb-0">
          <span className="text-xl ml-3">Tomoya's Portfolio</span>
        </a>
        <nav>
          <ul className="flex list-none text-base">
            <li>
              <a
                href="#home"
                className="mr-5 hover:text-blue-400 transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="mr-5 hover:text-blue-400 transition-all duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#works"
                className="mr-5 hover:text-blue-400 transition-all duration-300"
              >
                Works
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header