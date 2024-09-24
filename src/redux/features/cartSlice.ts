import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IProduct {
    id: number;
    title: string;
    img?: string;
    price: number;
    color?: string;
    quantity: number;
}

const initialState: Array<IProduct> = [];

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<IProduct>) => {
            if (state.findIndex((pro) => pro.id === action.payload.id) === -1) {
                state.push(action.payload);
            } else {
                return state.map((item) => {
                    return item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item;
                });
            }
        },
        // Missing comma added here
        removeFromCart: (state, action: PayloadAction<string>) => {
            const id = Number(action.payload);
            return state.filter((item) => item.id !== id);
        },
    },
});

export const { addProduct, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;