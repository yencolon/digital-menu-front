import React from 'react';
import PropTypes, { object } from 'prop-types';
import ItemText from './MenuItemsText';
import ItemCard from './MenuItemCard';
import { useThemeState } from 'context/MenuThemeContext';

function RenderAs({ items, renderAs = 'text' }) {
  switch (renderAs) {
    case 'text':
      return items.map((item) => {
        return (
          <ItemText
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            highlight={item.highlight}
            image={item.image}
          />
        );
      });
    case 'card':
      return items.map((item) => {
        return (
          <ItemCard
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        );
      });
    default:
      return <div>{renderAs}</div>;
  }
}

RenderAs.propTypes = {
  items: PropTypes.arrayOf(object),
  renderAs: PropTypes.oneOf(['text', 'card']),
  itemContainerStyle: PropTypes.object,
  itemHighLightStyle: PropTypes.object,
  itemTitleStyle: PropTypes.object,
  itemDescriptionStyle: PropTypes.object,
};

function MenuSubCategory({ title, description, items, image }) {
  const theme = useThemeState();
  return (
    <>
      <div className="flex items-center justify-center pb-5">
        <img src={image} className="w-3/5 md:w-5/12 rounded" />
      </div>
      <section
        className="mt-1 mb-5 mx-5 md:mx-5 md:mt-5 md:mb-10 flex flex-col content-center justify-center"
        style={theme.category.subCategoryContainerStyle}
      >
        <h1
          className="font-bold subpixel-antialiased text-4xl text-center"
          style={theme.category.subCategoryHeadingStyle}
        >
          {title}
        </h1>
        <div style={theme.category.subCategoryInnerContainer}>
          <RenderAs items={items} renderAs={theme.literals.showDishAs} />
        </div>
      </section>
    </>
  );
}

MenuSubCategory.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  items: PropTypes.arrayOf(object),
  image: PropTypes.string,
};

export default MenuSubCategory;
