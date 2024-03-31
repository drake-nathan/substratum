import { useState } from "react";

import Card from "../LandingPage/Projects/Card";
import ArtistTabBar from "./ArtistTabBar";
import Collectors from "./Collectors";
import { projects } from "data/projects";

interface Props {
  artistAddress: string;
  width: number;
}

const ArtistContent = ({ artistAddress, width }: Props) => {
  const [mainContent, setMainContent] = useState<string>("projects");

  if (mainContent == "projects") {
    const filteredProjects = projects.filter((project) => {
      if (project.artistAddress == artistAddress) {
        return true;
      }
    });
    return (
      <div className="mt-20 flex w-full flex-col items-center max-sm:mt-4 ">
        <ArtistTabBar
          mainContent={mainContent}
          setMainContent={setMainContent}
          width={width}
        />

        <hr className="w-full border-[0.5px] border-black dark:border-white" />
        <div
          className="mt-8 grid max-w-[calc(100%-180px)] grid-cols-1 gap-8 max-sm:max-w-[calc(100%-3em)] md:grid-cols-2 xl:grid-cols-3"
          style={{ width }}
        >
          {filteredProjects.map((project) => (
            <Card key={project.name} project={project} />
          ))}
        </div>
      </div>
    );
  } else if (mainContent == "collectors") {
    return (
      <div className="mt-20 flex w-full flex-col items-center max-sm:mt-4 ">
        <ArtistTabBar
          mainContent={mainContent}
          setMainContent={setMainContent}
          width={width}
        />

        <hr className="w-full border-[0.5px] border-black dark:border-white" />
        <div
          className="mt-8 flex max-w-[calc(100%-180px)] flex-col items-center"
          style={{ width }}
        >
          <Collectors />
        </div>
      </div>
    );
  }
};

export default ArtistContent;
