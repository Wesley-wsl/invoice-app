import styled from "styled-components";

export const Container = styled.section`
    display: ${(props: {newInvoice: Boolean}) => props.newInvoice === true ? 'flex' : 'none'};
    position: fixed;
    background-color: #141625;
    height: 640px;
    overflow-y: scroll;
    overflow-x: auto;
    width: 580px;
    top: 0;
    left: 0;

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
`;

export const Button = styled.button`
    padding: 14px;
    border: none;
    margin: 10px;
    border-radius: 20px;
    background-color: #7c5dfa;
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
    background-color: #1e2139;
    border: 1px solid #8060ff6a;
`;
export const Select = styled.select`
    padding: 15px;
    border-radius: 7px;
    border: none;
    margin: 20px auto;
    width: 90%;
    background-color: #1e2139;
    border: 1px solid #8060ff6a;
    color: #fff;
`;

export const ItemList = styled.section`

.container-item {
    display: flex;
    margin-bottom: 20px;
    margin-right: 30px;
    align-items: center;
}

.input-small {
    width: 80px;
}

div > button {
    padding: 15px;
    border: none;
    background-color: #1e2139;
    border-radius: 20px;
    width: 90%;
    color: #fff;
    margin: 30px 0;
    cursor: pointer;
}

#total {
    background-color: #141625;
}

`;
