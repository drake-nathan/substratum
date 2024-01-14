import type { NextPage } from "next";

import Head from "next/head";
import { useRouter } from "next/router";
import { parseAsStringEnum, useQueryState } from "next-usequerystate";
import React, { useEffect, useState } from "react";

import Details from "components/ProjectPage/Details/Details";
import ProjectHead from "components/ProjectPage/ProjectHead";
import ProjectMain from "components/ProjectPage/ProjectMain";
import Tabs from "components/ProjectPage/Tabs";
import Tokens from "components/ProjectPage/Tokens/Tokens";
import { type Project, projects } from "data/projects";
import { isString } from "utils/helpers";

const Home: NextPage = () => {
  const { projectSlug } = useRouter().query;

  const [project, setProject] = useState<Project>();
  const [error, setError] = useState<string>();
  const [tab, setTab] = useQueryState(
    "tab",
    parseAsStringEnum(["details", "mint", "tokens"])
      .withDefault("details")
      .withOptions({
        history: "push",
        shallow: false,
      }),
  );

  useEffect(() => {
    if (isString(projectSlug)) {
      const localProject = projects.find((p) => p.projectSlug === projectSlug);

      if (localProject) {
        setProject(localProject);
      } else {
        console.error("Project not found");
        setError("Project not found");
      }
    }
  }, [projectSlug, project]);

  const title = project?.name ? `substratum | ${project.name}` : "substratum";

  return (
    <div className="flex min-h-[75vh] w-full max-w-[2000px] flex-col items-center">
      <Head>
        <title>{title}</title>
        <meta content="substratum" name="description" />
      </Head>

      {isString(projectSlug) && project && (
        <>
          <ProjectHead project={project} tab={tab} />

          <Tabs
            projectSlug={projectSlug}
            setTab={(tab) => void setTab(tab)}
            tab={tab}
          />

          <ProjectMain project={project} projectSlug={projectSlug} tab={tab} />
        </>
      )}

      {error && <h1>{error}</h1>}
    </div>
  );
};

export default Home;
