import React, { Component } from 'react';

import MenuButtons from './MenuButtonsComponent';
import MenuContainer from './MenuContainerComponent';
import MenuBottomBrand from './MenuBottomBrandComponent';

const categories = [
    {
        "id": 1,
        "menuId": 1,
        "name": "Aperitivos",
        "items": [
            {
                "id": 1,
                "categoryId": 1,
                "name": "Sopa de cebolla a la francesa",
                "description": "Crutón tostado, quesos gruyer y provolone",
                "price": 10,
                "image": "https://placeralplato.com/files/2015/10/Sopa-de-cebolla.jpg"
            },
            {
                "id": 2,
                "categoryId": 1,
                "name": "Surtido de carnes y selección de quesos artesanales",
                "description": "Paté de hígado de pollo, jamón serrano en fetas, chorizo, queso cheddar Pleasant Ridge, queso Truffle Tremor y queso Stilton Blue con guarniciones de temporada",
                "price": 10,
                "image": "https://i.blogs.es/17e31c/tabla-quesos10/450_1000.jpg"
            },
            {
                "id": 3,
                "categoryId": 1,
                "name": "Hierbas mixtas (opción vegana)",
                "description": "Crocante de avellanas y frutas de temporada con vinagreta de frutas con carozo",
                "price": 10,
                "image": "https://st2.depositphotos.com/9489778/12463/i/950/depositphotos_124639592-stock-photo-spicy-and-sour-mixed-herb.jpg"
            },
            {
                "id": 4,
                "categoryId": 1,
                "name": "Sopa crema de langosta de Maine",
                "description": "Adornado con crème fraîche y langosta escalfada",
                "price": 10,
                "image": "https://i.pinimg.com/originals/e6/ba/9e/e6ba9eeea6db3627961148ab1a1ea5b6.jpg"
            }
        ]
    },
    {
        "id": 2,
        "menuId": 1,
        "name": "Platos principales",
        "items": [
            {
                "id": 5,
                "categoryId": 2,
                "name": "Lomo de cerdo salteado con hierbas",
                "description": "Panceta de cerdo crujiente, vegetales de temporada preparados de dos maneras, caldo de cerdo y pecanas confitadas",
                "price": 10,
                "image": "https://i.pinimg.com/originals/35/8a/1d/358a1def4746b363c957d19fb45f263b.jpg"
            },
            {
                "id": 6,
                "categoryId": 2,
                "name": "Filete miñón (corte central)",
                "description": "Papas Yukon de Robuchon, vegetales de temporada y mermelada de cebollas cipollini con glaseado de vino tinto",
                "price": 10,
                "image": "https://cdn.kiwilimon.com/recetaimagen/146/th5-640x640-14779.jpg"
            },
            {
                "id": 7,
                "categoryId": 2,
                "name": "Pollo Poulet Rouge",
                "description": "Budín de pan salado y vegetales de temporada con glaseado de pollo",
                "price": 10,
                "image": ""
            },
            {
                "id": 8,
                "categoryId": 2,
                "name": "Maíz asado y tortellini de espinaca (opción vegana)",
                "description": "Maíz asado y condimento de pimientos Peppadew, coliflor arcoíris y espárragos, nage de maíz",
                "price": 10,
                "image": "https://img-global.cpcdn.com/recipes/4ac083691a5693a4/751x532cq70/tortelloni-con-salsa-blanca-de-queso-setas-nueces-y-espinacas-foto-principal.jpg"
            },
            {
                "id": 9,
                "categoryId": 2,
                "name": "Vieiras salteadas",
                "description": "Risotto de temporada con hongos silvestres y salsa de mantequilla",
                "price": 10,
                "image": "https://www.leplana.fr/medias/album/poelee-de-saint-jacques.jpg"
            }
        ]
    },
    {
        "id": 3,
        "menuId": 2,
        "name": "Trio de postres",
        "items": [
            {
                "id": 10,
                "categoryId": 3,
                "name": "Macarrones con mermelada de limón amarillo",
                "description": "",
                "price": 10,
                "image": "https://dam.cocinafacil.com.mx/wp-content/uploads/2018/09/mermelada-de-limon-amarillo-con-naranja.jpg"
            },
            {
                "id": 11,
                "categoryId": 3,
                "name": "Trufa de chocolate amargo",
                "description": "rellena con ganache de Grand Marnier y chocolate amargo",
                "price": 10,
                "image": "https://i.ytimg.com/vi/F6nzCBgOqIM/maxresdefault.jpg"
            },
            {
                "id": 12,
                "categoryId": 3,
                "name": "Taza de “Chip” de chocolate blanco",
                "description": "con “Materia Gris” y perlas crujientes",
                "price": 10,
                "image": "https://i.ytimg.com/vi/F6nzCBgOqIM/maxresdefault.jpg"
            },
            {
                "id": 13,
                "categoryId": 3,
                "name": "Pastel de vainilla con crema de limón amarillo (opción vegana)",
                "description": "con merengue de fresas y bayas frescas",
                "price": 10,
                "image": "https://www.dominicancooking.com/wp-content/uploads/2015/02/how-to-make-lemon-cake-recipe-DSC_1175.jpg"
            }
        ]
    },
    {
        "id": 4,
        "menuId": 3,
        "name": "Bebidas exclusivas sin alcohol",
        "items": [
            {
                "id": 14,
                "categoryId": 4,
                "name": "Ponche de frutas naturales",
                "description": "Endulzado con jugo de caña de azúcar orgánica y extracto de bayas silvestres, servido en un vaso encantado incandescente de recuerdo",
                "price": 10,
                "image": "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2019/10/receta-de-ponche-de-frutas-con-vino.jpg"
            },
            {
                "id": 15,
                "categoryId": 4,
                "name": "Limonada natural",
                "description": "Endulzado con jugo de caña de azúcar orgánica y servida en un vaso encantado incandescente de recuerdo",
                "price": 10,
                "image": "https://ve.emedemujer.com/wp-content/uploads/sites/2/2017/11/iStock-limonada.jpg"
            }
        ]
    },
    {
        "id": 5,
        "menuId": 3,
        "name": "Champán y vinos de etiqueta privada",
        "items": [
            {
                "id": 16,
                "categoryId": 5,
                "name": "Enchantée Champagne Brut (Encantado) Nicolas Feuillatte Champagne Brut, Chouilly",
                "description": "Este fino champagne francés es una mezcla de Chardonnay, Pinot Noir y Pinot Meunier. Ligeramente floral, con notas elegantes de manzana madura y albaricoque glaseado, con capas de almendra, masa y miel. Delicado en el paladar con una mousse intensa y una textura cremosa",
                "price": 10,
                "image": "https://cdn11.bigcommerce.com/s-9hu30/images/stencil/2048x2048/products/1185/2944/nicolas_feuillatte_reserve_exclusive_brut_enchanted_sleeve__31173.1588110275.jpg?c=2"
            },
            {
                "id": 17,
                "categoryId": 5,
                "name": "L’ombre de la Bête Chardonnay (La sombra de la bestia) Georges Duboeuf, Emile Beranger, Pouilly-Fuissé Borgoña",
                "description": "Pouilly-Fuissé es uno de los vinos más prestigiosos de la región de Mâcon en Borgoña. Este vino es 100% Chardonnay y ha sido parcialmente añejado en roble francés, lo que le da un aroma ligero a almendra y canela. Los delicados sabores a limón verde y manzana verde persisten en el paladar",
                "price": 10,
                "image": "https://www.cdiscount.com/pdt2/l/1/8/1/550x550/platanebl18/rw/a-l-ombre-des-platanes-2018-luberon-vin-blanc-de.jpg"
            },
            {
                "id": 18,
                "categoryId": 5,
                "name": "Enchantée Rosé (Encantado) Gérard Bertrand Syrah/Grenache Rosé, Languedoc",
                "description": "Este vino rosado encantado de la región de Languedoc, en el sur de Francia, es una mezcla de Syrah y Grenache. Este vino se percibe con un suculento sabor frutado al paladar, notas de cereza madura, puré de fresa y un final nítido.",
                "price": 10,
                "image": "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/48936_XXX_v1.tif&qlt=50&wid=650&cvt=jpeg"
            },
            {
                "id": 19,
                "categoryId": 5,
                "name": "L’ombre de la Bête Vin Rouge (La sombra de la bestia) Jean-Luc Colombo, Les Bartavelles, Châteauneuf-du-Pape, Valle del Ródano",
                "description": "Châteauneuf-du-Pape es uno de los apelativos más célebres de la región sur del valle del Ródano. Este vino es una mezcla de Syrah, Grenache y Mourvedre. Un vino fuerte y con cuerpo, además de ser rico en notas de arándano azul, hierbas silvestres y especias. Se perciben notas maduras de taninos aterciopelados, de larga persistencia",
                "price": 10,
                "image": "https://www.cdiscount.com/pdt2/l/1/8/1/700x700/platanebl18/rw/a-l-ombre-des-platanes-2018-luberon-vin-blanc-de.jpg"
            }
        ]
    },
    {
        "id": 6,
        "menuId": 3,
        "name": "Champanes y vinos",
        "items": [
            {
                "id": 21,
                "categoryId": 6,
                "name": "Charles de Fère Cuvée Jean Louis Blanc de Blancs Brut, Francia",
                "description": "",
                "price": 10,
                "image": "https://cdn.shopify.com/s/files/1/0173/0930/products/4f15dddf6536d4ae991773eb83726410998c66e4.jpeg?v=1568680994"
            },
            {
                "id": 22,
                "categoryId": 6,
                "name": "Veuve Clicquot Ponsardin Brut Yellow Label, Reims",
                "description": "",
                "price": 10,
                "image": "https://www.bodega-privada.com/34-large_default/veuve-clicquot-ponsardin-brut.jpg"
            },
            {
                "id": 23,
                "categoryId": 6,
                "name": "Terra d'Oro Moscato, California",
                "description": "",
                "price": 10,
                "image": "https://d2d8wwwkmhfcva.cloudfront.net/800x/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_f48d8f7d-93d9-4f52-b563-50754bdcb790.png"
            },
            {
                "id": 24,
                "categoryId": 6,
                "name": "Pinot Gris King Estate, Willamette Valley",
                "description": "",
                "price": 10,
                "image": "https://cdn2.bigcommerce.com/server5500/tpbc2s65/products/2480/images/10079/king-estate-pinot-gris__23585.1530900369.1280.1280.jpg?c=2"
            },
            {
                "id": 25,
                "categoryId": 6,
                "name": "Kurt Russell’s Gogi Wines “Goldie” Chardonnay, Santa Rita Hills",
                "description": "",
                "price": 10,
                "image": "https://www.wine-searcher.com/images/labels/00/31/10580031.jpg"
            }
        ]
    },
    {
        "id": 7,
        "menuId": 3,
        "name": "Cerveza y sidra",
        "items": [
            {
                "id": 26,
                "categoryId": 7,
                "name": "Angry Orchard Rosé Hard Cider, Cincinnati, Ohio",
                "description": "Cincinnati, Ohio Esta sidra tiene un delicado aroma floral y sabor a manzanas, complementado con suaves taninos refrescantes similares a un vino semiseco",
                "price": 10,
                "image": "https://dydza6t6xitx6.cloudfront.net/ci-angry-orchard-rose-53151c0e6c1d7798.jpeg"
            },
            {
                "id": 27,
                "categoryId": 7,
                "name": "Kronenbourg 1664, Francia",
                "description": "Una cerveza lager que cuenta con una historia noble y que se caracteriza por su delicado sabor, color dorado y suave amargor característico del Strisselspalt, una variedad de lúpulo de Alsacia, Francia",
                "price": 10,
                "image": "https://products2.imgix.drizly.com/ci-kronenbourg-1664-d61e93e44e612ee2.png?auto=format%2Ccompress&fm=jpg&q=20"
            },
            {
                "id": 28,
                "categoryId": 7,
                "name": "Saison Dupont, Bélgica",
                "description": "Refrescante cerveza artesanal de sabor suave con tonos de cáscara de naranja, clavo de olor, pimienta inglesa y cítricos, con lúpulo fresco.",
                "price": 10,
                "image": "https://cdn.webshopapp.com/shops/19852/files/303759315/brasserie-dupont-saison-dupont.jpg"
            },
            {
                "id": 29,
                "categoryId": 7,
                "name": "Chimay Blue, Bélgica",
                "description": "Esta cerveza negra, de fuerte sabor y origen belga es elaborada por monjes trapenses. Con aroma a especias y frutas secas y un leve matiz acaramelado. De cuerpo suave, tiene un exquisito y notable sabor a lúpulo. Su fresca levadura brinda un toque floral de rosas.",
                "price": 10,
                "image": "https://kava247.com/wp-content/uploads/2020/04/chimay_blue-1200x1200-1.jpg"
            },
            {
                "id": 30,
                "categoryId": 7,
                "name": "Stella Artois, Bélgica",
                "description": "Cerveza belga lager rubia bien equilibrada con un aroma de lúpulo floral y un toque final suave y seco",
                "price": 10,
                "image": "https://clubcatadores.co/wp-content/uploads/2016/04/Stella-1.jpg"
            },
            {
                "id": 31,
                "categoryId": 7,
                "name": "Hoegaarden Wit, Bélgica",
                "description": "Con aroma de cáscara de naranja, cilantro y especias, es suave y ligera, con un sutil sabor cítrico especiado",
                "price": 10,
                "image": "https://www.guiadelacerveza.com/wp-content/uploads/2017/09/Hoegaarden-Wit.jpg"
            },
            {
                "id": 32,
                "categoryId": 7,
                "name": "Cigar City Jai Alai IPA, Tampa, Florida",
                "description": "Un audaz sabor a cáscara de naranja y lúpulos, con un toque de caramelo y un rico sabor a malta",
                "price": 10,
                "image": "https://images.freshop.com/2510991/6813cb51411d70694a4372ea6854459e_large.png"
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
                "name": "Aperitivos"
            },
            {
                "id": 2,
                "menuId": 1,
                "name": "Platos principales"
            }
        ]
    },
    {
        "id": 2,
        "name": "Postres",
        "description": "Postres",
        "categories": [
            {
                "id": 3,
                "menuId": 2,
                "name": "Trio de postres"
            }
        ]
    },
    {
        "id": 3,
        "name": "Bebidas",
        "description": "Bebidas",
        "categories": [
            {
                "id": 4,
                "menuId": 3,
                "name": "Bebidas exclusivas sin alcohol"
            },
            {
                "id": 5,
                "menuId": 3,
                "name": "Champán y vinos de etiqueta privada"
            },
            {
                "id": 6,
                "menuId": 3,
                "name": "Champanes y vinos"
            },
            {
                "id": 7,
                "menuId": 3,
                "name": "Cerveza y sidra"
            }
        ]
    }
]

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuSelectedId: 1,
            categoriesToShow: categories.filter(category => category.menuId === 1)
        }

        this.onMenuSelectedId = this.onMenuSelected.bind(this);
    }

    onMenuSelected = (menuId) => {
        this.setState({ menuSelectedId: menuId, categoriesToShow: categories.filter(category => category.menuId === menuId) })
    }


    render() {
        const { menuSelectedId, categoriesToShow } = this.state;
        return (
            <div className='flex flex-col'>
                <MenuButtons
                    buttons={menus}
                    selected={menuSelectedId}
                    onButtonClicked={(menuId) => { this.onMenuSelected(menuId) }}
                    renderAs={this.props.showCategoriesAs} 
                    backgroundColor = {this.props.categoryButtonBackground}
                    textColor = {this.props.categoryButtonTextColor}
                    buttonStyle = {this.props.categoryButtonStyle}
                />

                <MenuContainer
                    categories={categoriesToShow}
                    menuSelected={menuSelectedId}
                    renderAs={this.props.showDishAs}
                    containerStyle={this.props.categoryContainerStyle}
                    cardStyle={this.props.categoryCardStyle}
                    headingStyle={{}}
                />
                <MenuBottomBrand image={this.props.image} title={this.props.title}/>
            </div>
        );
    }
}

export default Menu;