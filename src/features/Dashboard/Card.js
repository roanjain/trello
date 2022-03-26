import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectCardList, deleteCard } from "./boardSlice";

const Card = ({ data }) => {
  const dispatch = useDispatch();

  const [editableCard, setEditableCard] = useState(false);
  const [cardContent, setCardContent] = useState(data.title);

  const deleteCardById = (cardId) => {
    dispatch(deleteCard(cardId));
  };

  const editCardContent = () => {
    setEditableCard(true);
  };

  console.log("cards==>>", data);

  return (
    <div className="cardContainer">
      <div className="cardContent">{cardContent}</div>
      <div className="actionButtons">
        {editableCard && (
          <input
            type="text"
            value={cardContent}
            onChange={(e) => setCardContent(e.value)}
          />
        )}
        {!editableCard && <button onClick={editCardContent}>edit</button>}
        <button onClick={() => deleteCardById(data.id)}>delete</button>
      </div>
    </div>
  );
};

export default Card;
