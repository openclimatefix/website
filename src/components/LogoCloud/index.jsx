import React from 'react';
import logocloudStyles from './logocloud.module.css';


export default function LogoCloud() {
  const logos = [{
    src: "https://raw.githubusercontent.com/openclimatefix/website/master/src/images/sponsor_esa.png",
    href: "#"
  }, {
    src: "https://raw.githubusercontent.com/openclimatefix/website/master/src/images/sponsor_raais.png",
    href: "#"
  }, {
    src: "https://camo.githubusercontent.com/1abc6e2b23f17a79a55ee991e6981e46cf338695/68747470733a2f2f63646e2e737667706f726e2e636f6d2f6c6f676f732f7a65706c696e2e737667",
    href: "#"
  }, {
    src: "https://camo.githubusercontent.com/6de73ae841384e69cf10c444cc63022655649a6c/68747470733a2f2f63646e2e737667706f726e2e636f6d2f6c6f676f732f73656d616e7469632d7765622e737667",
    href: "#"
  }, {
    src: "https://camo.githubusercontent.com/deeb3fdf4ccc12c58598858c8a9b96aed919c044/68747470733a2f2f63646e2e737667706f726e2e636f6d2f6c6f676f732f6170707369676e616c2e737667",
    href: "#"
  }, {
    src: "https://raw.githubusercontent.com/openclimatefix/website/master/src/images/sponsor_esa.png",
    href: "#"
  }, {
    src: "https://raw.githubusercontent.com/openclimatefix/website/master/src/images/sponsor_esa.png",
    href: "#"
  }, {
    src: "https://raw.githubusercontent.com/openclimatefix/website/master/src/images/sponsor_esa.png",
    href: "#"
  }, {
    src: "https://raw.githubusercontent.com/openclimatefix/website/master/src/images/sponsor_esa.png",
    href: "#"
  }, {
    src: "https://raw.githubusercontent.com/openclimatefix/website/master/src/images/sponsor_esa.png",
    href: "#"
  }];

  return (
    <div className={logocloudStyles.logogrid}>
      {logos.map(({src, href}, index) => (
        <a key={`logo-${index}`} href={href}><img src={src} /></a>
      ))}
    </div>
  );
}
