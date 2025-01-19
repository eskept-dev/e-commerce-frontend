import React from 'react';
import { Link } from 'react-router-dom';

import { Flex, Typography } from 'antd';

import logo from '../../../assets/logo.svg';

import { useTheme } from '../../../theme/components/ThemeProvider';

const { Title } = Typography;

const LogoStyle: React.CSSProperties = {
  width: '25px',
  height: '25px',
}

const LogoContainerStyle: React.CSSProperties = {
  padding: '0',
  cursor: 'pointer',
}

const Logo: React.FC = () => {
  const theme = useTheme();

  return (
    <Link to="/">
      <Flex
        className="logo"
        justify="flex-start"
        align="center"
        gap={8}
        style={LogoContainerStyle}
      >
        <img src={logo} alt="logo" style={LogoStyle} />
        <Title level={1} style={{
          color: theme.colors?.text?.primaryLight,
          fontSize: '20px',
          fontWeight: 'thin',
        }}>Eskept</Title>
      </Flex>
    </Link>
  )
};

export default Logo;