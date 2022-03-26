import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Board from "./features/Dashboard/Board";

function App() {
    return (
        <>
            <div className="header">Trello-Clone</div>
            <div className="mainContainer">
                <div className="cardListWrapper">
                    <Board/>
                </div>
            </div>
        </>
    );
}

export default App;
