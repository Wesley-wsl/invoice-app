import styled from "styled-components";

export const Container = styled.section`
    display: ${(props: { newInvoice: Boolean }) =>
        props.newInvoice === true ? "flex" : "none"};
    position: fixed;
    background-color: ${(props) => props.theme.primary};
    height: 100vh;
    overflow-y: scroll;
    overflow-x: auto;
    width: 580px;
    top: 0;
    left: 0;
    animation: appear 0.3s linear;

    @media (max-width: 700px) {
        width: 85%;


        input {
            width:90%;
        }
    }



    h2 {
        padding: 10px;
        margin-top: 20px;
    }

    p {
        color: #7c5dfa;
        padding: 5px;
        margin: 20px;
    }
    padding-left: 20px;

    @keyframes appear {
        0% {
            transform: translateX(-100%);
            opacity: 0.8;
        }

        100% {
            transform: translateX(0%);
            opacity: 1;
        }
    }

    .Send {
        display: flex;
        justify-content: flex-end;
        margin-right: 45px;
    }
`;

export const Button = styled.button`
    padding: 14px;
    border: none;
    margin: 10px;
    border-radius: 20px;
    background-color: ${(props) => props.theme.buttonNewInvoice};
    color: #fff;
    cursor: pointer;
`;

export const Group = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    flex-wrap: wrap;
    margin-right: 60px;

    label {
        margin-bottom: 10px;
    }

    div {
        display: flex;
        flex-direction: column;
        margin-right: 10px;

        input {
            width: 150px;
        }
    }
    margin-bottom: 40px;
`;

export const InputLarger = styled.input`
    padding: 15px;
    border-radius: 7px;
    border: none;
    margin: 20px auto;
    width: 90%;
    background-color: ${(props) => props.theme.secondary};
    border: 1px solid #8060ff6a;
`;

export const ItemList = styled.section`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    margin-right: 55px;
    align-items: center;

    @media (max-width: 700px) {
        flex-direction: column;
        margin: 0px;
        align-items: flex-start;
    }

    div {
        display: flex;
        flex-direction: column;
    }

    .input-small {
        width: 80px;
    }
`;
