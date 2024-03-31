import React from "react";

import CollectorCard from "./CollectorCard";
import collectorData from "data/collectors";

const Collectors = () => {
  return (
    <div className="w-full">
      {collectorData.map((collector, index) => (
        <CollectorCard
          collectorName={collector.name}
          key={collectorData[index].name}
          projects={collector.owned}
        />
      ))}
    </div>
  );
};

export default Collectors;
