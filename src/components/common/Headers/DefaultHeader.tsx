import React from "react";

import { Layout } from 'antd';

import { useTheme } from "../../../theme/components/ThemeProvider"

import Logo from "../Logo"

const { Header } = Layout;

const DefaultHeaderStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  padding: '0 20px',
  maxHeight: '64px',
  width: '100%',
  position: 'relative',
}

const DefaultHeader: React.FC = () => {
  const theme = useTheme();

  return (
    <Header style={{
      ...DefaultHeaderStyle,
      backgroundColor: theme.colors?.background?.primary,
    }}>
      <Logo />
    </Header>
  )
};

export default DefaultHeader;