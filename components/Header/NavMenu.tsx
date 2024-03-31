import { ExternalLink } from "lucide-react";
import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "components/shadcn/NavigationMenu";
import { projects } from "data/projects";
import { cn, deKebabify } from "utils/helpers";

const artistSlugs = projects.map(({ artistSlug }) => artistSlug);
const uniqueArtists = [...new Set(artistSlugs)];

export const NavMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-1 p-2 md:w-[500px] md:grid-cols-2">
              {projects.map((project) =>
                project.local ?
                  <InternalListItem
                    href={`/project/${project.projectSlug}`}
                    key={project.name}
                  >
                    {project.name}
                  </InternalListItem>
                : <ExternalListItem
                    href={project.externalUrl}
                    key={project.name}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {project.name}
                  </ExternalListItem>,
              )}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Artists</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-1 p-2 md:w-[500px] md:grid-cols-2">
              {uniqueArtists.map((slug) => {
                return (
                  <InternalListItem href={`/artist/${slug}`} key={slug}>
                    {deKebabify(slug)}
                  </InternalListItem>
                );
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <a
            href="https://market.substratum.art/"
            rel="noreferrer"
            target="_blank"
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Market
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ExternalListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ children, className, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "block select-none p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          ref={ref}
          {...props}
        >
          <div className="flex items-center gap-2 text-base font-medium leading-none">
            {children} <ExternalLink className="size-5" />
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ExternalListItem.displayName = "ListItem";

const InternalListItem = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          className="block select-none p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          href={href}
        >
          <div className="text-base font-medium leading-none">{children}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
