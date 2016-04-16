import devboard from 'devboard';
import React from 'react';
import Tabs, { TabPane } from 'components/Tabs';

const definecard = devboard.ns('Tabs');

definecard(
  'Tabs',
  `
  `,
  <div className="container">
    <div className="row">
      <div className="col-xs-8 col-xl-4">
        <Tabs activeTabKey="0">
          <TabPane tabKey="0" text="Tab 1">Tab 1 Content</TabPane>
          <TabPane tabKey="1" text="Tab 2">Tab 2 Content</TabPane>
        </Tabs>
      </div>
    </div>
  </div>
);

definecard(
  'Tabs bar',
  `
  `,
  <div className="container">
    <div className="row">
      <div className="col-xs-8 col-xl-4">
        <Tabs activeTabKey="0" className="tab-bar">
          <TabPane tabKey="0" text="Tab 1">Tab 1 Content</TabPane>
          <TabPane tabKey="1" text="Tab 2">Tab 2 Content</TabPane>
        </Tabs>
      </div>
    </div>
  </div>
);
