// import { getImagePath } from '@/utils/basePathHelper';
import Image from 'next/image';

const Footer: React.FC = () => {
  // const bloc = getImagePath('bloc-logo.svg');
  // const riverpod = getImagePath('riverpod-logo.svg');
  // const firebase = getImagePath('firebase-logo.svg');

  return (
    <div className="sticky bottom-0 z-40 w-full py-4 h-1/10 bg-white">
      <footer className="flex items-center justify-center space-x-2">
        <Image className="px-2" src="/images/bloc-logo.svg" alt="bloc-logo" width={95} height={40}/>
        <Image
          className="px-2"
          src="/images/riverpod-logo.svg"
          alt="riverpod-logo"
          width={159}
          height={50}
        />
        <Image
          className="px-2"
          src="/images/firebase-logo.svg"
          alt="firebase-logo"
          width={50}
          height={50}
        />
      </footer>
    </div>
  );
};

export default Footer;
