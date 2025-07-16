export interface SizeItem { price: number; weight: number };

export interface Size {
    small: SizeItem;
    large?: SizeItem;
}

export type Allergens = "Laktoza" | "Gluten" | "Orzechy" | "Ryby" | "Soja" | "Seler" | "Gorczyca" | "Sezam" | "Mięczaki";
export type MenuItemType = "Dania główne" | "Zestawy dziecięce" | "Desery" | "Przystawki" | "Pizza" | "Makaron" | "Zupy" | "Kebab" | "Ryby" | "Dodatki" | "Napoje bezalkoholowe" | "Napoje alkoholowe";

export interface MenuItem {
    name: string;
    size: Size;
    allergens: Allergens[];
    ingredients: string[];
    type: MenuItemType;
    additionalInfo?: string;
    img: string;
}