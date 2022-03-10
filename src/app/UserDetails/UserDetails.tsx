import * as React from 'react';
import { PageSection, Title, Tabs, Tab, TabTitleText, Checkbox, Tooltip } from '@patternfly/react-core';
import { useState } from 'react';
import { func } from 'prop-types';


const UserDetails: React.FunctionComponent = () => {
    const [activeTabKey, setActiveTabKey] = useState(0);
    const [isBox, setIsBox] = useState(false);

    function handleTabClick(event, tabIndex) {
      setActiveTabKey(tabIndex)
    }

    function toggleBox(checked) {
      setIsBox(checked)
    }
    return (
        <PageSection>
            <Title headingLevel="h1" size="lg">User details Page Title!</Title>
            <Tabs activeKey={activeTabKey} onSelect={handleTabClick} isBox={isBox}>
          <Tab eventKey={0} title={<TabTitleText>User Form</TabTitleText>}>
            Users
          </Tab>
          <Tab eventKey={1} title={<TabTitleText>Form Data</TabTitleText>}>
            Containers
          </Tab>
          </Tabs>
        </PageSection>
    )   
}
 


export { UserDetails };
