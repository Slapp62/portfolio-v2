export const Header = () => {
  return (
    <header className="header w-full text-stone-300">
      <nav className="text-xl p-3 gap-10 flex justify-around align-center mr-5 w-full">
        <div className="flex gap-10 px-10">
          <button><a className="link-hover scroll-smooth" href="#projects">Projects</a></button>
          <button><a className="link-hover scroll-smooth" href="#contact">Contact</a></button>
        </div>
      </nav>
    </header>
  );
}