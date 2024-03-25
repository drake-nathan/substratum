import { clsx } from "clsx";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

import type { SetState } from "utils/types";

import ConnectButton from "./ConnectButton";
import SocialIcons from "./SocialIcons";
import { artistUrls, projects } from "data/projects";
import { cn } from "utils/helpers";

interface Props {
  isOpen: boolean;
  setIsOpen: SetState<boolean>;
}

const artists = projects.map(({ artist }) => artist);
const uniqueArtists = [...new Set(artists)];

const MobileNav = ({ isOpen, setIsOpen }: Props): React.JSX.Element => {
  const clickHandler = () => setIsOpen(false);

  return (
    <div
      className={clsx(
        "fixed right-0 top-[90px] z-50 flex h-[calc(100svh-90px)] w-full flex-col items-center justify-between gap-4 bg-white px-4 pb-36 pt-12 shadow-lg delay-200 duration-500 dark:bg-black max-md:top-[49px] max-md:h-[calc(100svh-49px)] max-md:px-4 max-md:pb-24 max-md:pt-8",
        isOpen ? "translate-x-0" : "translate-x-full",
      )}
    >
      <ConnectButton className="border-none" />

      <div className="flex h-full flex-col items-center gap-2">
        <h4 className="mt-2 underline">Projects</h4>
        <ul className="mb-4 grid w-full grid-cols-2 gap-2 p-2">
          {projects.map((project) =>
            project.local ?
              <InternalListItem
                href={`/project/${project.projectSlug}`}
                key={project.name}
                onClick={clickHandler}
              >
                {project.name}
              </InternalListItem>
            : <ExternalListItem
                href={project.externalUrl}
                key={project.name}
                onClick={clickHandler}
                rel="noreferrer"
                target="_blank"
              >
                {project.name}
              </ExternalListItem>,
          )}
        </ul>

        <h4 className="underline">Artists</h4>
        <ul className="grid w-full grid-cols-2 gap-2 p-2">
          {uniqueArtists.map((artist) => {
            const url = artistUrls[artist];

            return (
              <ExternalListItem
                href={url}
                key={artist}
                onClick={clickHandler}
                rel="noreferrer"
                target="_blank"
              >
                {artist}
              </ExternalListItem>
            );
          })}
        </ul>
      </div>

      <SocialIcons />
    </div>
  );
};

export default MobileNav;

const ExternalListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ children, className, ...props }, ref) => {
  return (
    <li>
      <a
        className={cn(
          "block select-none p-1 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className,
        )}
        ref={ref}
        {...props}
      >
        <div className="flex items-center gap-2 text-sm font-medium leading-none">
          {children} <ExternalLink className="size-5" />
        </div>
      </a>
    </li>
  );
});
ExternalListItem.displayName = "ListItem";

const InternalListItem = ({
  children,
  href,
  onClick,
}: {
  children: React.ReactNode;
  href: string;
  onClick: () => void;
}) => {
  return (
    <li onClick={onClick}>
      <Link
        className="block select-none p-1 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        href={href}
      >
        <div className="text-sm font-medium leading-none">{children}</div>
      </Link>
    </li>
  );
};
