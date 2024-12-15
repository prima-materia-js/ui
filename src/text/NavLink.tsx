import * as React from 'react';
import classnames from 'classnames';
import { NavLink as RNavLink } from 'react-router-dom';
import CollapsibleContainer from '../containers/CollapsibleContainer';
import { useCallback, useState } from 'react';
import { FaCaretRight } from 'react-icons/fa';

import styles from './NavLink.module.css';

type NavLinkProps = {
  /** The icon to be shown to the left of the link's label. */
  icon?: React.ReactNode;

  /** A text label for the link. */
  label: string;

  /** The URL this link should redirect to. */
  href: string;

  /** Whether the active link indicator should be shown to the right or bottom of the label. */
  highlightDirection?: 'right' | 'bottom';

  /** Whether the navlink should be highlighted for exact matches only, and not for child pages. Defaults to false. */
  exact?: boolean;
};

/**
 * Use a NavLink to show a link to a page in the app. An indicator will be shown when the link's page is currently shown.
 * This should be used together with React-Router to handle routing.
 */
const NavLink: React.FC<NavLinkProps> = ({
  icon,
  label,
  href,
  highlightDirection = 'right',
  exact = false,
}) => {
  return (
    <RNavLink
      to={href}
      className={({ isActive }) =>
        classnames({
          [styles.link]: true,
          [styles.active]: isActive,
          [styles.highlight_right]: highlightDirection === 'right',
          [styles.highlight_bottom]: highlightDirection === 'bottom',
        })
      }
      end={exact}
    >
      {icon && <div className={styles.icon}>{icon}</div>}

      <div>{label}</div>
    </RNavLink>
  );
};

const NavLinkSection: React.FC<{
  title: string;
  children:
    | React.ReactElement<NavLinkProps>
    | Array<React.ReactElement<NavLinkProps>>;
}> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const onToggle = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded, setIsExpanded]);

  return (
    <div
      className={classnames({
        [styles.link_section]: true,
        [styles.expanded]: isExpanded,
      })}
    >
      <div className={styles.title_container} onClick={onToggle}>
        <div className={styles.title_content}>{title}</div>
        <div className={styles.chevron}>
          <FaCaretRight />
        </div>
      </div>
      <CollapsibleContainer expanded={isExpanded} className={styles.content}>
        {children}
      </CollapsibleContainer>
    </div>
  );
};

const NavHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className={classnames([styles.title_content, styles.nav_header])}>
      {title}
    </div>
  );
};

export { NavLink, NavLinkSection, NavHeader };
