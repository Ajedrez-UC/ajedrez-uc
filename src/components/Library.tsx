import styled from "styled-components";
import library from "../data/library.json";

function Library() {
  const stringify = (str: any) => JSON.stringify(str).trim().replace(/"/g, "");
  const transformIndex = (index: number) => "I".repeat(index + 1);
  return (
    <Container>
      <SubContainer>
        <h2>Biblioteca</h2>
        <ChapterContainer>
          {library.map((chapter, index) => (
            <Chapter key={index}>
              <h3>{chapter.title}</h3>
              {chapter.books.map((content, index) => (
                <Content key={index}>
                  <Link
                    href={stringify(content)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {chapter.title} {transformIndex(index)}
                  </Link>
                </Content>
              ))}
            </Chapter>
          ))}
        </ChapterContainer>
        Para más contenido, visita
        <Link
          href="https://onedrive.live.com/?authkey=%21AFb3TEzsdh4k67s&id=5E5B60C097FB962E%211951&cid=5E5B60C097FB962E"
          target="_blank"
          rel="noreferrer"
        >
          nuestra biblioteca.
        </Link>
      </SubContainer>
    </Container>
  );
}

export default Library;

const ChapterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Chapter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: #f8fafc;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  & h3 {
    margin: 0;
  }
`;

const Link = styled.a`
  color: #2d3748;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    filter: brightness(1.2);
    text-decoration: underline;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #cbd5e1;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 700px;
  margin: 20px 10px;
  margin-bottom: 70px;
`;
