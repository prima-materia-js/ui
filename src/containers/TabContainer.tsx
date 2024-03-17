import * as React from 'react';
import classnames from 'classnames';

import styles from './TabContainer.module.css';
import { useMemo, useState } from 'react';

type TabProps = {
  /** A unique ID for this tab. */
  id: string;

  /** The title of this tab, to be shown on the tab selector. */
  title: string;

  children: React.ReactNode;
};

/**
 * A single tab containing related content.
 */
function Tab({ children }: TabProps): JSX.Element {
  return <div className={styles.tab_content}>{children}</div>;
}

type TabContainerProps = {
  children: Array<React.ReactElement<TabProps>>;
};

/**
 * A container to allow switching between multiple tabs.
 */
function TabContainer({ children }: TabContainerProps): JSX.Element | null {
  const [selectedTabID, setSelectedTabID] = useState(
    children.length > 0 ? children[0].props.id : ''
  );
  const currentTab = useMemo(
    () => children.find((tab) => tab.props.id === selectedTabID),
    [children, selectedTabID]
  );

  if (children.length === 0) {
    return null;
  }

  return (
    <div className={styles.tab_container}>
      <ul className={styles.tab_selector}>
        {children.map((tab) => (
          <li
            className={classnames({
              [styles.selected_tab]: tab.props.id === selectedTabID,
            })}
            key={tab.props.id}
            onClick={() => {
              setSelectedTabID(tab.props.id);
            }}
          >
            {tab.props.title}
          </li>
        ))}
      </ul>
      {currentTab && <>{currentTab.props.children}</>}
    </div>
  );
}

export { Tab, TabContainer };
