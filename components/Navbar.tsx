import Link from "next/link";
import Image from "next/image";

const NavBar: React.FC = () => {
  return (
    <header className="h-14 w-full bg-white sticky top-0 z-50 shadow-lg">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-full md:w-5/6 flex justify-end">
          <div className="py-3 pl-2">
            <Link href="#home">
              <div className="w-8 h-8 rounded-full bg-sky-700 flex justify-center items-center">
                <p className="font-bold text-white text-xs">KW</p>
              </div>
            </Link>
          </div>
          <div className="pl-4 py-2">
            <a
              target="_blank"
              href="https://github.com/pnd-kw"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 rounded-full flex justify-center items-center">
                <Image
                  src="images/logo-github.svg"
                  alt="github logo"
                  width={30}
                  height={30}
                />
              </div>
            </a>
          </div>
          <div className="pl-4 py-2">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/krisna-pandu-b52b133a5/"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 rounded-full flex justify-center items-center">
                <Image
                  src="images/logo-linkedin.svg"
                  alt="linkedin logo"
                  width={30}
                  height={30}
                />
              </div>
            </a>
          </div>
          <div className="pl-4 py-2">
            <a
              target="_blank"
              href="https://medium.com/@pandu.usahaku"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 rounded-full flex justify-center items-center">
                <Image
                  src="images/medium-dark.svg"
                  alt="medium logo"
                  width={30}
                  height={30}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
