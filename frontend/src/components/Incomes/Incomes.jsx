import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import Form from "../form/form";
import { InnerLayout } from "../../styles/layouts";

function Incomes() {
    const { incomes, getIncomes } = useGlobalContext();

    useEffect(() => {
        getIncomes();
    }, []);

    return (
        <IncomesStyled>
            <InnerLayout>
                <h1>Incomes</h1>
                <div className="income-content">
                    <div className="form-container">
                        <Form />
                    </div>
                </div>
            </InnerLayout>
        </IncomesStyled>
    );
}

const IncomesStyled = styled.div``;

export default Incomes;
