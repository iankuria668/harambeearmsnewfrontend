import {useState, useEffect } from 'react'
import Inventory from './Inventory'

function Shop({ items, addToCart, addToWishlist}){

    const [filterBy, setFilterBy] = useState("firearm")
    const [searchState, setSearchState] = useState("")

    const filteredItems = items.filter(
        (item) => item.category === filterBy
    );

    function handleFilterChange(e){
        setFilterBy(e.target.value)
      }

    function handleSearch(e) {
        setSearchState(e.target.value)
    }

    return(
        <div>
            <div className='filters'>
            <label>
            {/* <strong>Filter by Category:</strong> */}
            <select onChange={handleFilterChange} value={filterBy}>
                <option value="firearm">Firearms</option>
                <option value="accessory">Accessories</option>
                <option value="ammunition">Ammunitions</option>
            </select>
            </label>
        <br />
            <div className='searchbar'>
        
            <input className="prompt" placeholder="Search item by name..." value={searchState}  onChange={handleSearch}/>
            </div>
            </div>
        <br />
            {/* <h2 className="intro" id='inventory'>              Inventory: </h2> */}
            <Inventory filteredItems={filteredItems} searchState={searchState} addToCart={addToCart} addToWishlist={addToWishlist}/>

        </div>
    )

}

export default Shop;