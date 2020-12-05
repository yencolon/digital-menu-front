import React from 'react';
import PropTypes, { object } from 'prop-types';
import MenuSubCategory from './MenuSubCategory';
import { useThemeState } from 'context/MenuThemeContext';
import { createUseStyles } from 'react-jss';

const MenuCategory = ({ subCategories }) => {
  const theme = useThemeState();
  const classes = createUseStyles(theme.menu)();
  if (subCategories.length === 0) return <div></div>;
  const subCategoriesSize = Math.ceil(subCategories.length / 2);
  const subCategoriesColOne = subCategories.slice(0, subCategoriesSize);
  const subCategoriesColTwo = subCategories.slice(
    subCategoriesSize,
    subCategories.length
  );
  // const colSize = subCategoriesColTwo.length === 0 ? 1 : s
  return (
    <section className="mx-2 md:grid md:grid-cols-2">
      <div className={`${classes.menuContainerStyle}`}>
        {subCategoriesColOne.map((subCategory) => {
          return (
            <div key={subCategory.id}>
              <MenuSubCategory
                title={subCategory.title}
                description={subCategory.description}
                items={subCategory.products}
                image={subCategory.image}
              />
            </div>
          );
        })}
      </div>
      <div className={`${classes.menuContainerStyle}`}>
        {subCategoriesColTwo.map((subCategory) => {
          return (
            <div key={subCategory.id}>
              <MenuSubCategory
                title={subCategory.title}
                description={subCategory.description}
                items={subCategory.products}
                image={subCategory.image}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

MenuCategory.propTypes = {
  subCategories: PropTypes.arrayOf(object),
};

export default MenuCategory;
