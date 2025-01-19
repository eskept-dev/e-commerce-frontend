import React from 'react';
import { Link } from 'react-router-dom';

import { Flex, Typography } from 'antd';

import logo from '../../../assets/logo.svg';

const { Title } = Typography;

const LogoStyle: React.CSSProperties = {
  width: '25px',
  height: '25px',
}

const LogoNameStyle: React.CSSProperties = {
  color: '#fff',
  fontSize: '20px',
  fontWeight: 'thin',
}

const Logo: React.FC = () => {
  return (
    <Link to="/">
      <Flex
        className="logo"
        justify="flex-start"
        align="center"
        gap={8}
        style={{ cursor: 'pointer' }}
      >
        <img src={logo} alt="logo" style={LogoStyle} />
        <Title level={1} style={LogoNameStyle}>Eskept</Title>
      </Flex>
    </Link>
  )
};

export default Logo;