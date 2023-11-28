import Button from "@/components/Button";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  const cardsData = [
    {
      id: 0,
      title: "MONOTE APP",
      image: "images/monote.svg",
      description:
        "This is a simple note-taking application project built using Flutter with Sqflite database and Riverpod State Management. It’s a personal project with the main goal of learning how to publish a mobile application on the Play Store.",

      techLogo: ["images/flutter.svg"],
      url: "https://play.google.com/store/apps/details?id=com.rga.note_app&hl=en&gl=US",
    },
    {
      id: 1,
      title: "SIMBOK-KU APP",
      image: "images/simbok-ku.svg",
      description:
        "This is a tourism travel application development project initiated by a lecturer at a university in Semarang, Central Java. Central Java. It is being built using Flutter, GetX State Management, and Laravel as the backend service.",

      techLogo: ["images/flutter.svg", "images/laravel.svg"],
      url: "https://play.google.com/store/apps/details?id=com.simboku.trip_app&hl=en_US&gl=US",
    },
  ];

  return (
    <div className="relative h-screen overflow-y-scroll">
      <Navbar />
      <div
        id="home"
        className="w-full h-[90vh] flex justify-center overflow-hidden bg-slate-50"
      >
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="w-full md:w-2/3 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center min-h-full">
              <div className="flex items-center justify-center">
                <Image
                  className="object-cover w-[25vh] md:w-auto md:max-w-lg mx-auto"
                  src="images/rocket.svg"
                  alt="Landing page image"
                  width={600}
                  height={600}
                />
              </div>
              <div>
                <div className="pb-12">
                  <div className="flex items-center justify-center">
                    <p className="font-bold text-xl md:text-3xl">
                      &quot;
                      <span className="font-bold text-xl md:text-3xl">
                        Crafting Digital Experiences:
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="font-bold text-2xl md:text-4xl">
                      Your Go-To<span className="ml-2"></span>
                      <span className="font-bold text-sky-700 text-2xl md:text-4xl">
                        Flutter Developer&quot;
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center pb-12">
                  <div className="pr-8">
                    <Link href="#works">
                      <Button size="large" color="sky" textColor="text-white">
                        WORKS
                      </Button>
                    </Link>
                  </div>
                  <a
                    href="https://drive.google.com/u/0/uc?id=1yeNp4PAl0efSLCs42W8hIoObdyDpAgA-&export=download"
                    download="Resume-Krisna-Pandu.pdf"
                  >
                    <Button size="large" color="white" textColor="text-sky">
                      RESUME
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="about"
        className="w-full h-full flex flex-col items-center justify-center pb-24"
      >
        <div className="pb-12">
          <p className="font-bold text-4xl">ABOUT ME</p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center min-h-full">
            <div className="flex items-center justify-center">
              <Image
                className="object-cover w-[25vh] md:w-auto md:max-w-lg mx-auto"
                src="images/profile-photo.svg"
                alt="profile image"
                width={400}
                height={400}
              />
            </div>
            <div>
              <p>
                Hello! My name is{" "}
                <span className="font-bold text-sky-700">Krisna</span>, i&apos;m
                a passionate Flutter Developer with a knack for crafting
                captivating mobile applications. My journey in coding began with
                a fascination for creating seamless user experiences. Proficient
                in Dart and adept at leveraging Flutter&apos;s versatility, I
                thrive on turning ideas into polished, functional, and
                aesthetically pleasing apps. My focus lies in building scalable
                solutions and embracing innovative approaches to ensure
                delightful user interactions. Let&apos;s create something
                remarkable together in the world of mobile development!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="works"
        className="w-full h-full flex flex-col items-center justify-center pb-24"
      >
        <div className="pb-12">
          <p className="font-bold text-4xl">WORKS</p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div>
            {cardsData.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                image={item.image}
                description={item.description}
                techLogo={item.techLogo}
                url={item.url}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="pb-12" />
      <Footer />
    </div>
  );
}
