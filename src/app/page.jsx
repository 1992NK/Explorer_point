import Image from "next/image";
import styles from "./page.module.css";
import HoverParallaxSlider from "@/components/home/hoverParallaxSlider/HoverParallaxSlider";
import PickJourney from "@/components/home/pickJourney/PickJourney";
import ItinerarySection from "@/components/home/itinerarySection/ItinerarySection";
import FestivalSection from "@/components/home/festivalSection/FestivalSection";

export default function Home() {
  return (
    <>
      <HoverParallaxSlider />
      <ItinerarySection />
      <PickJourney />
      <FestivalSection />
      
    </>
  );
}
