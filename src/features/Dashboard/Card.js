import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
    faPencilAlt,
    faTrashAlt,
} from "@fortawesome/fontawesome-free-solid";
import {
    deleteCard,
    updateCardContentById
} from "./boardSlice";

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

    const updateContent = () => {
        let payload = {
            cardId: data.id,
            content: cardContent
        };
        dispatch(updateCardContentById(payload));
        setEditableCard(false);
    };

    return (
        <div className="cardContainer">
            {editableCard && (
                <div className="editableBox">
                    <input
                        type="text"
                        value={cardContent}
                        onChange={(e) => setCardContent(e.target.value)}
                    />
                    <span onClick={updateContent}><FontAwesomeIcon icon={faCheck} /></span>
                </div>
            )}
            {!editableCard && (
                <>
                    <div className="cardContent">{cardContent}</div>
                    <div className="actionButtons">
                        <span onClick={editCardContent}><FontAwesomeIcon icon={faPencilAlt} /></span>
                        <span onClick={() => deleteCardById(data.id)}><FontAwesomeIcon color="red" icon={faTrashAlt} /></span>
                    </div>
                </>
            )}
        </div>
    );
};

export default Card;
