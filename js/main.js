'use strict';

let doc = document,
    // init ratings
    ratings = {
        Adidas: 4.7,
        Nike: 4.9,
        Munich: 4.5,
        Mizuno: 4,
        Joma: 3.2,
        Umbro: 4.3
    },
    // total stars
    starsTotal = 5;

    // run on DOM loads
    doc.addEventListener('DOMContentLoaded', getRatings);

    // get ratings
    function getRatings() {
        for(let rating in ratings) {
            let starPercentage = (ratings[rating] / starsTotal) * 100;
            
            // round to 10
            let starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
            
            // width stars-inner percentage
            doc.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;
            
        }
    }


