import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <span>
        Made with ❤️ by{" "}
        <Link href="https://github.com/AlfreMK/ajedrez-uc">ajedrez-uc</Link>
      </span>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  background-color: rgb(2, 132, 199);
  padding: 20px 0;
  color: white;
  font-size: 0.8rem;
  & span {
    margin-right: 20px;
  }
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
`;
