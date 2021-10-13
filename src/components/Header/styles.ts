import styled from "styled-components";

export const Container = styled.header`
    background-color: ${(props) => props.theme.secondary};
    padding: 15px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        cursor: pointer;
    }

    p {
        font-size: 20px;
        cursor: pointer;
    }

    svg {
        cursor: pointer;
    }
`;
