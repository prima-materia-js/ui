import * as React from 'react';
import { useEffect } from 'react';

type Props = {
  children: React.ReactNode;
  title?: string;
};

const Page: React.FC<Props> = ({ title, children }) => {
  useEffect(() => {
    if (!title) {
      return;
    }
    const originalTitle = document.title;
    document.title = `${title} - ${originalTitle}`;

    return () => {
      if (!title) {
        return;
      }

      document.title = originalTitle;
    };
  }, [title]);

  return <>{children}</>;
};

export default Page;
