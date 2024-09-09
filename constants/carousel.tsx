import image1 from "@/assets/carousel/national-cancer-institute-xDSD3Vmzh70-unsplash.jpg";
import image2 from "@/assets/carousel/one-big-happy-family-cropped-shot-of-a-happy-dive-2023-11-27-04-53-51-utc.jpg";
import image3 from "@/assets/carousel/outdoor-portrait-of-cheerful-indian-family-sitting-2024-02-13-02-17-57-utc.jpg";

type carousalImagesType = {
  id: string;
  src: any;
};

const carousalImages: carousalImagesType[] = [
  {
    id: "0",
    src: image1, // color="#FF9021"
  },
  {
    id: "1",
    src: image2,
  },
  {
    id: "2",
    src: image3,
  },
];

export default carousalImages;
