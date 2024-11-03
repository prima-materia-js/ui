import classNames from 'classnames';

import styles from './GuidedFlow.module.css';
import CollapsibleContainer from './CollapsibleContainer';

type GuidedFlowStepProps = {
  /**
   * A title for this step.
   */
  title: React.ReactNode;

  /**
   * A secondary title for this step with more details on what should be done.
   */
  subtitle?: React.ReactNode;

  children: React.ReactNode;
};

/**
 * Represents a single step in a guided flow.
 */
const GuidedFlowStep: React.FC<GuidedFlowStepProps> = ({ children }) => {
  return <div>{children}</div>;
};

type GuidedFlowProps = {
  /**
   * The index of the latest step reached in the flow.
   */
  activeStep: number;

  children: Array<React.ReactElement<GuidedFlowStepProps>>;
};

/**
 * Represents a step-by-step flow, such as a form that users will fill in one section at a time.
 */
const GuidedFlow: React.FC<GuidedFlowProps> = ({ activeStep, children }) => {
  return (
    <div className={styles.container}>
      {children.map((step, index) => (
        <div
          className={classNames({
            [styles.step]: true,
            [styles.active_step]: activeStep >= index,
          })}
        >
          <h3 className={styles.step_title}>{step.props.title}</h3>
          {step.props.subtitle && (
            <h4 className={styles.step_subtitle}>{step.props.subtitle}</h4>
          )}

          <CollapsibleContainer expanded={activeStep >= index}>
            {step.props.children}
          </CollapsibleContainer>
        </div>
      ))}
    </div>
  );
};

export { GuidedFlow, GuidedFlowStep };
