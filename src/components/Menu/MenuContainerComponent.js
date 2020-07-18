import React from 'react';

import Section from 'react-bulma-components/lib/components/section';
import Columns from 'react-bulma-components/lib/components/columns';
import MenuCategoryContainer from './MenuCategoryContainerComponent';

function MenuContainer({ categories, menuSelected, renderAs = 'text', style }) {
    return (
        <div>
            <Section>
                <Columns>
                    {
                        categories.filter(category => category.menuId === menuSelected).map(category => {
                            return (
                                <Columns.Column size={6} key={category.id}>
                                    <MenuCategoryContainer 
                                        title={category.name} 
                                        description={category.description} 
                                        items={category.items} 
                                        renderAs={renderAs} 
                                        style={style}
                                        />
                                </Columns.Column>)
                        })
                    }
                </Columns>
            </Section>
        </div>
    );
}

export default MenuContainer;

// <Tile kind="ancestor">
// <Tile size={8} vertical>
//   <Tile>
//     <Tile kind="parent" vertical>
//       <Tile renderAs="article" kind="child" notification color="primary" >
//         <Heading>Vertical...</Heading>
//         <Heading subtitle>Top tile</Heading>
//       </Tile>
//       <Tile renderAs="article" kind="child" notification color="warning">
//         <Heading>Tiles...</Heading>
//         <Heading subtitle>Bottom Tile...</Heading>
//       </Tile>
//     </Tile>
//     <Tile kind="parent">
//       <Tile renderAs="article" kind="child" notification color="info">
//         <Heading>Middle Tile...</Heading>
//         <Heading subtitle>With image Tile...</Heading>
//         <Image size="4by3" src="http://bulma.io/images/placeholders/640x480.png" />
//       </Tile>
//     </Tile>
//   </Tile>
//   <Tile kind="parent">
//     <Tile renderAs="article" kind="child" notification color="danger">
//       <Heading>Wide tile</Heading>
//       <Heading subtitle>Aligned with the right tile</Heading>
//       <div className="content" />
//     </Tile>
//   </Tile>
// </Tile>
// <Tile kind="parent">
//   <Tile renderAs="article" kind="child" notification color="success">
//     <div className="content">
//       <Heading>Tall tile</Heading>
//       <Heading subtitle>With even more content</Heading>
//       <div className="content" />
//     </div>
//   </Tile>
// </Tile>
// </Tile>