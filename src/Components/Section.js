import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.section`
:not(:last-child){
    margin-bottom : 50px;
}
`;

const Title = styled.span`
    font-size:24px;
    font-weight: 400;
`;

const Grid = styled.div`
    font-size:14px;
    margin-top: 25px;
    gap:20px;
    display:grid;
    grid-template-columns:repeat(auto-fill, 100px);
`;

const Section = ({title, children}) => 
    <Container>
        <Title>{title}</Title>
        <Grid>{children}</Grid>
    </Container>;


Section.prototype = {
    title : PropTypes.string.isRequired,
    children : PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}


export default Section;