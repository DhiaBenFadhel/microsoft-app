import React from "react";
import ProductCategoryRow from "../ProductCategoryRow/ProductCategoryRow";
import ProductRow from "../ProductRow/ProductRow";
import "./ProductTable.css";
const ProductTable = () => {
    return <div className="producttable">
        <ProductCategoryRow />
        <ProductRow/>
    </div>
};
export default ProductTable;