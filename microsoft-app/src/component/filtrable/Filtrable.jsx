import React from "react";
import ProductTable from "../ProductTable/ProductTable";
import SearchBare from "../SearchBare/searchbare";
import "./Filtrable.css";
const Filtrable = () =>{
    return (
        <div className="filtrable">
            <SearchBare />
            <ProductTable/>
        </div>
    );
}
export default Filtrable;