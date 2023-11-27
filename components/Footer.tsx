import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <div className="sticky bottom-0 z-40 w-full py-4 h-1/10 bg-white">
      <footer className="flex items-center justify-center space-x-2">
        <Image className="px-2" src="/images/bloc-logo.svg" alt="bloc-logo" />
        <Image
          className="px-2"
          src="/images/riverpod-logo.svg"
          alt="riverpod-logo"
        />
        <Image
          className="px-2"
          src="/images/firebase-logo.svg"
          alt="firebase-logo"
        />
      </footer>
    </div>
  );
};

export default Footer;
