import * as React from 'react';
import { useCallback, useState } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import Heading from '../text/Heading';
import { FaBars } from 'react-icons/fa';

import styles from './Sidebar.module.css';

export type Props = {
  /** The name of this app, to be shown at the top of the sidebar. */
  appName: string;

  /** An icon or logo for this app. Will be shown next to the app name. */
  icon?: React.ReactNode;

  /** Whether to show the app name at the top of the sidebar. */
  showAppName?: boolean;

  /** The URL of the main/home page for this app. Clicking on the app icon or name will redirect here. */
  homeHref: string;

  /** The version of this app. Will be shown below the app name. */
  version?: string;

  /** Any content to be shown at the bottom of the sidebar. */
  footerContent?: React.ReactNode;
};

/**
 * Sidebars are used as part of a page layout to show app details and navigation links.
 */
const Sidebar: React.FC<React.PropsWithChildren<Props>> = ({
  appName,
  icon,
  showAppName = true,
  homeHref,
  children,
  version,
  footerContent,
}) => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const onNavToggle = useCallback(() => {
    setIsNavVisible(!isNavVisible);
  }, [isNavVisible, setIsNavVisible]);

  return (
    <div className={styles.container}>
      <div className={styles.nav_toggle} onClick={onNavToggle}>
        <FaBars />
      </div>

      <div
        className={classnames({
          [styles.content]: true,
          [styles.visible]: isNavVisible,
        })}
      >
        <Link to={homeHref} className={styles.home_link}>
          <div className={styles.app_header}>
            {icon && <div className={styles.icon}>{icon}</div>}
            {showAppName && (
              <Heading type="section-title" subtitle={version}>
                {appName}
              </Heading>
            )}
          </div>
        </Link>
        {children}
        {footerContent && <div className={styles.footer}>{footerContent}</div>}
      </div>
    </div>
  );
};

export default Sidebar;
