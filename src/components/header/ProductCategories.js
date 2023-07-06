import React from "react";
import { useProduct } from "../../hooks";
import { List, ListItem, styled } from "@mui/material";
import { Link, Text } from "../atoms";
import { useNavigate } from "react-router-dom";

const StyledListItems = styled(ListItem)(() => ({
  padding: "2px 5px 5px 25px",
  margin: "0px",
}));

export const ProductCategories = () => {
  const { productCategories } = useProduct();
  const navigate = useNavigate();

  const handleCategoryClick = (name) => {
    navigate(`/products/categories/${name}?page=1&sort=price%2casc,asc`);
  };

  return (
    <List sx={{ display: "flex" }}>
      {productCategories.map((category) => {
        const { _id, name } = category;
        return (
          <StyledListItems key={_id} onClick={() => handleCategoryClick(name)}>
            <Text color="#FF9900">{name}</Text>
          </StyledListItems>
        );
      })}
    </List>
  );
};
