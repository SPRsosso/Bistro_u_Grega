import { items } from "./items_list.js";
import { filter } from "./main.js";
import { AllergensArr, MenuItemTypeArr } from "./menu_item.js";
const allIngredients = new Set();
items.forEach(item => {
    item.ingredients.forEach(ing => {
        allIngredients.add(ing);
    });
});
export let categoryFilter = new Set();
export let allergenFilter = new Set();
export let ingredientsFilter = new Set();
export let searchText = "";
const modals = document.querySelectorAll(".modal");
const closeModals = document.querySelectorAll(".close-modals");
const categoryModal = document.querySelector("#category-modal");
const ingredientsModal = document.querySelector("#ingredients-modal");
const allergyModal = document.querySelector("#allergy-modal");
const searchBar = document.querySelector("#search");
export function initializeOptions() {
    const categoryEl = document.querySelector("#category");
    const ingredientsEl = document.querySelector("#ingredients");
    const allergensEl = document.querySelector("#allergens");
    const categoryModalOptions = categoryModal.querySelector(".options");
    const allergyModalOptions = allergyModal.querySelector(".options");
    const ingredientsModalOptions = ingredientsModal.querySelector(".options");
    searchBar.addEventListener("input", () => {
        searchText = searchBar.value;
        filter();
    });
    closeModals.forEach(close => {
        close.addEventListener("click", () => {
            modals.forEach(modal => modal.style.display = "none");
        });
    });
    categoryModalOptions.innerHTML = "";
    MenuItemTypeArr.forEach(category => {
        const btn = document.createElement("div");
        btn.classList.add("option");
        btn.innerText = category;
        btn.addEventListener("click", () => {
            btn.classList.toggle("checked");
            if (btn.classList.contains("checked")) {
                categoryFilter.add(category);
                addOption(categoryEl, category);
            }
            else {
                categoryFilter.delete(category);
                removeOption(categoryEl, category);
            }
        });
        categoryModalOptions.appendChild(btn);
    });
    allergyModalOptions.innerHTML = "";
    AllergensArr.forEach(allergen => {
        const btn = document.createElement("div");
        btn.classList.add("option");
        btn.innerText = allergen;
        btn.addEventListener("click", () => {
            btn.classList.toggle("checked");
            if (btn.classList.contains("checked")) {
                allergenFilter.add(allergen);
                addOption(allergensEl, allergen);
            }
            else {
                allergenFilter.delete(allergen);
                removeOption(allergensEl, allergen);
            }
        });
        allergyModalOptions.appendChild(btn);
    });
    ingredientsModalOptions.innerHTML = "";
    allIngredients.forEach(ingredient => {
        const btn = document.createElement("div");
        btn.classList.add("option");
        btn.innerText = ingredient;
        btn.addEventListener("click", () => {
            btn.classList.toggle("checked");
            if (btn.classList.contains("checked")) {
                ingredientsFilter.add(ingredient);
                addOption(ingredientsEl, ingredient);
            }
            else {
                ingredientsFilter.delete(ingredient);
                removeOption(ingredientsEl, ingredient);
            }
        });
        ingredientsModalOptions.appendChild(btn);
    });
    categoryEl.addEventListener("click", (event) => {
        const target = event.target;
        if (target !== categoryEl) {
            const type = target.innerHTML;
            categoryFilter.delete(type);
            removeOption(categoryEl, type);
            const options = categoryModalOptions.querySelectorAll(".option");
            options.forEach(option => {
                if (option.innerHTML === type)
                    option.classList.remove("checked");
            });
            return;
        }
        categoryModal.style.display = "block";
    });
    allergensEl.addEventListener("click", (event) => {
        const target = event.target;
        if (target !== allergensEl) {
            const type = target.innerHTML;
            allergenFilter.delete(type);
            removeOption(allergensEl, type);
            const options = allergyModalOptions.querySelectorAll(".option");
            options.forEach(option => {
                if (option.innerHTML === type)
                    option.classList.remove("checked");
            });
            return;
        }
        allergyModal.style.display = "block";
    });
    ingredientsEl.addEventListener("click", (event) => {
        const target = event.target;
        if (target !== ingredientsEl) {
            const type = target.innerHTML;
            ingredientsFilter.delete(type);
            removeOption(ingredientsEl, type);
            const options = ingredientsModalOptions.querySelectorAll(".option");
            options.forEach(option => {
                if (option.innerHTML === type)
                    option.classList.remove("checked");
            });
            return;
        }
        ingredientsModal.style.display = "block";
    });
}
function addOption(where, type) {
    where.innerHTML += `<div class="option checked">${type}</div>`;
    filter();
}
function removeOption(where, type) {
    const options = where.querySelectorAll(".option");
    options.forEach(option => {
        if (option.innerHTML === type) {
            option.remove();
        }
    });
    filter();
}
