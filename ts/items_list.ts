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
        "type": "Dania główne",
        "name": "Kotlet schabowy",
        "size": {
            "small": {
                "price": 28.99,
                "weight": 430
            },
            "large": {
                "price": 36.99,
                "weight": 610
            }
        },
        "additionalInfo": "Podawane z ziemniakami i surówką",
        "ingredients": [
            "Mięso wieprzowe", "Ziemniaki", "Kapusta pekińska", "Kapusta czerwona", "Marchew", "Sałata"
        ],
        "allergens": [
            "Gluten", "Laktoza", "Jaja" 
        ],
        "img": "./imgs/kotlet_schabowy.png"
    },
    {
        "type": "Dania główne",
        "name": "Gołąbki",
        "size": {
            "small": {
                "price": 24.99,
                "weight": 370
            },
            "large": {
                "price": 29.99,
                "weight": 490
            }
        },
        "additionalInfo": "Podawane z ziemniakami oraz sosem pomidorowym domowej roboty",
        "ingredients": [
            "Mięso wieprzowe", "Kapusta pekińska", "Ryż", "Sos pomidorowy", "Ziemniaki", "Szczypiorek"
        ],
        "allergens": [
            
        ],
        "img": "./imgs/golabki.png"
    },
    {
        "type": "Dania główne",
        "name": "Bigos myśliwski",
        "size": {
            "small": {
                "price": 17.99,
                "weight": 350
            },
            "large": {
                "price": 23.99,
                "weight": 550
            }
        },
        "additionalInfo": "Podawany w małym kociołku. <b>Uwaga! Bardzo gorące!</b>",
        "ingredients": [
            "Mięso wołowe", "Mięso wieprzowe", "Kiełbasa", "Kapusta kiszona", "Grzyby", "Cebula", "Suszone śliwki"
        ],
        "allergens": [
            
        ],
        "img": "./imgs/bigos_mysliwski.png"
    },
    {
        "type": "Dania główne",
        "name": "Gulasz",
        "size": {
            "small": {
                "price": 19.99,
                "weight": 350
            },
            "large": {
                "price": 26.99,
                "weight": 550
            }
        },
        "additionalInfo": "Podawany z ziemniakami i kapustą czerwoną",
        "ingredients": [
            "Mięso wołowe", "Papryka", "Cebula", "Marchew", "Ziemniaki", "Kapusta czerwona"
        ],
        "allergens": [
            
        ],
        "img": "./imgs/gulasz.png"
    },
    {
        "type": "Dania główne",
        "name": "Zrazy wołowe",
        "size": {
            "small": {
                "price": 29.99,
                "weight": 300
            },
            "large": {
                "price": 36.99,
                "weight": 450
            }
        },
        "additionalInfo": "Podawane z kluskami i buraczkami",
        "ingredients": [
            "Mięso wołowe", "Ogórek kiszony", "Boczek", "Cebula", "Ziemniaki", "Buraki"
        ],
        "allergens": [
            "Gluten", "Gorczyca"
        ],
        "img": "./imgs/zrazy_wolowe.png"
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