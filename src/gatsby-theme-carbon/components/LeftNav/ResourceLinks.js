import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Knowledge Center',
    href: 'https://www.ibm.com/support/knowledgecenter/SS9H2Y',
  },
  {
    title: 'Github',
    href: 'https://github.com/IBM/datapower-operator-doc',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
