import * as React from 'react';
import Page from './Page';

import styles from './SingleColumnPage.module.css';

type Props = {
  children: React.ReactNode;
  title?: string;
};

const SingleColumnPage: React.FC<Props> = ({ children, title }) => {
  return (
    <Page title={title}>
      <div className={styles.container}>{children}</div>
    </Page>
  );
};

export default SingleColumnPage;
