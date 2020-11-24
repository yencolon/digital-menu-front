import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyleToClass = (style) => {
  const useStyles = createUseStyles(style);
  const classes = useStyles();
  return classes;
};

useStyleToClass.propTypes = {
  style: PropTypes.array,
};

export default useStyleToClass;
