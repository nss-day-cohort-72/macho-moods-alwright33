import { database } from "./database.js";

export const moods = () => {
    let moodsHTML = '';
    for (const mood of database) {
        let quotesHTML = '<ul class="mood__quotes">';
        mood.quotes.forEach(quote => {
            quotesHTML += `<li class="mood__quote">"${quote}"</li>`
        });
        quotesHTML += '</ul>';

        moodsHTML += `
        <article class="moods">
            <h3 class="moods__name">"${mood.name}"</h3>
            <img src="${mood.imageUrl}" alt="${mood.text}" class="moods__image">
            <div class="advice__container">
                <h4 class="advice">Macho Advice:</h4>
                ${quotesHTML} 
            </div>    
            </article>
            `
    }
    return moodsHTML;
}


