import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center">
  As a passionate software engineer, I find joy in the harmonious interplay between logic and creativity. Currently engrossed in the vibrant realm of WebHR, my expertise revolves around the MERN stack, where I effortlessly merge technology with innovation.
  <br />
  <br />
  With a fervent desire to craft elegant solutions, I navigate the ever-evolving landscape of software development. My journey involves transforming ideas into code, building seamless user experiences, and consistently pushing the boundaries of what's possible.
</p>

      </div>
    </section>
  );
};

export default About;