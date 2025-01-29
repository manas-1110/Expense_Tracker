import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import Button from "../button/button";

function Login({ setShowRegister }) {
    const { login } = useGlobalContext();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        login(formData);
    };

    return (
        <LoginStyled>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
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
                    name={"Login"}
                    bPad={".8rem 1.6rem"}
                    bRad={"30px"}
                    bg={"var(--color-accent"}
                    color={"#fff"}
                />
                <div className="register-link">
                    <p>
                        Don't have an account?{" "}
                        <span onClick={() => setShowRegister(true)}>
                            Register here
                        </span>
                    </p>
                </div>
            </form>
        </LoginStyled>
    );
}

const LoginStyled = styled.div`
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

        .register-link {
            text-align: center;
            margin-top: 1rem;

            span {
                color: var(--color-accent);
                cursor: pointer;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`;

export default Login;
