import { useSelector } from "react-redux"

export const useProduct = () => {
    const HomePageProducts = useSelector(
        (state) => state.product.HomePageProducts
    );


    const selectedProduct = useSelector((state) => state.product.selectedProduct);


    const isProductLoading = useSelector((state) => state.product.loading);


    const productCategories = useSelector((state) => state.product.categories)

    

    const singleProduct = useSelector((state) => state.product.singleProduct);

    return {
        HomePageProducts,
        selectedProduct,
        isProductLoading,
        productCategories,
        singleProduct,
    };
};