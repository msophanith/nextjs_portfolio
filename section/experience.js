import Constants from '../constant';
import { Button, Tooltip } from 'antd';
import React from 'react';

const Experience = () => {
  const exp = Constants?.experience;

  return (
    <div style={{ padding: '10px 0', fontSize: 16, fontWeight: 500 }}>
      <ul>
        <li style={{ lineHeight: 1.7 }}>
          <Tooltip placement="topLeft" title={exp.sabay} arrowPointAtCenter>
            Frontend Developer with React at{' '}
            <Button href={Constants.work_links.sabay_url} target="/">
              {exp.sabay_name}
            </Button>
          </Tooltip>
          <span> From {exp.sabay_year}</span>
        </li>
        <li style={{ lineHeight: 1.7, padding: '10px 0' }}>
          <Tooltip placement="topLeft" title={exp.yes_web} arrowPointAtCenter>
            CMS Developer with WordPress and wooCommerce at{' '}
            <Button href={Constants.work_links.yes_uel} target="/">
              {exp.yes}
            </Button>
          </Tooltip>{' '}
          <span> From {exp.yes_year}</span>
        </li>
        <li style={{ lineHeight: 1.7 }}>
          <Tooltip placement="topLeft" title={exp.pim_click} arrowPointAtCenter>
            Frontend Developer Intern at{' '}
            <Button href={Constants.work_links.pimclicK_url} target="/">
              {exp.pimClick}
            </Button>
          </Tooltip>{' '}
          <span> From {exp.pim_year}</span>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
