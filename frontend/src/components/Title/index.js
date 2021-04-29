import styled from 'styled-components';

const Title = styled.h1`
    font-size:${props => props.size};
    color:${props => props.color};
`;
export const SubTitle = styled(Title).attrs({ as: 'span'})`

    font-size:1.2rem;
    color:white;
    margin-bottom:50px;

`;
export default Title;