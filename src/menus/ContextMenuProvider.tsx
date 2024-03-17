import * as React from 'react';
import classnames from 'classnames';

import styles from './ContextMenu.module.css';
import { useCallback, useEffect, useMemo, useState } from 'react';

type ContextMenuItemProps = {
  /** A unique identifier for this menu item. */
  key: string;

  /** A human-friendly label for this menu item. */
  label: string;

  /** An icon to be shown on the left of the menu item's label. */
  icon?: React.ReactNode;

  /** The callback function to be invoked when the menu item is clicked. */
  onClick: () => void;

  /** Whether the user can click on this menu item. */
  disabled?: boolean;

  /** A tooltip to be shown for this menu item. */
  tooltip?: string;

  /** Whether this menu item is currently visible. */
  hidden?: boolean;
};

const ContextMenuItem: React.FC<
  ContextMenuItemProps & { hasIcons: boolean }
> = (props) => {
  if (props.hidden) {
    return null;
  }

  return (
    <div
      aria-label={props.tooltip ? props.tooltip : undefined}
      data-balloon-pos="right"
      className={classnames({
        [styles.menu_item]: true,
        [styles.menu_item_disabled]: props.disabled,
      })}
      onClick={() => {
        !props.disabled && props.onClick();
      }}
    >
      {props.hasIcons && <div className={styles.icon}>{props.icon}</div>}
      <span>{props.label}</span>
    </div>
  );
};

/**
 * Use a ContextMenuProvider to define a menu that will be shown when the user right-clicks on some content.
 */
const ContextMenuProvider: React.FC<{
  /** The items that will be listed in this context menu. */
  items: Array<ContextMenuItemProps>;

  /** A callback function to be invoked when the user right-clicks and opens the menu. */
  onMenuOpened?: (isOpened: boolean) => void;

  /** The content that will show the context menu when the user right-clicks on it. */
  children: React.ReactNode;
}> = (props) => {
  const { items } = props;
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const visibleItems = useMemo(
    () => items.filter((item) => !item.hidden),
    [items]
  );

  const hasAnyIcons = useMemo(
    () => visibleItems.some((item) => item.icon != null),
    [visibleItems]
  );

  useEffect(() => {
    props.onMenuOpened && props.onMenuOpened(showMenu);
  }, [showMenu, props]);

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

  const onRightClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (visibleItems.length === 0) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();
      setMenuPosition({
        x: e.pageX,
        y: e.pageY,
      });
      setShowMenu(true);
    },
    [visibleItems]
  );

  return (
    <div
      className={classnames({
        [styles.container]: visibleItems.length > 0,
        [styles.menu_visible]: showMenu,
      })}
    >
      {showMenu && (
        <div
          className={styles.menu}
          style={{
            top: menuPosition.y,
            left: menuPosition.x,
          }}
        >
          <div
            onClick={() => {
              setShowMenu(false);
            }}
          >
            {visibleItems.map((item) => (
              <ContextMenuItem {...item} hasIcons={hasAnyIcons} />
            ))}
          </div>
        </div>
      )}
      <div className={styles.content} onContextMenu={onRightClick}>
        {props.children}
      </div>
    </div>
  );
};

export default ContextMenuProvider;
