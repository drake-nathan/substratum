import axios from "axios";
import { z } from "zod";

import type { CollectionResponse, IProject, IToken, TxCounts } from "./types";

const rootApiUrl = process.env.NEXT_PUBLIC_API_ROOT;

if (!rootApiUrl) {
  throw new Error("NEXT_PUBLIC_API_ROOT env var is not defined");
}

export const fetchToken = async (
  projectSlug: string,
  tokenId: number | string,
) => {
  const url = `${rootApiUrl}/project/${projectSlug}/token/${tokenId}`;

  const { data: token } = await axios.get<IToken>(url);

  return token;
};

export const fetchProject = async (projectSlug: string) => {
  const url = `${rootApiUrl}/project/${projectSlug}`;

  const { data } = await axios.get<IProject>(url);

  return data;
};

export const fetchCollectionTokens = async (
  projectSlug: string,
  limit: number,
  skip: number,
  sortDir: "asc" | "desc",
  sortType: "tokenId" | "worldLevel",
  tokenId: number | null,
) => {
  const url = `${rootApiUrl}/project/${projectSlug}/all-tokens`;

  const params = { limit, skip, sortDir, sortType, tokenId };

  const { data: tokens } = await axios.get<CollectionResponse>(url, { params });

  return tokens;
};

export const fetchTxCounts = async (projectSlug: string): Promise<TxCounts> => {
  const url = `${rootApiUrl}/project/${projectSlug}/txcount`;

  const { data } = await axios.get<TxCounts>(url);

  return data;
};

export const fetchCurrentSupplies = async (): Promise<
  Record<string, number>
> => {
  const url = `${rootApiUrl}/projects`;

  let projects: unknown;
  try {
    projects = (await axios.get<unknown>(url)).data;
  } catch (error) {
    throw new Error(`Error fetching current supplies`, {
      cause: error,
    });
  }

  const schema = z.array(
    z.object({
      current_supply: z.number(),
      project_slug: z.string(),
    }),
  );

  let currentSupplies: Record<string, number>;
  try {
    const parsedProjects = schema.parse(projects);

    currentSupplies = parsedProjects.reduce(
      (acc, project) => ({
        ...acc,
        [project.project_slug]: project.current_supply,
      }),
      {},
    );
  } catch (error) {
    throw new Error(`Error parsing current supplies`, {
      cause: error,
    });
  }

  return currentSupplies;
};

export const fetchTokenZeroSvg = async (projectSlug: string) => {
  const url = `${rootApiUrl}/project/${projectSlug}/token/0`;

  let tokenZero: unknown;
  try {
    tokenZero = (await axios.get<unknown>(url)).data;
  } catch (error) {
    throw new Error(`Error fetching token zero`, {
      cause: error,
    });
  }

  const schema = z.object({
    svg: z.string(),
  });

  let svg: string;
  try {
    const parsedTokenZero = schema.parse(tokenZero);

    svg = parsedTokenZero.svg;
  } catch (error) {
    throw new Error(`Error parsing token zero`, {
      cause: error,
    });
  }

  return svg;
};
