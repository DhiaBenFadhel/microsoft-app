import React from "react";

const SearchBare = () => {
    return <div style={{
        width: "100%",
        height: "30%",
        border: "1px solid blue"
    }}>
        <input type="text" placeholder="Seach ...."/>
        <div>
            <input id="checkbox" type="checkbox" />
            <label for="checkbox">Only show products in stock</label>
        </div>
    </div>;
};
export default SearchBare;
