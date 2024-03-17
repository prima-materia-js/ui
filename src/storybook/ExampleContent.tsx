import { PropsWithChildren } from 'react';

const ExampleContent: React.FC<PropsWithChildren<{}>> = (props) => (
  <div
    style={{
      background: '#cfeafb',
      padding: '2rem',
      border: '1px solid #7dbeed',
      borderRadius: '4px',
      fontSize: '2rem',
      color: '#343434',
      margin: '1rem',
      textAlign: 'center',
    }}
  >
    {props.children}
  </div>
);

export default ExampleContent;
