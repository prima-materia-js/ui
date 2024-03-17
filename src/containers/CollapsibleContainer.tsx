import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';

import styles from './CollapsibleContainer.module.css';

const CollapsibleContainer: React.FC<
  React.PropsWithChildren<{
    /** A CSS class name to be applied to the content. */
    className?: string;

    /** Whether the content should be expanded and visible. */
    expanded: boolean;
  }>
> = ({ className, expanded, children }) => {
  const container = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    if (!container.current) {
      return;
    }

    setMaxHeight(container.current.scrollHeight);
  }, [container, setMaxHeight]);

  useEffect(() => {
    if (!expanded) {
      return;
    }

    const heightAdjust = setInterval(() => {
      container.current && setMaxHeight(container.current.scrollHeight);
    }, 250);

    return () => {
      clearInterval(heightAdjust);
    };
  }, [expanded, container, setMaxHeight]);

  return (
    <div
      className={classnames([styles.container, className])}
      ref={container}
      style={{ height: expanded ? maxHeight : 0 }}
    >
      {children}
    </div>
  );
};

export default CollapsibleContainer;
