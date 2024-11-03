import LeftRight from '../layout/LeftRight';
import styles from './LabelledList.module.css';

type LabelledListSectionProps = {
  /** A unique ID for this section. */
  id: string;

  /** The title of this section. */
  title: string;

  /** A subtitle for this section, such as more information about what this section contains. */
  subtitle?: string;

  children: React.ReactNode;
};

const LabelledListSection: React.FC<LabelledListSectionProps> = ({
  id,
  title,
  subtitle,
  children,
}) => {
  return (
    <div key={id} className={styles.section}>
      <LeftRight>
        <div>
          <div className={styles.title}>{title}</div>
          <div className={styles.subtitle}>{subtitle}</div>
        </div>
        <div>{children}</div>
      </LeftRight>
    </div>
  );
};

type LabelledListProps = {
  children: Array<React.ReactElement<LabelledListSectionProps>>;
};

const LabelledList: React.FC<LabelledListProps> = ({ children }) => {
  return <>{children}</>;
};

export { LabelledList, LabelledListSection };
