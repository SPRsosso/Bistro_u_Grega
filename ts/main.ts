import { items } from "./items_list.js";
import { allergenFilter, categoryFilter, ingredientsFilter, initializeOptions, searchText } from "./options_setup.js";

let filteredItemsList = [ ...items ];

function showItems() {
    const itemsListEl = document.querySelector<HTMLDivElement>(".items-list")!;
    itemsListEl.innerHTML = "";
    filteredItemsList.forEach(item => {
        const card = `
        <div class="card">
            <div>
                <div class="item-img">
                    <img src="${item.img}" alt="${item.type} ${item.name}">
                </div>
                <small class="category">Kategoria >> ${item.type}</small>
                <h2>${item.name}</h2>
                <h5>Składniki</h5>
                <p>${item.ingredients.join(", ")}</p>
                <p><small class="list">Alergeny: ${item.allergens.join(", ")}</small></p>
                ${item.additionalInfo ? `
                    <div class="additional-info">
                        <h5>Dodatkowe informacje:</h5>
                        <p>${item.additionalInfo}</p>
                    </div>
                ` : ""}
                <br>
            </div>
            <div class="price">
                <table>
                    <tr><th></th><th>Mały</th><th>Duży</th></tr>
                    <tr><th>Cena</th><td>${item.size.small.price}zł</td><td>${item.size.large ? item.size.large.price + "zł" : ""}</td></tr>
                    <tr><th>Waga</th><td>${item.size.small.weight}g</td><td>${item.size.large ? item.size.large.weight + "g" : ""}</td></tr>
                </table>
            </div>
        </div>`;

        itemsListEl.innerHTML += card;
    });
}
showItems();

initializeOptions();

export function filter() {
    filteredItemsList = items.filter(item => {
        let hasAllergen = false;
        item.allergens.forEach(allergen => {
            if (hasAllergen) return;

            hasAllergen = allergenFilter.has(allergen);
        })

        let hasIngredients = false;
        item.ingredients.forEach(ingredient => {
            if (hasIngredients) return;
            
            hasIngredients = ingredientsFilter.has(ingredient);
            if (ingredientsFilter.size === 0) hasIngredients = true;
        });

        let containsSearchedText = item.name.toLowerCase().includes(searchText.toLowerCase()) 
                                || item.type.toLowerCase().includes(searchText.toLowerCase())
                                || item.additionalInfo?.toLowerCase().includes(searchText.toLowerCase());

        return (categoryFilter.size > 0 ? categoryFilter.has(item.type) : true) &&
               (!hasAllergen) && hasIngredients && containsSearchedText;
    });
    showItems();
}