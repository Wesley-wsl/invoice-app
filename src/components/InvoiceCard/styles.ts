import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 20px;
    cursor: pointer;

    ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
        background-color: #1e2139;
        padding: 25px;
        border-radius: 10px;
        align-items: center;
        height: 84px;
        transition: 0.3s ease;
        border: 1px solid transparent;
        &:hover {
            border: 1px solid #7c5dfa;
        }

        span {
            color: #888eb0;
        }

        .id {
            font-weight: 600;
        }

        .date,
        .name {
            font-size: 13px;
        }

        .name {
            overflow: hidden;
            white-space:nowrap;
            text-overflow: ellipsis;
            width: 130px;
        }

        .invoice {
            font-size: 18px;
            width: 75px;
            overflow: hidden;
            white-space:nowrap;
            text-overflow: ellipsis;
            font-weight: 600;
        }

        .state {
            display: flex;
            align-items: center;
            width: 95px;
            justify-content: center;
            border-radius: 6px;
            padding: 8px;
            font-weight: 600;

            &.Paid {
                background-color: #1bff0024;

                div {
                    background-color: #00ff37;
                }

                p {
                    color: #00ff37;
                }
            }

            &.Pending {
                background-color: #ff8f0024;

                div {
                    background-color: #ff8f00;
                }

                p {
                    color: #ff8f00;
                }
            }
            
            div {
                width: 6px;
                height: 6px;
                border-radius: 50%;
                margin-right: 6px;
            }
        }
    }
`;
