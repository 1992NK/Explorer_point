import Image from "next/image";
import styles from "./page.module.css";
import HoverParallaxSlider from "@/components/home/hoverParallaxSlider/HoverParallaxSlider";
import PickJourney from "@/components/home/pickJourney/PickJourney";

export default function Home() {
  return (
    <>
      <HoverParallaxSlider />
      <PickJourney />
    </>
  );
}
