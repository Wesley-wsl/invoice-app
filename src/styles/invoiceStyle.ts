import styled from "styled-components";

export const Container = styled.main`
    max-width: 800px;
    margin: 0 auto;
    padding: 0 15px;
`;

export const Back = styled.div`
    display: flex;
    align-items: center;
    margin-top: 50px;
    cursor: pointer;
    margin-bottom: 30px;
    width: 85px;

    b {
        margin-left: 10px;
    }
`;

export const InvoiceController = styled.section`
    background-color: ${(props) => props.theme.secondary};
    padding: 25px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
    font-weight: 600;

    @media (max-width: 590px) {
        align-items: center;
        div {
            align-items: center;
            flex-direction: column;
            gap: 10px;
        }

        div:nth-child(1) {
            .status {
                margin-left: 0px;
                width: 80px;
            }
        }
    }

    div {
        display: flex;
        align-items: center;

        p {
            font-size: 14px;
        }

        .status {
            margin-left: 20px;
            padding: 10px;
            border-radius: 5px;

            div {
                width: 6px;
                height: 6px;
                border-radius: 50%;
                margin-right: 6px;
            }

            &.Paid {
                background-color: #1bff0024;

                .dot {
                    background-color: #00ff37;
                }

                p {
                    color: #00ff37;
                }
            }

            &.Pending {
                background-color: #ff8f0024;

                .dot {
                    background-color: #ff8f00;
                }

                p {
                    color: #ff8f00;
                }
            }
        }
    }

    button {
        margin-right: 20px;
        padding: 15px;
        border-radius: 20px;
        width: 80px;
        border: none;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s linear;
    }

    #edit {
        background-color: ${(props) => props.theme.buttonEdit};
        color: #fff;

        &:hover {
            background-color: #393c50;
        }
    }

    #delete {
        background-color: ${(props) => props.theme.buttonDelete};
        color: #fff;

        &:hover {
            background-color: #d89a9a;
        }
    }

    #paid {
        width: 120px;
        background-color: ${(props) => props.theme.buttonPaid};
        color: #fff;

        &:hover {
            background-color: #00ff37bf;
        }
    }
`;

export const InvoiceInformatios = styled.section`
    background-color: ${(props) => props.theme.secondary};
    border-radius: 10px;
    padding: 20px;

    margin-bottom: 40px;
`;

export const InformationsBillFrom = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
    p > span {
        color: #888eb0;
    }

    p {
        font-size: 13px;
        margin: 4px;
    }
`;

export const InformationsBillTo = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 50px;

    @media (max-width: 665px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 464px) {
        display: grid;
        grid-template-columns: 1fr;
    }

    div {
        display: flex;
        flex-direction: column;
    }

    p {
        font-size: 13px;
        margin: 4px 0px;
    }

    h3 {
        margin-top: 10px;
        margin-bottom: 20px;
    }
`;

export const InvoiceItem = styled.div`
    background-color: ${(props) => props.theme.primary};
    border-radius: 10px;

    .itemInformations {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        align-items: center;

        p {
            margin: 20px;
            font-size: 13px;
        }

        @media (max-width: 415px) {
            flex-wrap: wrap;
        }
    }

    .AmountDue {
        background-color: #000;
        color: #fff;
        padding: 20px;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;
