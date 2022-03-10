import React, { useState } from 'react';
import { Tabs, Tab, TabTitleText, TabContent, TabContentBody } from '@patternfly/react-core';
// import { Practice } from './Practice';
import { UserDataForm } from './UserDataForm';
import Search from './Search';
import PaginationTable from './PaginationTable';

const TabContentWithBody = () => {
  const [activeTabKey, setActiveTabKey] = useState(0);

  // Toggle currently active tab
  const handleTabClick = (event, tabIndex) => {
    setActiveTabKey(tabIndex);
  };

  const contentRef1 = React.createRef();
  const contentRef2 = React.createRef();
  const contentRef3 = React.createRef();

  return (
    <React.Fragment>
      <Tabs activeKey={activeTabKey} onSelect={handleTabClick}>
        {/* <Tab
          eventKey={0}
          title={<TabTitleText>Tab item 1</TabTitleText>}
          tabContentId="refTab1Section"
          tabContentRef={contentRef1}
        />
        <Tab
          eventKey={1}
          title={<TabTitleText>Tab item 2</TabTitleText>}
          tabContentId="refTab2Section"
          tabContentRef={contentRef2}
        />
        <Tab
          eventKey={2}
          title={<TabTitleText>Tab item 3</TabTitleText>}
          tabContentId="refTab3Section"
          tabContentRef={contentRef3}
        /> */}
        <Tab eventKey={0} title={<TabTitleText>Users</TabTitleText>}>
          Users
          <UserDataForm usersArray={[]} />
        </Tab>
        <Tab eventKey={1} title={<TabTitleText>Form</TabTitleText>}>
          Form Data
          <Search />
          <PaginationTable />
        </Tab>
      </Tabs>
      {/* <div>
        <TabContent
          eventKey={0}
          id="refTab1Section"
          ref={contentRef1}
          aria-label="Tab item 1"
        >
          <TabContentBody hasPadding> Tab 1 section </TabContentBody>
        </TabContent>
        <TabContent
          eventKey={1}
          id="refTab2Section"
          ref={contentRef2}
          aria-label="Tab item 2"
          hidden
        >
          <TabContentBody hasPadding> Tab 2 section </TabContentBody>
        </TabContent>
        <TabContent
          eventKey={2}
          id="refTab3Section"
          ref={contentRef3}
          aria-label="Tab item 3"
          hidden
        >
          <TabContentBody hasPadding> Tab 3 section </TabContentBody>
        </TabContent>
      </div> */}
    </React.Fragment>
  );
};

export default TabContentWithBody;
