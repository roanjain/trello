import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {addCardToCardList, deleteCardListById, setCardListTitleById, updateCardContentById} from "./boardSlice";

import Card from "./Card";
import {faCheck, faPencilAlt, faPlus, faTrashAlt} from "@fortawesome/fontawesome-free-solid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const CardList = ({ data }) => {
  const dispatch = useDispatch();
  const cards = useSelector((state) =>
    state.board.cards.filter((card) => card.cardListId === data.id)
  );

  const [newCard, setNewCard] = useState("");
  const [editableTitle, setEditableTitle] = useState(false);
  const [cardListTitle, setCardListTitle] = useState(data.title);

  const addNewCard = () => {
    if(newCard===""){
      return;
    }
    let payload = {
      cardListId: data.id,
      content: newCard
    };
    dispatch(addCardToCardList(payload));
    setNewCard('');
  };

  const setContent = (e) => {
    setNewCard(e.target.value);
  };

  const deleteCardList = () => {
      dispatch(deleteCardListById(data.id));
  }

  const updateCardListTitle = () => {
      let payload = {
          cardListId: data.id,
          content: cardListTitle
      };
      dispatch(setCardListTitleById(payload));
      setEditableTitle(false);
  }

  const handleKeyDown = (event) => {
      if(event.key === 'Enter'){
          addNewCard();
      }
  }

  return (
    <div className="cardList">
        {editableTitle && (
            <div className="cardListTitle">
                <div className="editableBox">
                    <input
                        type="text"
                        value={cardListTitle}
                        onChange={(e) => setCardListTitle(e.target.value)}
                    />
                    <span onClick={updateCardListTitle}><FontAwesomeIcon icon={faCheck} /></span>
                </div>
            </div>
        )}
        {!editableTitle && <div className="cardListHeader" onClick={()=>setEditableTitle(true)}>{cardListTitle}</div>}
      <div className="cards">
        {cards &&
          cards.map((card) => {
            return <Card key={card.id} data={card} />;
          })}
      </div>
      <div className="addNewCard">
        <input type="text" placeholder="Add Task" onKeyDown={handleKeyDown} value={newCard} onChange={(e) => setContent(e)} />
        <span className="addNewCardButton" onClick={addNewCard}>
          <FontAwesomeIcon icon={faPlus}/>
        </span>
      </div>
      <div className="deleteCardList">
        <button className="delete" onClick={deleteCardList}>Delete</button>
      </div>
    </div>
  );
};

export default CardList;
