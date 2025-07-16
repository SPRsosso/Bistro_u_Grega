import { MenuItem } from "./menu_item";

export const items: MenuItem[] = [
    {
        "type": "Kebab",
        "name": "Tortilla",
        "size": {
            "small": {
                "price": 13.99,
                "weight": 317
            },
            "large": {
                "price": 18.99,
                "weight": 478
            }
        },
        "additionalInfo": "Do wyboru - Mięso: wołowe, drobiowe, mieszane. Sos: łagodny, ostry, mieszany, czosnkowy, koperkowy",
        "ingredients": [
            "Tortilla pszenna", "Mięso wołowe/drobiowe", "Kapusta pekińska", "Kapusta czerwona", "Pomidor", "Ogórek", "Śmietana/Jogurt (sos)"
        ],
        "allergens": [
            "Gluten", "Laktoza"
        ],
        img: "./imgs/kebab_tortilla.png"
    },
    {
        "type": "Kebab",
        "name": "W bułce",
        "size": {
            "small": {
                "price": 16.49,
                "weight": 392
            },
            "large": {
                "price": 22.99,
                "weight": 514
            }
        },
        "additionalInfo": "Do wyboru - Mięso: wołowe, drobiowe, mieszane. Sos: łagodny, ostry, mieszany, czosnkowy, koperkowy",
        "ingredients": [
            "Bułka pszenna", "Mięso wołowe/drobiowe", "Kapusta pekińska", "Kapusta czerwona", "Pomidor", "Ogórek", "Śmietana/Jogurt (sos)"
        ],
        "allergens": [
            "Gluten", "Laktoza"
        ],
        img: "./imgs/kebab_bulka.png"
    }
]