const Footer = () => {
  return (
    <footer>
      <div className="conteinr px-5 py-8 mx-auto bg-blue-500 text-white text-center">
        <div className="flex flex-wrap items-center justify-around">
          <div>
            <a href="#home">Tomoyaについて</a>
          </div>
          <div className="flex flex-col">
            <a href="#home">Home</a>
            <a href="#skills">My Skills</a>
            <a href="#works">Works</a>
          </div>
        </div>
        <small className="block mt-4">
          &copy; 2023 tomoya All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer