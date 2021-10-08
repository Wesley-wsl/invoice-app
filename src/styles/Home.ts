import styled from "styled-components";

export const Container = styled.main`
    max-width: 800px;
    margin: 0 auto;
`;
export const InvoicesBar = styled.section`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    margin-bottom: 50px;
    align-items: center;

    .introducion {
        h1 {
            font-size: 40px;
        }

        p {
            margin-top: 7px;
            font-size: 14px;
        }
    }

    .actions {
        display: flex;

        div {
            padding: 15px;
        }

        button {
            background-color: #7c5dfa;
            padding: 15px;
            border: none;
            border-radius: 20px;
            color: #fff;
            cursor: pointer;
            position: relative;
            padding-left: 45px;
            span > svg {
                    background-color: #fff;
                    position: absolute;
                    left: 7px;
                    top: 8px;
                    padding-left: 10px;
                    padding-top: 10px;
                    width: 2rem;
                    height: 2rem;
                    border-radius: 50%;
            }
        }
    }
`;


export const BackgroundForModal = styled.div`

background-color: #00000060;
position: fixed;
width: 100vw;
height: 100vh;
top: 0;
`