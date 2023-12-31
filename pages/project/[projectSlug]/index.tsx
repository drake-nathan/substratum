import Details from "components/ProjectPage/Details/Details";
import ProjectHead from "components/ProjectPage/ProjectHead";
import ProjectMenuBar from "components/ProjectPage/ProjectMenuBar";
import Tokens from "components/ProjectPage/Tokens/Tokens";
import { type Project, projects } from "components/staticData/projects";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { parseAsStringEnum, useQueryState } from "next-usequerystate";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { isString } from "utils/helpers";

const HomeContainer = styled.div`
  width: 100%;
  max-width: 2000px;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home: NextPage = () => {
  const { projectSlug } = useRouter().query;

  const [project, setProject] = useState<Project>();
  const [error, setError] = useState<string>();
  const [tab, setTab] = useQueryState(
    "tab",
    parseAsStringEnum(["details", "tokens"])
      .withDefault("details")
      .withOptions({
        history: "push",
        shallow: false,
      }),
  );

  useEffect(() => {
    if (projectSlug && isString(projectSlug)) {
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
    <HomeContainer>
      <Head>
        <title>{title}</title>
        <meta content="substratum" name="description" />
      </Head>

      {projectSlug && project && isString(projectSlug) && (
        <>
          <ProjectHead project={project} />
          <ProjectMenuBar setTab={setTab} tab={tab} />

          {tab === "tokens" ? (
            <Tokens project={project} projectSlug={projectSlug} />
          ) : (
            <Details project={project} />
          )}
        </>
      )}

      {error && <h1>{error}</h1>}
    </HomeContainer>
  );
};

export default Home;
