import styled from 'styled-components';

const Title = styled.h1`
    font-family: 'Antic Slab', serif;
    font-size:40px;
    color:${props => props.color};
`;
export const SubTitle = styled(Title).attrs({ as: 'h2'})`

    font-size:20px;
    color:white;
    margin-bottom:50px;

`;
export default Title;