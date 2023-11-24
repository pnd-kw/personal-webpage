import Button from "@/components/Button";
import Navbar from "@/components/Navbar";

export default function Home() {
  const name = <p className="font-bold text-xl text-sky-700">Krisna</p>;
  return (
    <div>
      <Navbar />
      <div className="w-[1024px] py-24 mx-auto flex items-center">
        <div className="pr-28">
          <img
            className="w-[300px] h-[600px] object-cover"
            src="/images/greeting-img.png"
          />
        </div>
        <div className="flex-col">
          <div className="pb-12">
            <p className="font-bold text-3xl">
              "
              <span className="font-bold text-3xl">
                Crafting Digital Experiences:
              </span>
            </p>

            <p className="font-bold text-4xl pr-2">
              Your Go-To{" "}
              <span className="font-bold text-sky-700 text-4xl">
                Flutter Developer"
              </span>
            </p>
          </div>
          <div className="w-[640px] pb-12">
            <p>
              Hello! My name is{" "}
              <span className="font-bold text-sky-700">Krisna</span>, i'm a
              passionate Flutter Developer with a knack for crafting captivating
              mobile applications. My journey in coding began with a fascination
              for creating seamless user experiences. Proficient in Dart and
              adept at leveraging Flutter's versatility, I thrive on turning
              ideas into polished, functional, and aesthetically pleasing apps.
              My focus lies in building scalable solutions and embracing
              innovative approaches to ensure delightful user interactions.
              Let's create something remarkable together in the world of mobile
              development!
            </p>
          </div>
          <div className="flex items-center">
            <div className="pr-8">
              <Button size="large" color="sky" textColor="text-white">
                WORKS
              </Button>
            </div>
            <Button size="large" color="white" textColor="text-sky">
              RESUME
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
