import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/globalContext";
import Button from "../button/button";
import { plus } from "../../utils/icon";

function Form() {
    const { addIncome, getIncomes } = useGlobalContext();
    const [token, setToken] = useState(localStorage.getItem("token"));

    const [inputState, setInputState] = useState({
        title: "",
        amount: "",
        date: "",
        category: "",
        description: "",
    });

    const { title, amount, date, category, description } = inputState;

    const handlerInput = (name) => (e) => {
        const value = e.target.value;
        setInputState({ ...inputState, [name]: name === "amount" ? Number(value) : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addIncome(inputState);
    };

    return (
        <FormStyled onSubmit={handleSubmit}>
            <div className="input-control">
                <input
                    type="text"
                    value={title}
                    name={"title"}
                    placeholder="Salary Title"
                    onChange={handlerInput("title")}
                />
            </div>
            <div className="input-control">
                <input
                    value={amount}
                    type="text"
                    name={"amount"}
                    id={"amount"}
                    placeholder="Income Amount"
                    onChange={handlerInput("amount")}
                />
            </div>
            <div className="input-control">
                <DatePicker
                    id="date"
                    placeholderText="Enter a Date"
                    selected={date}
                    dateFormat="dd/mm/yyyy"
                    onChange={(date) => {
                        setInputState({ ...inputState, date: date });
                    }}
                />
            </div>
            <div className="selects input-control">
                <select
                    required
                    value={category}
                    name="category"
                    id="category"
                    onChange={handlerInput("category")}
                >
                    <option value="" disabled>
                        Select Option
                    </option>
                    <option value="salary">Salary</option>
                    <option value="investments">Investments</option>
                    <option value="stocks">Stocks</option>
                    <option value="bank">Bank</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="input-control">
                <textarea
                    name="description"
                    value={description}
                    placeholder="Add A Description"
                    id="description"
                    cols="30"
                    rows="4"
                    onChange={handlerInput("description")}
                ></textarea>
            </div>

            <div className="submit-button">
                <Button
                    name={"Add Income"}
                    icon={plus}
                    bPad={".8rem 1.6rem"}
                    bRad={"30px"}
                    bg={"var(--color-accent"}
                    color={"#fff"}
                />
            </div>
        </FormStyled>
    );
}

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .submit-button {
        button {
            &:hover {
                background: var(--color-green) !important;
            }
        }
    }
`;

export default Form;
