import * as React from 'react';
import { FaDotCircle } from 'react-icons/fa';
import Heading from '../text/Heading';

import styles from './Timeline.module.css';

type TimelineEntryProps = {
  /** The icon to be shown for this entry on the timeline. */
  icon?: React.ReactNode;

  children: React.ReactNode;

  /** The colour of the icon on the timeline. */
  markerColour?: string;
};

/**
 * A single entry representing an event or other chronological content.
 */
const TimelineEntry: React.FC<TimelineEntryProps> = ({
  children,
  icon = <FaDotCircle />,
  markerColour,
}) => {
  return (
    <div className={styles.entry}>
      <div className={styles.marker} style={{ color: markerColour }}>
        {icon}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

/**
 * Use Timelines to show a series of chronological content.
 */
const Timeline: React.FC<{
  /** The title of this Timeline, shown at the top of the Timeline. */
  title: string;

  children:
    | React.ReactElement<TimelineEntryProps>
    | Array<React.ReactElement<TimelineEntryProps>>;
}> = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <Heading type="section-title">{title}</Heading>
      <div className={styles.timeline}>{children}</div>
    </div>
  );
};

export { Timeline, TimelineEntry };
