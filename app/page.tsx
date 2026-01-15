import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Content from "@/components/contents/Content";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <div
        id="home"
        className="relative flex flex-col w-full md:h-[90vh] flex justify-center overflow-hidden bg-gradient-to-t from-sky-50 via-sky-300 to-sky-800"
      >
        <div className="w-full h-full flex flex-col items-start justify-center pt-20">
          <div className="w-full md:w-2/3 flex justify-center">
            <div className="md:grid md:grid-cols-2 gap-4 items-center min-h-full">
              <div className="relative w-[300px] h-[300px] md:w-[420px] md:h-[450px]">
                <div className="md:pl-7">
                  <Image
                    src="images/cloud.png"
                    alt="cloud"
                    width={500}
                    height={500}
                    className="absolute bottom-0 w-[100%] h-[130%] z-20 w-full pb-24"
                  />
                </div>
                <div className="pl-10 md:pl-20 md:pt-2">
                  <Image
                    src="images/rocket-and-fire.png"
                    alt="rocket"
                    width={400}
                    height={400}
                    className="absolute bottom-0 z-10 w-[100%] animate-float"
                  />
                </div>
              </div>

              <div>
                <div className="md:pb-4 pb-20">
                  <div className="flex items-center justify-center">
                    <p className="text-slate-900 bg-white/80 backdrop-blur-sm rounded-full py-2 px-5 shadow-lg">
                      <span className="font-bold text-lg md:text-2xl">
                        Crafting Digital Experiences
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center justify-center ">
                    <p className="font-semibold text-lg md:text-2xl text-slate-100">
                      Your Go-To<span className="ml-2"></span>
                      <span className="font-extrabold text-xl text-sky-900 md:text-3xl drop-shadow-[0px_0px_2px_white]">
                        Frontend Developer
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex md:flex-row w-full gap-4 items-center">
                  <Image
                    src="/images/profile.png"
                    alt="profile image"
                    width={120}
                    height={120}
                    className="rounded-full"
                  />
                  <div className="flex flex-col space-y-2 items-center">
                    <span className="bg-sky-600 rounded-full px-2 text-white font-semibold text-md md:text-xl">
                      &quot; Try me, i don&apos;t bites&quot;
                    </span>
                    <a href="/resume/Resume-Krisna-Pandu-Wibowo.pdf" download>
                      <Button
                        size="large"
                        color="white"
                        textColor="text-sky"
                        fontWeight="font-semibold"
                      >
                        <span className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4"
                            />
                          </svg>
                          <span>GET RESUME</span>{" "}
                        </span>
                      </Button>
                    </a>
                    <span className="text-xs text-slate-500">
                      PDF • Updated Jan 2026
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full mt-16 md:mt-0">
          <Image
            src="images/skyscrapper.png"
            alt="city-skyline"
            width={900}
            height={300}
            className="pointer-events-none w-full md:absolute md:bottom-[0px] md:right-0 md:w-[40%] max-w-[900px]"
          />
        </div>
        <Footer />
      </div>
      <div className="flex-1">
        <Content />
      </div>
    </div>
  );
}
