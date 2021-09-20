import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';
import { Link } from 'gatsby'

import Carbon from '../../images/carbon.jpg';

const FirstLeftText = () => <p>Version 1.4.2</p>;

const FirstRightText = () => (
  <p>
    Check out the latest release notes here.

    <div className={calloutLink}>
      <Link
        to="release-notes/cd#1.4.2"
      >
        Release notes →
      </Link>
    </div>
  </p>
);

const SecondLeftText = () => <p>Further reading</p>;

const SecondRightText = () => (
  <p>
    If you are looking for the product documentation for IBM DataPower Gateways, check out IBM Documentation.
    <a
      className={calloutLink}
      href="https://www.ibm.com/docs/en/datapower-gateways"
    >
      IBM Documentation →
    </a>
  </p>
);

const BannerText = () => <h1>IBM DataPower Operator</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
