import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    text-align:center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 400px;
`;

const ErrorMsg = styled.span`
    color : ${props => props.color};
`;

export default function Error({ errorMsg , color }){
    return (
        <Container>
            <ErrorMsg color = { color }>{errorMsg}</ErrorMsg>
        </Container>
    )
}

    Error.prototype = {
        errorMsg : PropTypes.string.isRequired,
    }