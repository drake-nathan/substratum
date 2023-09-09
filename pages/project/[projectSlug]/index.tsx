import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Project, projects } from "components/staticData/projects";
import ProjectHead from "components/ProjectPage/ProjectHead";
import Tokens from "components/ProjectPage/Tokens/Tokens";
import ProjectMenuBar from "components/ProjectPage/ProjectMenuBar";
import Details from "components/ProjectPage/Details/Details";
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
  const [tab, setTab] = useState<"details" | "tokens">("details");

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
        <meta name="description" content="substratum" />
      </Head>

      {projectSlug && project && isString(projectSlug) && (
        <>
          <ProjectHead project={project} />
          <ProjectMenuBar projectSlug={projectSlug} tab={tab} setTab={setTab} />

          {tab === "tokens" ? (
            <Tokens projectSlug={projectSlug} project={project} />
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
