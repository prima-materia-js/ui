import * as React from 'react';
import { PropsWithChildren, useCallback, useState } from 'react';
import classnames from 'classnames';
import { FaCaretRight } from 'react-icons/fa';
import CollapsibleContainer from './CollapsibleContainer';

import styles from './Card.module.css';

/**
 * CollapsibleCards show a title when collapsed, and can be expanded to show more content.
 */
const CollapsibleCard: React.FC<
  PropsWithChildren<{
    /** The title to be shown on the card. Will be visible when the card is collapsed. */
    title: string;
  }>
> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onClickTitle = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [setIsExpanded, isExpanded]);

  return (
    <div
      className={classnames({
        [styles.card]: true,
        [styles.collapsible_card]: true,
        [styles.expanded]: isExpanded,
      })}
      style={{}}
    >
      <h2 className={styles.title} onClick={onClickTitle}>
        <div>{title}</div>
        <div className={styles.icon_container}>
          <FaCaretRight className={styles.icon} />
        </div>
      </h2>
      <CollapsibleContainer expanded={isExpanded}>
        <div className={styles.content}>{children}</div>
      </CollapsibleContainer>
    </div>
  );
};

export default CollapsibleCard;
