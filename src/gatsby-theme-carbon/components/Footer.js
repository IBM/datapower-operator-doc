import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
  <>
    <p>
      Site updated: {buildTime}
    </p>
  </>
);

const links = {
  firstCol: [
    { href: 'https://www.ibm.com/products/datapower-gateway', linkText: 'IBM DataPower Gateway' },
  ]
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
