import Button from "@/components/Button";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // </main>
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
          <div className="flex items-center">
            <p className="font-bold text-3xl">"</p>
            <p className="font-bold text-3xl">Crafting Digital Experiences:</p>
          </div>
          <div className="flex items-center pb-12">
            <p className="font-bold text-4xl pr-2">Your Go-To</p>
            <p className="font-bold text-sky-700 text-4xl">
              Flutter Developer"
            </p>
          </div>
          <div className="w-[640px] pb-12">
            <p>
              Hello! I'm a passionate Flutter Developer with a knack for
              crafting captivating mobile applications. My journey in coding
              began with a fascination for creating seamless user experiences.
              Proficient in Dart and adept at leveraging Flutter's versatility,
              I thrive on turning ideas into polished, functional, and
              aesthetically pleasing apps. My focus lies in building scalable
              solutions and embracing innovative approaches to ensure delightful
              user interactions. Let's create something remarkable together in
              the world of mobile development!
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
