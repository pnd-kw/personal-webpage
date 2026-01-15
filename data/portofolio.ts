import { Portofolio } from "@/types/portofolio";

export const portofolio: Portofolio[] = [
  {
    id: "his-registration",
    sectionType: "his-registration",

    title: "Hospital Information System",
    subtitle: "Patient Registration Module",

    description:
      "Hospital Information System used to manage patients workflows including registration, queue handling, warehouse, and many more.",

    role: {
      title: "Frontend Developer",
      scope: "Patient Registration Module",
    },

    contributions: [
      "Developed local SSO authentication",
      "Developed outpatient registration forms integrated with government insurance",
      "Developed emergency room registration forms integrated with government insurance",
      "Developed booking services for outpatient patient registration",
    ],

    techStack: [
      {
        src: "images/javascript.svg",
        alt: "javascript",
        width: 20,
        height: 20,
      },
      {
        src: "images/react-original.svg",
        alt: "react",
        width: 20,
        height: 20,
      },
      {
        src: "images/nextjs-original.svg",
        alt: "next",
        width: 20,
        height: 20,
      },
      {
        src: "images/tailwindcss-icon.svg",
        alt: "tailwindcss",
        width: 20,
        height: 20,
      },
      {
        src: "images/shadcnui-dark.svg",
        alt: "shadcnui",
        width: 20,
        height: 20,
      },
      {
        src: "images/zustand-original.svg",
        alt: "zustand",
        width: 20,
        height: 20,
      },
      {
        src: "images/react-query-icon.svg",
        alt: "react-query",
        width: 20,
        height: 20,
      },
      {
        src: "images/reacthookform-dark.svg",
        alt: "react-hook-form",
        width: 20,
        height: 20,
      },
      {
        src: "images/zod.svg",
        alt: "zod",
        width: 20,
        height: 20,
      },
    ],

    media: [
      {
        type: "link",
        label: "Try it",
        href: "https://simrs-app-pi.vercel.app/",
      },
    ],
  },
  {
    id: "erm",
    sectionType: "erm",

    title: "Electronic Medical Record",
    subtitle: "Outpatient Module",

    description:
      "Electronic Medical Record used to record patient medical data, laboratorium data, radiology data, and many more.",

    role: {
      title: "Frontend Developer",
      scope: "Outpatient Module",
    },

    contributions: [
      "Developed local SSO authentication",
      "Developed an initial nursing assessment menu containing a list of outpatients, a list of patient medical histories, and an initial nursing assessment form.",
    ],

    techStack: [
      {
        src: "images/javascript.svg",
        alt: "javascript",
        width: 20,
        height: 20,
      },
      {
        src: "images/react-original.svg",
        alt: "react",
        width: 20,
        height: 20,
      },
      {
        src: "images/nextjs-original.svg",
        alt: "next",
        width: 20,
        height: 20,
      },
      {
        src: "images/tailwindcss-icon.svg",
        alt: "tailwindcss",
        width: 20,
        height: 20,
      },
      {
        src: "images/shadcnui-dark.svg",
        alt: "shadcnui",
        width: 20,
        height: 20,
      },
      {
        src: "images/zustand-original.svg",
        alt: "zustand",
        width: 20,
        height: 20,
      },
      {
        src: "images/react-query-icon.svg",
        alt: "react-query",
        width: 20,
        height: 20,
      },
      {
        src: "images/reacthookform-dark.svg",
        alt: "react-hook-form",
        width: 20,
        height: 20,
      },
      {
        src: "images/zod.svg",
        alt: "zod",
        width: 20,
        height: 20,
      },
    ],

    media: [
      {
        type: "image",
        src: "images/sc-erm1.PNG",
        alt: "screenshot erm 1",
      },
    ],
  },
  {
    id: "queue-display",
    sectionType: "queue-display",

    title: "Queue Display",
    subtitle: "Queue Display App",

    description:
      "Queue display app to display many queue used in hospital such as registration queue display, poliklinik queue display, doctor schedule display, and many more.",

    role: {
      title: "Frontend Developer",
      scope: "Queue Display App",
    },

    contributions: [
      "Developed authentication",
      "Developed monitoring bed display",
      "Developed poliklinik queue display",
      "Developed counter queue display",
      "Developed ACM menu",
    ],

    techStack: [
      {
        src: "images/javascript.svg",
        alt: "javascript",
        width: 20,
        height: 20,
      },
      {
        src: "images/react-original.svg",
        alt: "react",
        width: 20,
        height: 20,
      },
      {
        src: "images/vitejs-original.svg",
        alt: "vite",
        width: 20,
        height: 20,
      },
      {
        src: "images/tailwindcss-icon.svg",
        alt: "tailwindcss",
        width: 20,
        height: 20,
      },
      {
        src: "images/shadcnui-dark.svg",
        alt: "shadcnui",
        width: 20,
        height: 20,
      },
      {
        src: "images/zustand-original.svg",
        alt: "zustand",
        width: 20,
        height: 20,
      },
      {
        src: "images/reacthookform-dark.svg",
        alt: "react-hook-form",
        width: 20,
        height: 20,
      },
      {
        src: "images/zod.svg",
        alt: "zod",
        width: 20,
        height: 20,
      },
      {
        src: "images/socket-io.svg",
        alt: "socket-io",
        width: 20,
        height: 20,
      },
    ],

    media: [
      {
        type: "video",
        src: "videos/monitoring-bed.mp4",
      },
    ],
  },
];
