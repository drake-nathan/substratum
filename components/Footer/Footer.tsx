import React from 'react';
import * as St from './Footer.styled';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <St.Container>
      <St.Row>
        <St.CopyrightIcon /> Matto {year}
      </St.Row>
      <St.Row>
        <St.Text>
          By interacting with this website you agree to the{' '}
          <St.Link
            href="https://chainlife.gitbook.io/docs/legal/terms"
            target="_blank"
            rel="noreferrer"
          >
            terms
          </St.Link>
          .
        </St.Text>
      </St.Row>
    </St.Container>
  );
};

export default Footer;
