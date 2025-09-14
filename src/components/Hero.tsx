export const Hero = () => {
  return (
    <div className="hero mx-auto flex h-[600px] w-3/4 items-center justify-center gap-5">
      <div className="hero-content flex flex-col items-center justify-center h-[80%] w-[70%] p-5 border border-white rounded-lg text-white text-center">
        <h1 className="text-5xl font-bold ">Simcha Lapp</h1>
        <h2 className="text-2xl p-5">Full Stack Web Developer</h2>
        <p className="w-3/4">I am a full stack web developer with a passion for creating dynamic and user-friendly web applications.</p>
      </div>

      <div className="hero-content flex flex-col items-center justify-center h-[80%] w-[50%] p-5 text-white">
        <img src="./profile pic.jpg" alt="profile" className="rounded-2xl object-cover object-center" />
        <button className="mt-10 bg-green-800 rounded-2xl px-10 py-5">Download Resume/CV</button>
      </div>
    </div>
  );
};