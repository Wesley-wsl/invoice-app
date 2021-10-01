import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 20px;
    cursor: pointer;

    ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
        background-color: #252945;
        padding: 30px;
        border-radius: 10px;
        align-items: center;
        &:hover {
            border: 1px solid #7c5dfa;
        }

        span {
            color: #888eb0;
        }

        .date, .name {
            color:#888eb0;
            font-size: 14px;
        }

        .invoice {
            font-size: 18px;
        }

        .state {
            display: flex;
            align-items: center;
            div {
                width: 6px;
                height: 6px;
                background-color: #ff8f00;
                border-radius: 50%;
                margin-right: 6px;
            }

            p {
                color: #ff8f00;
                // Pending: #ff8f00
                // Paid: #00ff37
                // Draft: #fff
            }

            background-color: #ff8f0024;
            // Pending: #ff8f0024
            // Paid: #1bff0024
            // Draft: #111
            border-radius: 6px;
            padding: 8px;
        }
    }
`;
