import styled from "styled-components";
import LogoUC from "./LogoUC";

function PageTitle() {
  return (
    <Bar>
      <Logo>
        <LogoUC />
        <Title>Ajedrez UC</Title>
      </Logo>
      <SocialMedia>
        <Link
          href="https://www.instagram.com/seleccionajedrezuc/"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <Icon
            className="fa fa-instagram"
            style={{ fontSize: "1.5rem" }}
          ></Icon>
          <span>@seleccionajedrezuc</span>
        </Link>
        <Link
          href="https://t.me/joinchat/H0vd50Z4xKgwrVf_6Efiiw"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <Icon
            className="fa fa-telegram"
            style={{ fontSize: "1.5rem" }}
          ></Icon>
          <span>DCChess</span>
        </Link>
      </SocialMedia>
    </Bar>
  );
}

export default PageTitle;

const Icon = styled.i`
  margin: 0 5px;
  margin-top: 1px;
`;

const Link = styled.a`
  color: #f8fafc;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin: 5px 0;
  &:hover span {
    filter: brightness(1.2);
    text-decoration: underline;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 1rem;
`;

const Bar = styled.div`
  margin: 0;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #0284c7;
  color: #f8fafc;
  padding: 10px 0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
  @media (max-width: 768px) {
    display: none;
  }
`;
