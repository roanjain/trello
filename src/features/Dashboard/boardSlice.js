import { createSlice } from "@reduxjs/toolkit";

let cardListId = 1
let cardId = 1

export const getNextCardListId = () =>{
  return ++cardListId
}

export const getNextCardId = () => {
  return ++cardId
}

export const boardSlice = createSlice({
  name: "board",
  initialState: {
    cardList: [
      {
        title: "Default List",
        id: 1
      }
    ],
    cards: []
  },
  reducers: {
    addNewCardList(state, action) {
      state.cardList.push({
        id: getNextCardListId(),
        title: `New Card ${cardListId}`,
      })
    },
    setCardListTitleById(state, action) {
      let {cardListId, content} = action.payload
      state.cardList.map((cardList)=>{
        if(cardList.id === cardListId){
          return cardList.title = content;
        }
        return cardList;
      })
    },
    deleteCardListById(state, action) {
      let cardListId = action.payload;
      let index = state.cardList.findIndex((cardList)=>cardList.id === cardListId);
      if(index > -1){
        state.cardList.splice(index,1)
      }
    },
    addCardToCardList(state, action) {
      let { cardListId, content } = action.payload;
      state.cards.push({
        title: content,
        cardListId: cardListId,
        id: getNextCardId()
      });
    },
    updateCardContentById(state, action) {
      let {cardId, content} = action.payload
      state.cards.map((card)=>{
        if(card.id === cardId){
          return card.title = content;
        }
        return card;
      })
    },
    deleteCard(state, action) {
      let cardId = action.payload;
      if(cardId){
        let index = state.cards.findIndex(card=>card.id === cardId);
        if(index>-1){
          state.cards.splice(index,1);
        }
      }
    }
  }
});

export const { deleteCard, addCardToCardList, updateCardContentById, deleteCardListById, addNewCardList, setCardListTitleById } = boardSlice.actions;

// selector

export const selectCardList = (state) => {
  return state.board.cardList;
};

export default boardSlice.reducer;
