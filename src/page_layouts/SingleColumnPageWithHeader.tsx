import * as React from 'react';
import { useState } from 'react';
import classnames from 'classnames';
import { NavLink } from '../text/NavLink';
import Page from './Page';
import { FaBars } from 'react-icons/fa';

import styles from './SingleColumnPage.module.css';

type Props = {
  children: React.ReactNode;
  title?: string;
  logo?: React.ReactNode;
  navLinks?: Array<{
    title: string;
    href: string;
    highlightOnExactMatchOnly?: boolean;
  }>;
  rightContent?: React.ReactNode;
  homeLink?: {
    title: string;
    href: string;
  };
};

const SingleColumnPageWithHeader: React.FC<Props> = ({
  children,
  title,
  logo,
  navLinks,
  rightContent,
  homeLink,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Page title={title}>
      <div
        className={classnames({
          [styles.header]: true,
          [styles.expanded]: isExpanded,
        })}
      >
        <div className={styles.logo_container}>
          <div
            className={styles.menu_icon}
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            <FaBars />
          </div>
          {logo && (
            <div className={styles.logo}>
              {homeLink != null ? (
                <a
                  href={homeLink.href}
                  title={homeLink.title}
                  className={styles.home_link}
                >
                  {logo}
                </a>
              ) : (
                logo
              )}
            </div>
          )}
        </div>

        {navLinks && (
          <div className={styles.nav}>
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                label={link.title}
                href={link.href}
                highlightDirection="bottom"
                exact={link.highlightOnExactMatchOnly}
              />
            ))}
          </div>
        )}

        {rightContent && (
          <div className={styles.right_content}>{rightContent}</div>
        )}
      </div>
      <div className={styles.container}>{children}</div>
    </Page>
  );
};

export default SingleColumnPageWithHeader;
