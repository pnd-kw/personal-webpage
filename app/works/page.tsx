import Card from "@/components/Card";
import Navbar from "@/components/Navbar";

// export default function Page() {
const Page: React.FC = () => {
  const cardsData = [
    {
      id: 0,
      title: "MONOTE APP",
      image: "/images/monote.svg",
      description:
        "This is a simple note-taking application project built using Flutter with Sqflite database and Riverpod State Management. It’s a personal project with the main goal of learning how to publish a mobile application on the Play Store.",
      techLogo: ["/images/flutter.svg"],
    },
    {
      id: 1,
      title: "SIMBOK-KU APP",
      image: "/images/simbok-ku.svg",
      description:
        "This is a tourism travel application development project initiated by a lecturer at a university in Semarang, Central Java. Central Java. It is being built using Flutter, GetX State Management, and Laravel as the backend service.",
      techLogo: ["/images/flutter.svg", "/images/laravel.svg"],
    },
  ];
  // const cardsData = {
  //   id: 0,
  //     title: "MONOTE APP",
  //     image: "/images/monote.svg",
  //     description:
  //       "This is a simple note-taking application project built using Flutter with Sqflite database and Riverpod State Management. It’s a personal project with the main goal of learning how to publish a mobile application on the Play Store.",
  //     techLogo: ["/images/flutter.svg", "/images/laravel.svg"], 
  // }
  return (
    <div className="h-screen overflow-y-auto">
      <Navbar />
      <div className="w-full flex justify-center items-center pt-20">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold text-center mb-12">WORKS</h1>
          <div>
            {cardsData.map((item) => (
              <Card key={item.id} title={item.title} image={item.image} description={item.description} techLogo={item.techLogo} />
            ))}
            {/* <Card
              key={cardsData.id}
              title={cardsData.title}
              image={cardsData.image}
              description={cardsData.description}
              techLogo={cardsData.techLogo}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
