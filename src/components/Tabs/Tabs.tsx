import React, { useState } from 'react';
import { Tab, TabsContainer } from './Tabs.styles';

const Tabs = () => {
  const [tabs, setTabs] = useState([
    { id: 1, name: 'home', link: '/' },
    { id: 2, name: 'sobre mim', link: '/sobre' },
    { id: 3, name: 'projetos', link: '/projetos' },
  ]);

  const handleCloseTab = (id: number) => {
    setTabs(tabs.filter(tab => tab.id !== id));
  };

  return (
    <TabsContainer>
      {tabs.map(tab => (
        <Tab key={tab.id}>
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
