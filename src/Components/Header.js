import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SHeader = styled.header`
padding-top:20px;
border-bottom:2px solid black;
box-shadow: 2px 2px 5px black;
`;

const Header_wrapper = styled.div`
    padding-top: 8px;
    padding-bottom: 10px;
    display:flex;
    margin:0 2.5rem;
`;

const Header_logo = styled.div`
    color:red;
    font-size:35px;
`;

const Links = styled.ul`
    display: flex;
    gap:15px;
    align-items: center;
    justify-content: space-between;
    margin-left: 30px;
`;

const List = styled.li`
    list-style : none;
    text-align: center;
    display:flex;
    align-items: center;
    padding-bottom:10px;
    border-bottom: 5px solid lightgray;
`;

const SLink = styled(Link)`
    text-decoration-line : none;
    padding: 2px 10px;
`;

export default function Header() {
    return (
        <SHeader>
            <Header_wrapper>
            <Header_logo>Netflix</Header_logo>
            <Links>
                <List>
                    <SLink to="/">Home</SLink>
                </List>
                <List>
                    <SLink to="/tv">TV</SLink>
                </List>                
                <List>
                    <SLink to="/search">Search</SLink>
                </List>
            </Links>
            </Header_wrapper>
        </SHeader>
    )
}