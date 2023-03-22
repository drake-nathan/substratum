import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Project, projects } from 'components/LandingPage/Projects/projects';
import ProjectHead from 'components/ProjectPage/ProjectHead';
import Tokens from 'components/ProjectPage/Tokens/Tokens';
import ProjectMenuBar from 'components/ProjectPage/ProjectMenuBar';
import Details from 'components/ProjectPage/Details/Details';

const HomeContainer = styled.div`
  width: 100%;
  max-width: 2000px;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1em;
`;

const Home: NextPage = () => {
  const { projectSlug } = useRouter().query;

  const [project, setProject] = useState<Project>();
  const [error, setError] = useState<string>();
  const [tab, setTab] = useState<string>('details');

  useEffect(() => {
    if (projectSlug && typeof projectSlug === 'string') {
      const project = projects.find((p) => p.projectSlug === projectSlug);

      if (project) {
        setProject(project);
      } else {
        console.error('Project not found');
        setError('Project not found');
      }
    }
  }, [projectSlug]);

  const title = project?.name ? `substratum | ${project.name}` : 'substratum';

  return (
    <HomeContainer>
      <Head>
        <title>{title}</title>
        <meta name="description" content="substratum" />
      </Head>

      {projectSlug && project && (
        <>
          <ProjectHead project={project} />
          <ProjectMenuBar tab={tab} setTab={setTab}></ProjectMenuBar>
          {tab && tab === 'all-outputs' ? (
            <Tokens projectSlug={projectSlug as string} project={project} />
          ) : (
            <Details project={project}></Details>
          )}
        </>
      )}

      {error && <h1>{error}</h1>}
    </HomeContainer>
  );
};

export default Home;
