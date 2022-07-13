import React from "react";
import locations from "../locations";

const random = Math.floor(Math.random() * 55)
const ageStart = 1965
const ageEnd = 2021

function houseAgeRange(ageStart, ageEnd) {
    var ans = [];
    for (let i = ageStart; i <= ageEnd; i++) {
        ans.push(i);
    }
    return ans;
}
houseAgeRange()

function generateDesc() {
    const priceRange = (random / 1.5 * 2)
    const ownerList = ''
    const ageRange = ''
    const locationList = ''
    const randomDescription = {location: '', price: priceRange,owner: '', age: ans[random]};
}

function Description() {
    return(
        <>
        <div className="Description">
            <div></div>
            <div>
            <li>House Location</li>
            <li>House Price</li>
            <li>House Owner</li>
            <li>House Age</li>
            </div>
            <div></div>
        </div>
        </>
    )
}

export default Description;