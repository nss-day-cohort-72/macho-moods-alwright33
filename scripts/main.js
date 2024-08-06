import { moods } from "./moods.js"

const moodsHTML = moods() 

const renderMoodsToDOM = (moodsHTML) => {
    const moodsList = document.getElementById("moodsList")
    if (moodsList) {
        moodsList.innerHTML = moodsHTML;
    } else {
        console.error('Could not find element with id "moodsList"')
    }
};
renderMoodsToDOM(moodsHTML);