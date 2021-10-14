import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 20px;
    cursor: pointer;

    @media (max-width: 780px) {
        .container {
            min-height: 130px;
            display: flex;
            flex-direction: column;

            .code-name {
                display: flex;
                justify-content: space-between;
                width: 100%;

                .name {
                    margin-right: 0px;
                }
            }

            .informations {
                width: 100%;

                .div {
                    display: flex;
                    flex-wrap: wrap;
                    width: 100px;
                    .date {
                        color: #888eb0;
                    }

                    p {
                        height: 25px;
                    }
                }
            }
            .icon {
                display: none;
            }
        }
    }

    .container {
        display: flex;
        justify-content: space-between;
        list-style: none;
        background-color: ${(props) => props.theme.secondary};
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

        .code-name {
            display: flex;
            justify-content: space-between;
            align-items: center;
            p:nth-child(1) {
                margin-right: 60px;
            }
        }

        .informations {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 60px;

            div {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 220px;
            }
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
            white-space: nowrap;
            text-overflow: ellipsis;
            max-width: 130px;
        }

        .invoice {
            font-size: 18px;
            width: 75px;
            overflow: hidden;
            white-space: nowrap;
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

                .dot {
                    background-color: #00ff37;
                }

                .stateName {
                    color: #00ff37;
                }
            }

            &.Pending {
                background-color: #ff8f0024;
                .dot {
                    background-color: #ff8f00;
                }

                .stateName {
                    color: #ff8f00;
                }
            }

            .dot {
                width: 6px;
                height: 6px;
                border-radius: 50%;
                margin-top: 3px;
                margin-right: 6px;
            }
        }
    }
`;
