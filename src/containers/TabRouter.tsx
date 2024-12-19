import * as React from 'react';
import classnames from 'classnames';

import styles from './TabContainer.module.css';
import { useEffect } from 'react';
import {
  matchPath,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom';

type NavTabProps = {
  /** Where clicking on the tab should link to */
  linkTo: string;

  /** The route handled by this tab */
  route: string;

  /** The title of this tab, to be shown on the tab selector. */
  title: string;

  children: React.ReactNode;
};

/**
 * A single tab containing related content, represented by a distinct URL.
 */
function NavTab({ children }: NavTabProps): JSX.Element {
  return <div className={styles.tab_content}>{children}</div>;
}

type TabbedRouterProps = {
  children: Array<React.ReactElement<NavTabProps>>;
};

/**
 * A container to allow switching between multiple tabs, with each tab having its own URL.
 */
function TabRouter({ children }: TabbedRouterProps): JSX.Element | null {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (
      children.length > 0 &&
      children.every((tab) => !matchPath(location.pathname, tab.props.linkTo))
    ) {
      navigate(children[0].props.linkTo);
    }
  }, [location, children, navigate]);

  if (children.length === 0) {
    return null;
  }

  return (
    <div className={styles.tab_container}>
      <ul className={styles.tab_selector}>
        {children.map((tab) => (
          <li
            className={classnames({
              [styles.selected_tab]: matchPath(
                location.pathname,
                tab.props.linkTo
              ),
            })}
            key={`tab_selector_${tab.props.linkTo}`}
            onClick={() => {
              navigate(tab.props.linkTo);
            }}
          >
            {tab.props.title}
          </li>
        ))}
      </ul>
      <Routes>
        {children.map((tab) => (
          <Route
            key={`tab_${tab.props.linkTo}`}
            path={tab.props.route}
            element={<>{tab.props.children}</>}
          />
        ))}
      </Routes>
    </div>
  );
}

export { NavTab, TabRouter };
