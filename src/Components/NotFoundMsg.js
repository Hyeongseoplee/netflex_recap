import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    text-align:center;
    font-size:22px;
`;

const ErrorMsg = styled.span`
    color : ${props => props.color};
`;

export default function NotFoundMsg({ text, color }){
    return (
        <Container>
            <ErrorMsg color={color}>{text}</ErrorMsg>
        </Container>
    )
}

NotFoundMsg.prototype = {
        text : PropTypes.string.isRequired,
        color : PropTypes.string.isRequired,
    }