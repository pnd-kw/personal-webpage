export type ImageMedia = {
  type: "image";
  src: string;
  alt: string;
};

export type VideoMedia = {
  type: "video";
  src: string;
  poster?: string;
};

export type LinkMedia = {
  type: "link";
  label: string;
  href: string;
};

export type ProjectMedia = ImageMedia | VideoMedia | LinkMedia;
