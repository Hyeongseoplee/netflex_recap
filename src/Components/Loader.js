import styled from 'styled-components';

const Container = styled.div`
font-size: 28px;
display:flex;
justify-content: center;
margin-top:20px;
`;

export const Loader = () => {
    return (
        <Container>
            Loading .. 
        </Container>
    )
}