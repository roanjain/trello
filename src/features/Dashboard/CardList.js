import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCardToCardList, selectCardsByCardList } from "./boardSlice";

import Card from "./Card";

const CardList = ({ data }) => {
  console.log("Rendering cardLis component", data);

  const dispatch = useDispatch();
  const cards = useSelector((state) =>
    state.board.cards.filter((card) => card.cardListId == data.id)
  );
  console.log(cards);

  const [newCard, setNewCard] = useState("");

  const addNewCard = () => {
    let payload = {
      cardListId: data.id,
      content: newCard
    };
    dispatch(addCardToCardList(payload));
  };

  const setContent = (e) => {
    setNewCard(e.target.value);
  };

  return (
    <div>
      <div className="cardListHeader">{data.title}</div>
      <div className="cards">
        {cards &&
          cards.map((card) => {
            return <Card data={card} />;
          })}
      </div>
      <div className="addNewCard">
        <input type="text" value={newCard} onChange={(e) => setContent(e)} />
        <span onClick={addNewCard}> Add </span>
      </div>
    </div>
  );
};

export default CardList;
