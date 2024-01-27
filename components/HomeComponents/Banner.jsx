import Typewriter from "typewriter-effect";
import BannerLayout from "../Common/BannerLayout";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <BannerLayout>
      <div className=" inset-0 z-20 flex flex-col items-center py-6 justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
        <div className="bg-LightGray/10 w-[95%] h-[90%] px-4 py-2 rounded-xl overflow-hidden flex md:block">
          <div className="flex items-center md:items-center md:justify-around">
            <div className="">
              <div className="">
                <h1 className="text-3xl sm:text-4xl xl:text-5xl text-Snow font-bold">
                  Hello, Atharva here!
                </h1>
              </div>
              <div className="">
                <div className=" py-4 font-cascadia-normal text-Snow pb-4 text-xs h-20 lg:h-auto">
                  <span>
                    {"<"}
                    <span className="text-Green sm:text-base xl:text-lg font-bold">
                      div
                    </span>
                    {">"}{" "}
                    <span className="text-Snow sm:text-xl xl:text-2xl font-bold">
                      {" "}
                      I am a{" "}
                      <span className="inline-block">
                        <Typewriter
                          options={{
                            strings: [
                              "MERN Stack Developer",
                              "NextJs Developer",
                            ],
                            autoStart: true,
                            loop: true,
                          }}
                        />
                      </span>
                    </span>{" "}
                    {"</"}
                    <span className="text-Green sm:text-base xl:text-lg font-bold">
                      div
                    </span>
                    {">"}{" "}
                  </span>
                </div>
              </div>
              <a
                href="/AtharvaCV.pdf"
                className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 transform hover:scale-105"
                target="_blank"

              >
                <span className="text-Snow"> Resume</span>
              </a>
            </div>
            <div className="w-48 h-52 relative hidden md:block">
              <img
                className="absolute top-8 w-full h-full"
                src="images/emoji.png"
                alt="emoji"
              />
            </div>
          </div>
        </div>

        {/* details in row */}
        <div className="grid grid-cols-2 gap-4 md:gap-0 md:flex items-center justify-between w-full px-4 xl:px-8 2xl:px-16">
        <div className="flex items-center gap-x-1">
            <span className="text-base md:text-lg text-Green font-bold">
              3+
            </span>
            <span className="text-xs text-Snow">Years Of Experience </span>
          </div>
          
          <div className="flex items-center gap-x-1">
            <span className="text-base md:text-lg text-Green font-bold">
              8+
            </span>
            <span className="text-xs text-Snow">Completed Projects</span>
          </div>

          <div className="flex items-center gap-x-1">
            <span className="text-base md:text-lg text-Green font-bold">
              5+
            </span>
            <span className="text-xs text-Snow">Freelance Clients</span>
          </div>

          <div className="flex items-center gap-x-1">
            <span className="text-base md:text-lg text-Green font-bold">
              500+
            </span>
            <span className="text-xs text-Snow">Problems on GFG/Leetcode </span>
          </div>
        </div>
      </div>
    </BannerLayout>
  );
};

export default Banner;
