import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectCardList,addNewCardList } from "./boardSlice";
import CardList from "./CardList";
import {faPlus} from "@fortawesome/fontawesome-free-solid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Board = () => {
  const cardLists = useSelector(selectCardList);
  const dispatch = useDispatch();

  const addCardList = () => {
      dispatch(addNewCardList())
  };

  return (
    <>
      <div className="cardListContainer">
        {cardLists &&
          cardLists.map((cardList) => {
            return <CardList key={cardList.id} data={cardList} />;
          })}
      </div>
      <div className="addCardList">
        <span onClick={addCardList}>
            <FontAwesomeIcon icon={faPlus}/>
        </span>
      </div>
    </>
  );
};

export default Board;
