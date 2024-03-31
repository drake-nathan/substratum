import React from "react";

import CollectorCard from "./CollectorCard";
import { collectorData } from "data/collectors";

interface OwnedItem {
  editionsOwned: number[];
  title: string;
}

interface CollectorData {
  name: string;
  owned: OwnedItem[];
}

const Collectors = () => {
  return (
    <div className="w-full">
      {collectorData.map((collector?: CollectorData, index?: number) => (
        <CollectorCard
          collectorName={collector ? collector.name : ""}
          key={collector ? collector.name : index}
          projects={collector ? collector.owned : []}
        />
      ))}
    </div>
  );
};

export default Collectors;
