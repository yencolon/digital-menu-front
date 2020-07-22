import React, { Component } from 'react';

import Section from 'react-bulma-components/lib/components/section';

import MenuButtons from './MenuButtonsComponent';
import MenuContainer from './MenuContainerComponent';
import MenuBottomBrand from './MenuBottomBrandComponent';

const categories = [
    {
        "id": 1,
        "menuId": 1,
        "name": "Ensaladas",
        "items": [
            {
                "id": 1,
                "categoryId": 1,
                "name": "Ensalada cesar",
                "description": "Ensalada con lechuga romana, pollo y pan",
                "price": 10,
                "image": ""
            }
        ]
    },
    {
        "id": 2,
        "menuId": 1,
        "name": "Plato principal",
        "items": [
            {
                "id": 2,
                "categoryId": 2,
                "name": "Rizzotto de gambas salteadas en ajonjoli",
                "description": "Ensalada con lechuga romana, pollo y pan",
                "price": 10,
                "image": ""
            },
            {
                "id": 3,
                "categoryId": 2,
                "name": "Pato a la naranja",
                "description": "Ensalada con lechuga romana, pollo y pan",
                "price": 10,
                "image": ""
            }
        ]
    },
    {
        "id": 3,
        "menuId": 1,
        "name": "Entradas",
        "items": []
    },
    {
        "id": 4,
        "menuId": 2,
        "name": "Vinos",
        "items": [
            {
                "id": 5,
                "categoryId": 4,
                "name": "Vino tinto",
                "description": "Ensalada con lechuga romana, pollo y pan",
                "price": 10,
                "image": ""
            }
        ]
    },
    {
        "id": 5,
        "menuId": 2,
        "name": "Jugos",
        "items": [
            {
                "id": 4,
                "categoryId": 5,
                "name": "Agua gasificada",
                "description": "Ensalada con lechuga romana, pollo y pan",
                "price": 10,
                "image": ""
            }
        ]
    },
    {
        "id": 6,
        "menuId": 3,
        "name": "Cakes",
        "items": [
            {
                "id": 7,
                "categoryId": 6,
                "name": "Tiramisú",
                "description": "Ensalada con lechuga romana, pollo y pan",
                "price": 10,
                "image": ""
            },
            {
                "id": 8,
                "categoryId": 6,
                "name": "Torta selva negra",
                "description": "Ensalada con lechuga romana, pollo y pan",
                "price": 10,
                "image": ""
            },
            {
                "id": 9,
                "categoryId": 6,
                "name": "Suflé",
                "description": "Ensalada con lechuga romana, pollo y pan",
                "price": 10,
                "image": ""
            }
        ]
    }
]

const menus = [
    {
        "id": 1,
        "name": "Comida",
        "description": "Platos principales",
        "categories": [
            {
                "id": 1,
                "menuId": 1,
                "name": "Ensaladas"
            },
            {
                "id": 2,
                "menuId": 1,
                "name": "Plato principal"
            },
            {
                "id": 3,
                "menuId": 1,
                "name": "Entradas"
            }
        ]
    },
    {
        "id": 2,
        "name": "Bebidas",
        "description": "Bebidas para acompañar",
        "categories": [
            {
                "id": 4,
                "menuId": 2,
                "name": "Vinos"
            },
            {
                "id": 5,
                "menuId": 2,
                "name": "Jugos"
            }
        ]
    },
    {
        "id": 3,
        "name": "Postres",
        "description": "Postres de la casa",
        "categories": [
            {
                "id": 6,
                "menuId": 3,
                "name": "Cakes"
            }
        ]
    },
    {
        "id": 4,
        "name": "Jugos",
        "description": "Postres de la casa",
        "categories": [
            {
                "id": 6,
                "menuId": 3,
                "name": "Cakes"
            }
        ]
    },
    {
        "id": 5,
        "name": "Para llevar",
        "description": "Postres de la casa",
        "categories": [
            {
                "id": 6,
                "menuId": 3,
                "name": "Cakes"
            }
        ]
    }
]

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuSelectedId: 1
        }

        this.menuSelectedId = this.onMenuSelected.bind(this);
    }

    onMenuSelected = (menuId) => {
        this.setState({ menuSelectedId: menuId })
    }


    render() {
        const { menuSelectedId } = this.state;
        return (
            <div>
                    <MenuButtons
                        buttons={menus}
                        selected={menuSelectedId}
                        onButtonClicked={(menuId) => { this.menuSelectedId(menuId) }}
                        renderAs='tabs' />

                    <MenuContainer
                        categories={categories}
                        menuSelected={menuSelectedId}
                        renderAs='card'
                    />

                    <MenuBottomBrand />
            </div>
        );
    }
}

export default Menu;