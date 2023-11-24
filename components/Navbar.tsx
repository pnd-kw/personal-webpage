import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <header className="h-12">
      <div className="flex items-center">
        <div className="pl-20 py-2">
          <Link href="/">
            <button>
              <div className="w-8 h-8 rounded-full bg-sky-700 flex justify-center items-center">
                <p className="font-bold text-white text-xs">KW</p>
              </div>
            </button>
          </Link>
        </div>
        <div className="pl-4 py-2">
          <a target="_blank" href="https://github.com/pnd-kw" rel="noopener noreferrer">
            <button>
              <div className="w-10 h-10 rounded-full flex justify-center items-center">
                <img src="/images/logo-github.svg" />
              </div>
            </button>
          </a>
        </div>
        <div className="pl-4 py-2">
          <a target="_blank" href="https://www.linkedin.com/in/krisna-pandu-513774254/" rel="noopener noreferrer">
            <button>
              <div className="w-10 h-10 rounded-full flex justify-center items-center">
                <img src="/images/logo-linkedin.svg" />
              </div>
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
