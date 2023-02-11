import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { it } from "node:test";

export interface BasketState {
  items: Product[];
}

const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state: BasketState, action: PayloadAction<Product>) => {
      const itemIndex = state.items.findIndex(
        (item) => item._id == action.payload._id
      );
      if (itemIndex === -1) {
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        state.items[itemIndex].quantity += 1;
      }
    },
    decreaseItemsCount: (
      state: BasketState,
      action: PayloadAction<Product>
    ) => {
      const indexOfItem = state.items.findIndex(
        (item: Product) => item._id == action.payload._id
      );

      if (state.items.length > 0) {
        if (state.items[indexOfItem].quantity > 0) {
          state.items[indexOfItem].quantity -= 1;
          if (state.items[indexOfItem].quantity == 0) {
            state.items.splice(indexOfItem, 1);
          }
        }
      } else {
        alert("Add at least one product");
      }
    },

    removeFromBasket: (state: BasketState, action: PayloadAction<Product>) => {
      const indexOfItem = state.items.findIndex(
        (item) => item._id == action.payload._id
      );
      state.items.splice(indexOfItem, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, decreaseItemsCount, removeFromBasket } =
  basketSlice.actions;
export const selectBasketItems = (state: RootState) => state.basket.items;
export const selectBasketTotal = (state: RootState) => {
  state.basket.items.reduce(
    (total: number, item: Product) => (total += item.price),
    0
  );
};
export const selectBasketItemsWithId = (state: RootState, id: string) => {
  state.basket.items.filter((item: Product) => item._id === id);
};
export default basketSlice.reducer;
