import React, { useState } from 'react';
import { Tab, TabsContainer } from './Tabs.styles';

const Tabs = () => {
  const [tabs, setTabs] = useState([
    { id: 1, name: 'home', link: '/', color: '#FE87A4' }, 
    { id: 2, name: 'sobre mim', link: '/sobre', color: '#1CBFC1' }, 
    { id: 3, name: 'projetos', link: '/projetos', color: '#94EE9C' },
  ]);

  const handleCloseTab = (id: number) => {
    setTabs(tabs.filter(tab => tab.id !== id));
  };
  return (
    <TabsContainer>
      {tabs.map(tab => (
        <Tab key={tab.id} color={tab.color}> 
          <a href={tab.link} style={{ textDecoration: 'none', color: 'inherit' }}>
            {tab.name}
          </a>
          <span className="close-tab" onClick={() => handleCloseTab(tab.id)}>
            ✕
          </span>
        </Tab>
      ))}
    </TabsContainer>
  );
};

export default Tabs;
