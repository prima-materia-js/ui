import * as React from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Button from '../forms/Button';

import styles from './DropDownMenu.module.css';
import classNames from 'classnames';
import { FaEllipsisH } from 'react-icons/fa';

type Props = {
  /** A label for the button that will show the drop-down menu. */
  label?: React.ReactNode;

  /** The size of this menu button. */
  size?: 'normal' | 'small';

  /** Whether the menu button has a background shading. */
  subtle?: boolean;

  /** The direction that the drop-down menu will appear in. */
  menuPosition?: 'bottom-right' | 'bottom-left';

  /** The items in this drop-down menu. */
  items: Array<{
    /** A unique identifier for this menu item. */
    key: string;

    /** A human-friendly label for this menu item. */
    label: string;

    /** An icon to be shown on the left of the menu item's label. */
    icon?: React.ReactNode;

    /** The callback function to be invoked when the menu item is clicked. */
    onClick: () => void;
  }>;
};

/**
 * Use a DropDownMenu to create a button that will show a menu when clicked.
 */
const DropDownMenu: React.FC<Props> = (props) => {
  const {
    items,
    label = <FaEllipsisH />,
    menuPosition = 'bottom-right',
  } = props;

  const [showMenu, setShowMenu] = useState(false);
  const onClickButton = useCallback<React.MouseEventHandler>(
    (e) => {
      e.stopPropagation();
      setShowMenu(!showMenu);
    },
    [setShowMenu, showMenu]
  );

  useEffect(() => {
    const onDocumentClick = () => {
      setShowMenu(false);
      document.removeEventListener('click', onDocumentClick);
      document.removeEventListener('contextmenu', onDocumentClick);
    };
    if (showMenu) {
      document.addEventListener('click', onDocumentClick);
      document.addEventListener('contextmenu', onDocumentClick);
    }
  }, [showMenu]);

  const hasAnyIcons = useMemo(
    () => items.some((item) => item.icon != null),
    [items]
  );

  return (
    <div className={styles.container}>
      <Button
        label={label}
        size={props.size}
        subtle={props.subtle}
        onClick={onClickButton}
      />
      {showMenu && (
        <ul
          className={classNames({
            [styles.menu]: true,
            [styles.left]: menuPosition === 'bottom-left',
            [styles.right]: menuPosition === 'bottom-right',
          })}
        >
          {items.map((item) => (
            <li
              key={item.key}
              onClick={() => {
                setShowMenu(false);
                item.onClick();
              }}
            >
              {hasAnyIcons && <div className={styles.icon}>{item.icon}</div>}
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDownMenu;
