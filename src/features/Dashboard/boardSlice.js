import { createSlice } from "@reduxjs/toolkit";

export const boardSlice = createSlice({
  name: "board",
  initialState: {
    cardList: [
      {
        title: "default",
        id: "1"
      }
    ],
    cards: [
      {
        title: "default",
        id: "",
        cardListId: 1
      }
    ]
  },
  reducers: {
    addNewCardList(state, action) {
      //state.card
    },
    setCardListTitle() {},
    deleteCardList() {},
    addCardToCardList(state, action) {
      console.log("addCardToCardList==>", action.payload);
      let { cardListId, content } = action.payload;
      state.cards.push({
        title: content,
        cardListId: cardListId
      });
    },
    setCardContent() {},
    deleteCard(state, action) {}
  }
});

export const { deleteCard, addCardToCardList } = boardSlice.actions;

// selector

export const selectCardList = (state) => {
  return state.board.cardList;
};

export const selectCardsByCardList = (id) => (state) => {
  console.log("selectCardsByCardList id", id);
  const cards = state.board.cards.filter((card) => card.cardListId === id);
  console.log(cards);
};

export default boardSlice.reducer;
