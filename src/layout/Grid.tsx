import * as React from 'react';

import styles from './Grid.module.css';

/**
 * Use a Grid to show content in a grid-based layout.
 */
const Grid: React.FC<
  React.PropsWithChildren<{
    /** The number of columns for this grid. */
    columns: number;
  }>
> = ({ children, columns }) => {
  return (
    <div
      className={styles.grid}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {children}
    </div>
  );
};

export default Grid;
