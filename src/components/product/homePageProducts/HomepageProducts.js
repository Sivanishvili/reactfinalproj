import React from "react";
import { useProduct } from "../../../hooks";
import { GridContainer, LoadingWrapper } from "../../atoms";
import { ProductCard } from "../ProductCard";


export const HomePageProducts = () => {
    const {HomePageProducts, isProductLoading} = useProduct();
    return (
        <LoadingWrapper isProductLoading={isProductLoading} >
            <GridContainer> 
                {HomePageProducts.map((product) => 
                    <ProductCard product={product} key={product._id} 
                    />)} 
            </GridContainer>
        </LoadingWrapper>
    );
}


