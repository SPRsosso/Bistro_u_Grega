import { MenuItem } from "./menu_item";

export const items: MenuItem[] = [
    {
        "type": "Dania główne",
        "name": "Pierogi ruskie",
        "size": {
            "small": {
                "price": 15.99,
                "weight": 300
            },
            "large": {
                "price": 21.99,
                "weight": 500
            }
        },
        "additionalInfo": "Podawane z masłem, cebulą i skwarkami",
        "ingredients": [
            "Ciasto pszenne", "Ziemniaki", "Twaróg", "Cebula", "Skwarki"
        ],
        "allergens": [
            "Gluten", "Laktoza", "Jaja"
        ],
        "img": "./imgs/pierogi_ruskie.png"
    },
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
            "Tortilla pszenna", "Mięso wołowe", "Mięso drobiowe", "Kapusta pekińska", "Kapusta czerwona", "Pomidor", "Ogórek", "Śmietana/Jogurt"
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
            "Bułka pszenna", "Mięso wołowe", "Mięso drobiowe", "Kapusta pekińska", "Kapusta czerwona", "Pomidor", "Ogórek", "Śmietana/Jogurt"
        ],
        "allergens": [
            "Gluten", "Laktoza"
        ],
        img: "./imgs/kebab_bulka.png"
    },
    {
        "type": "Kebab",
        "name": "Box",
        "size": {
            "small": {
                "price": 15.49,
                "weight": 356
            },
            "large": {
                "price": 20.99,
                "weight": 499
            }
        },
        "additionalInfo": "Do wyboru - Mięso: wołowe, drobiowe, mieszane. Sos: łagodny, ostry, mieszany, czosnkowy, koperkowy",
        "ingredients": [
            "Frytki", "Mięso wołowe", "Mięso drobiowe", "Kapusta pekińska", "Kapusta czerwona", "Pomidor", "Ogórek", "Śmietana/Jogurt"
        ],
        "allergens": [
            "Laktoza",
        ],
        img: "./imgs/kebab_box.png"
    },
    {
        "type": "Kebab",
        "name": "Na talerzu",
        "size": {
            "small": {
                "price": 19.99,
                "weight": 472
            },
            "large": {
                "price": 24.49,
                "weight": 598
            }
        },
        "additionalInfo": "Do wyboru - Mięso: wołowe, drobiowe, mieszane. Sos: łagodny, ostry, mieszany, czosnkowy, koperkowy",
        "ingredients": [
            "Frytki", "Mięso wołowe", "Mięso drobiowe", "Kapusta pekińska", "Kapusta czerwona", "Pomidor", "Ogórek", "Śmietana/Jogurt"
        ],
        "allergens": [
            "Laktoza",
        ],
        img: "./imgs/kebab_talerz.png"
    },
]