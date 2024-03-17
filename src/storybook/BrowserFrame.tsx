import { PropsWithChildren } from 'react';

const BrowserFrame: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxShadow: '1px 1px 13px 0px rgba(0,0,0,0.1)',
      }}
    >
      <div
        style={{
          background: '#b6b6b6',
          padding: '0.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          opacity: '0.5',
        }}
      >
        <div
          style={{
            padding: '0.5rem',
            background: '#eaeaea',
            borderRadius: '5px',
            paddingRight: '25rem',
          }}
        >
          🌐 https://example.com
        </div>
        <div>❌</div>
      </div>
      {children}
    </div>
  );
};

export default BrowserFrame;
