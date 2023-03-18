import styled from "styled-components";


function Footer(){
    return (
        <Container>
            <span>
            Made with ❤️ by <Link href="https://github.com/AlfreMK">Alfredo Medina</Link>
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
    background-color: rgb(11 16 26);
    padding: 20px 0;
    color: #94a3b8;
    font-size: 0.8rem;
    & span {
        margin-right: 20px;
    }
`;

const Link = styled.a`
    color: #94a3b8;
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