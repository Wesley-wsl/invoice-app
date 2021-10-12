import styled from "styled-components";

export const Container = styled.main`
    max-width: 800px;
    margin: 0 auto;
`;

export const Back = styled.div`
    display: flex;
    align-items: center;
    margin-top: 50px;
    cursor: pointer;
    margin-bottom: 30px;

    b {
        margin-left: 10px;
    }
`;

export const InvoiceController = styled.section`
    background-color: #1e2139;
    padding: 25px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;

    div {
        display: flex;
        align-items: center;

        p {
            font-size: 14px;
            color: #e8ebfd;
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
        transition: all .2s linear;
    }


    #edit{
        background-color: #252945;
        color: #fff;

        &:hover {
            background-color: #393c50;
        }
    }

    #delete {
        background-color: #ec5757;
        color: #fff;
        
        
        &:hover {
            background-color: #d89a9a;
        }
    }

`;

export const InvoiceInformatios = styled.section`
background-color: #1e2139;
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
background-color: #252945;
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