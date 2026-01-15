import { LOGOS } from "@/data/logos";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    // <div className="z-40 w-full py-4 h-1/10 bg-white">
    //   <div className="mx-auto w-1/2 overflow-hidden marquee-mask">
    //     <div className="flex flex-nowrap animate-marquee">
    //       {[...LOGOS, ...LOGOS].map((item, index) => (
    //         <div
    //           key={`${item.alt}-${index}`}
    //           className="mx-4 flex items-center shrink-0"
    //         >
    //           <Image
    //             src={item.src}
    //             alt={item.alt}
    //             width={item.width}
    //             height={item.height}
    //             className="opacity-60 hover:opacity-100 transition"
    //           />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="z-40 w-full py-4 bg-white">
      <div className="mx-auto w-full sm:w-2/3 overflow-hidden marquee-mask">
        <div className="animate-marquee">
          {[...LOGOS, ...LOGOS].map((item, index) => (
            <div
              key={`${item.alt}-${index}`}
              className="mx-6 flex items-center shrink-0"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="opacity-60 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
