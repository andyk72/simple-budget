import React from 'react';
import './TabContentTemplate.css';

const TabContentTemplate: React.FC = (props: any) => {
  return (
    <div className="sb-content-container">
      { props.children }
    </div>
  );
};

export default TabContentTemplate;
