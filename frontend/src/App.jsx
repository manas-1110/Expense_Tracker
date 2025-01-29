import styled from "styled-components";
import "./App.css";
import bg from "./img/bg.png";
import { MainLayout } from "./styles/layouts";
import Orb from "./components/orb/orb";
import Navigation from "./components/Navigation/navigation";
import React, { useMemo, useState } from "react";
import Dashboard from "./components/Dashboard/dashboard";
import Incomes from "./components/Incomes/Incomes";
import Expenses from "./components/Expenses/Expenses";
import { useGlobalContext } from "./context/globalContext";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

function App() {
    const { isAuthenticated } = useGlobalContext();
    const [showRegister, setShowRegister] = useState(false);
    const [active, setActive] = useState(1);

    const global = useGlobalContext();

    const displayData = () => {
        switch (active) {
            case 1:
                return <Dashboard />;
            case 2:
                return <Dashboard />;
            case 3:
                return <Incomes />;
            case 4:
                return <Expenses />;
            default:
                return <Dashboard />;
        }
    };

    const orbMemo = useMemo(() => {
        return <Orb />;
    }, []);

    return (
        <AppStyled bg={bg} className="App">
            {orbMemo}
            {isAuthenticated ? (
                <MainLayout>
                    <Navigation active={active} setActive={setActive} />
                    <main>{displayData()}</main>
                </MainLayout>
            ) : showRegister ? (
                <Register setShowRegister={setShowRegister} />
            ) : (
                <Login setShowRegister={setShowRegister} />
            )}
        </AppStyled>
    );
}

const AppStyled = styled.div`
    height: 100vh;
    background-image: url(${(props) => props.bg});
    position: relative;
    main {
        flex: 1;
        background-color: rgba(252, 246, 249, 0.78);
        border: 3px solid #ffffff;
        backdrop-filter: blur(4.5px);
        border-radius: 32px;
        overflow: auto;
        overflow-x: hidden;
        &::-webkit-scrollbar {
            width: 0;
        }
    }
`;

export default App;
