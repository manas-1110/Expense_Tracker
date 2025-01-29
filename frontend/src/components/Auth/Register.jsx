import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import Button from "../button/button";

function Register({ setShowRegister }) {
    const { register } = useGlobalContext();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        register(formData);
    };

    return (
        <RegisterStyled>
            <form onSubmit={handleSubmit}>
                <h2>Register</h2>
                <div className="input-control">
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Name"
                        required
                    />
                </div>
                <div className="input-control">
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="input-control">
                    <input
                        type="password"
                        value={formData.password}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                password: e.target.value,
                            })
                        }
                        placeholder="Password"
                        required
                    />
                </div>
                <Button
                    name={"Register"}
                    bPad={".8rem 1.6rem"}
                    bRad={"30px"}
                    bg={"var(--color-accent"}
                    color={"#fff"}
                />
                <div className="login-link">
                    <p>
                        Already have an account?{" "}
                        <span onClick={() => setShowRegister(false)}>
                            Login here
                        </span>
                    </p>
                </div>
            </form>
        </RegisterStyled>
    );
}

const RegisterStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    form {
        background: rgba(252, 246, 249, 0.78);
        border: 3px solid #ffffff;
        backdrop-filter: blur(4.5px);
        border-radius: 32px;
        padding: 2rem;
        width: 100%;
        max-width: 400px;

        h2 {
            text-align: center;
            margin-bottom: 2rem;
            color: var(--primary-color);
        }

        .input-control {
            margin-bottom: 1rem;

            input {
                width: 100%;
                padding: 0.5rem;
                border: 2px solid #fff;
                border-radius: 5px;
                font-size: 1.1rem;

                &:focus {
                    outline: none;
                    border-color: var(--color-accent);
                }
            }
        }
        .login-link {
            text-align: center;
            margin-top: 1rem;

            span {
                color: var(--color-accent);
                cursor: pointer;
            }
        }
    }
`;

export default Register;
