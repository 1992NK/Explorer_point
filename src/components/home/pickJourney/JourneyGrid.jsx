import JourneyCard from "./JourneyCard";
import { journeyData } from "@/data/journeyData";
import styles from "./journeyGrid.module.css";

const JourneyGrid = () => {
  return (
    <div className={styles.grid}>
      {journeyData.map((item, index) => (
        <JourneyCard key={item.id} item={item} index={index} />
      ))}
    </div>
  );
};

export default JourneyGrid;