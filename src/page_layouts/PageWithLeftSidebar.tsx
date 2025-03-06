import * as React from 'react';
import { Props as SidebarProps } from '../containers/Sidebar';
import Page from './Page';

import styles from './PageWithLeftSidebar.module.css';
import classNames from 'classnames';

interface SidebarStateType {
  collapsed: boolean;
}

export const SidebarStateContext = React.createContext<SidebarStateType>({
  collapsed: false,
});

type Props = {
  children: React.ReactNode;
  sidebar: React.ReactElement<SidebarProps>;
  title?: string;
  isSidebarCollapsed?: boolean;
};

const PageWithLeftSidebar: React.FC<Props> = ({
  title,
  sidebar,
  children,
  isSidebarCollapsed = false,
}) => {
  return (
    <Page title={title}>
      <SidebarStateContext.Provider
        value={{
          collapsed: isSidebarCollapsed,
        }}
      >
        <div
          className={classNames({
            [styles.container]: true,
            [styles.collapsed]: isSidebarCollapsed,
          })}
        >
          <div className={styles.sidebar}>{sidebar}</div>
          <div className={styles.content}>{children}</div>
        </div>
      </SidebarStateContext.Provider>
    </Page>
  );
};

export default PageWithLeftSidebar;
