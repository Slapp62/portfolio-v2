export const Header = () => {
  return (
    <header className="header w-full text-stone-300">
      <nav className="align-center mr-5 flex w-full justify-around gap-10 p-3 text-xl">
        <div className="flex gap-10 px-10">
          <button>
            <a className="link-hover scroll-smooth" href="#projects">
              Projects
            </a>
          </button>
          <button>
            <a className="link-hover scroll-smooth" href="#contact">
              Contact
            </a>
          </button>
        </div>
      </nav>
    </header>
  );
};
