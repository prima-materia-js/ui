import * as React from 'react';
import { Props as SidebarProps } from '../containers/Sidebar';
import Page from './Page';

import styles from './PageWithLeftSidebar.module.css';

type Props = {
  children: React.ReactNode;
  sidebar: React.ReactElement<SidebarProps>;
  title?: string;
};

const PageWithLeftSidebar: React.FC<Props> = (props) => {
  return (
    <Page title={props.title}>
      <div className={styles.container}>
        <div className={styles.sidebar}>{props.sidebar}</div>
        <div className={styles.content}>{props.children}</div>
      </div>
    </Page>
  );
};

export default PageWithLeftSidebar;
