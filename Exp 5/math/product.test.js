import {screen,render} from "@testing-library/react";
import Product from "./fetchproduct";
import * as api from  "./productAPI"

jest.mock("./productAPI");

test ("render product", async ()=>{

    api.fetchProduct.mockResolvedValue ({
        id:1,
        name : "Phone",
        price : 2000
    });

    render (<Product />);

    const productName = await screen.findByText("Phone");
    expect(productName).toBeInTheDocument();
})

