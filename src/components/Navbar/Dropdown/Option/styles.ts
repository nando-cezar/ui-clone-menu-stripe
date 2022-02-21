import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px 25px;
    outline: 0;
    color: #fff;
    font-size: 18px;

    transition: opacity 0.2s;

    &:hover, &:focus {
        opacity: 0.55;
    }
`;
