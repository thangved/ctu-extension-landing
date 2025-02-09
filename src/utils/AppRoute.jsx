import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { Route } from 'react-router-dom';

const propTypes = {
  component: PropTypes.func,
  layout: PropTypes.func,
  children: PropTypes.node,
};

/**
 * AppRoute component
 * @param {object} props - Component, layout, children
 * @param {import("react").FC} props.component - Component
 * @param {import("react").FC} props.layout - Layout
 * @returns {import("react").ReactElement} - AppRoute component
 */
const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
  Layout = Layout === undefined ? (properties) => properties.children : Layout;

  const renderer = useCallback(
    (properties) => (
      <Layout>
        <Component {...properties} />
      </Layout>
    ),
    [Layout, Component],
  );

  return <Route {...rest} render={renderer} />;
};

AppRoute.propTypes = propTypes;

export default AppRoute;
