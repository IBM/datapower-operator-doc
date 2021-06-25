import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'IBM Documentation',
    href: 'https://www.ibm.com/docs/en/datapower-gateways',
  },
  {
    title: 'Github',
    href: 'https://github.com/IBM/datapower-operator-doc',
  },
  {
    title: 'Dockerhub',
    href: 'https://hub.docker.com/r/ibmcom/datapower-operator',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
