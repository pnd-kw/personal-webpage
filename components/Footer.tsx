const Footer: React.FC = () => {
  return (
    <div className="sticky bottom-0 z-40 w-full py-4 h-1/10 bg-white">
      <footer className="flex items-center justify-center space-x-2">
        <img className="px-2" src="/images/bloc-logo.svg" alt="bloc-logo" />
        <img
          className="px-2"
          src="/images/riverpod-logo.svg"
          alt="riverpod-logo"
        />
        <img
          className="px-2"
          src="/images/firebase-logo.svg"
          alt="firebase-logo"
        />
      </footer>
    </div>
  );
};

export default Footer;