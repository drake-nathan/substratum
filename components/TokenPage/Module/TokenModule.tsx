import { clsx } from "clsx";

import type { Project } from "data/projects";
import type { IToken } from "services/azureApi/types";

import BottomBar from "./BottomBar";
import OtherTokens from "./OtherTokens/OtherTokens";
import TokenImage from "./TokenImage";
import TokenInfo from "./TokenInfo/TokenInfo";
import st from "./tokenModule.module.css";
import { useCurrentSupply } from "hooks/useCurrentSupply";
import { intlNumberFormat } from "utils/helpers";

interface Props {
  project: Project;
  token: IToken;
}

const TokenModule = ({ project, token }: Props): JSX.Element => {
  const {
    additional_info,
    attributes,
    description,
    generator_url: generatorUrl,
    image,
    image_mid: imageMid,
    token_id: tokenId,
  } = token;
  const { aspectRatio, isZeroIndexed, projectSlug } = project;

  const currentSupply = useCurrentSupply(projectSlug);

  return (
    <div
      className="w-full px-8 py-6 sm:px-12 sm:py-8 md:px-20 lg:py-12"
      id="token-module-container"
    >
      <div className={clsx("grid grid-cols-2 gap-x-20", st["info-grid"])}>
        <div className="mb-8 lg:mb-20" style={{ gridArea: "token-name" }}>
          <h3 className="font-medium">{token.name}</h3>
          {/* TODO */}
          {/* <h6 className="text-2xl font-light">
            Owner: 0x1abc7154748d1ce5144478cdeb574ae244b939b5
          </h6> */}
        </div>

        <div
          className="h-max border border-black dark:border-white max-xl:mb-8"
          id="token-module-image-section"
          style={{ gridArea: "generator" }}
        >
          <TokenImage
            aspectRatio={aspectRatio}
            generatorUrl={generatorUrl}
            image={image}
            imageMid={imageMid}
          />

          <BottomBar project={project} token={token} />
        </div>

        <div
          className="w-full self-stretch border-b border-black dark:border-white"
          id="token-module-info-section"
          style={{ gridArea: "traits" }}
        >
          <TokenInfo
            additionalDescription={additional_info?.additional_description}
            description={description}
            poem={additional_info?.poem}
            projectSlug={projectSlug}
            traits={attributes}
          />
        </div>

        <div
          className="flex flex-col justify-center border-b border-black py-4 dark:border-white"
          style={{ gridArea: "stats" }}
        >
          <h3>
            {isZeroIndexed ? tokenId + 1 : tokenId} of{" "}
            {currentSupply && intlNumberFormat(currentSupply)}
          </h3>
          {/* TODO needs api data for transactions on a token */}
          {/* <p>Minted Apr 3, 2023, 9:23pm GMT-5</p> */}
        </div>
      </div>

      <OtherTokens project={project} token={token} />
    </div>
  );
};

export default TokenModule;
