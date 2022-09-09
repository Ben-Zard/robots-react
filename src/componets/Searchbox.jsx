import React from "react";

const SearchBox = ({ searchtext,onSearch})=>{
return(
    <div className = "searchbox">
        <input className= "input"  
        type="search" 
        placeholder="search"
        onChange={onSearch}
        />

    </div>
)
}
export default SearchBox