import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./dashboard.module.css";
import { selectCardList } from "./boardSlice";
import CardList from "./CardList";

const Board = () => {
  console.log("Rendering board component");
  const cardLists = useSelector(selectCardList);

  const addNewCardList = () => {};

  return (
    <>
      <div className="cardListContainer">
        {cardLists &&
          cardLists.map((cardList) => {
            return <CardList data={cardList} />;
          })}
      </div>
      <div className="addCardList">
        <span onClick={addNewCardList}>+</span>
      </div>
    </>
  );
};

export default Board;
