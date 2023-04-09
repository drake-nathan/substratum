import * as St from './Footer.styled';

const Footer = (): JSX.Element => {
  const year = new Date().getFullYear();

  return (
    <St.OuterWrapper>
      <St.LineOne />
      <St.LineTwo />

      <St.InnerContainer>
        <St.Row>
          <St.CopyrightIcon />{' '}
          <St.Text>
            Substratum
            {year}
          </St.Text>
        </St.Row>

        <St.Row>
          <St.SmallText>
            By interacting with this website you agree to the{' '}
            <St.Link
              href="https://chainlife.gitbook.io/docs/legal/terms"
              target="_blank"
              rel="noreferrer"
            >
              terms
            </St.Link>
            .
          </St.SmallText>
        </St.Row>
      </St.InnerContainer>
    </St.OuterWrapper>
  );
};

export default Footer;
