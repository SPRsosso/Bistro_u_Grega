import { items } from "./items_list.js";

const filteredItemsList = [ ...items ];

function showItems() {
    const itemsListEl = document.querySelector<HTMLDivElement>(".items-list")!;
    itemsListEl.innerHTML = "";
    filteredItemsList.forEach(item => {
        const card = `
        <div class="card">
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
            <div class="price">
                <table>
                    <tr><th></th><th>Mały</th><th>Duży</th></tr>
                    <tr><th>Cena</th><td>${item.size.small.price}zł</td><td>${item.size.large ? item.size.large.price + "zł" : ""}</td></tr>
                    <tr><th>Waga</th><td>${item.size.small.weight}g</td><td>${item.size.large ? item.size.large.weight + "g" : ""}</td></tr>
                </table>
                <button class="btn">Do koszyka</button>
            </div>
        </div>`;

        itemsListEl.innerHTML += card;
    });
}
showItems();