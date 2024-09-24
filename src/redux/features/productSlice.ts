import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Define the IProduct interface
interface IProduct {
    _id: string;
    imgSrc: string;
    fileKey: string;
    name: string;
    price: number; // Assuming price is a number
    description: string;
    category: string;
}

const initialState: IProduct = {
    _id: "",
    imgSrc: "",
    fileKey: "",
    name: "",
    price: 0, // Initialized as 0 for a number type
    description: "",
    category: "",
};

export const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        setProduct: (state, action: PayloadAction<IProduct>) => {   
            return action.payload;
        },
    },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;













 





