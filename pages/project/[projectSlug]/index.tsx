import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Project, projects } from 'components/LandingPage/Projects/projects';
import ProjectPage from 'components/ProjectPage/ProjectHead';

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

  return (
    <HomeContainer>
      <Head>
        <title>substratum</title>
        <meta name="description" content="substratum" />
      </Head>

      {project && <ProjectPage project={project} />}

      {error && <h1>{error}</h1>}
    </HomeContainer>
  );
};

export default Home;
