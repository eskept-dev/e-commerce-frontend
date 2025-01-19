import React from "react";
import { useSelector } from "react-redux";
import { Flex, Layout } from 'antd';
import { Link } from "react-router-dom";

import { useTheme } from "../../../theme/components/ThemeProvider";
import Logo from "../Logo";
import UserProfileDropdown from "./UserProfileDropdown";

const { Header } = Layout;

const HeaderStyle: React.CSSProperties = {
  height: 64,
  padding: '0 20px',
  position: 'relative',
}

const UnauthenticatedTools: React.FC = () => {
  const theme = useTheme();
  const currentPath = window.location.pathname; 

  return (
    <Flex justify="end" align="center" gap={8}>
      <Link style={{
        textDecoration: 'none',
        color: theme.colors?.text?.primaryLight,
      }} to={`/auth/sign_in?redirect_to=${currentPath}`}>Sign in</Link>
      <Link style={{
        textDecoration: 'none',
        color: theme.colors?.text?.primaryLight,
      }} to={`/auth/sign_up?redirect_to=${currentPath}`}>Sign up</Link>
    </Flex>
  )
}

const AuthenticatedTools: React.FC = () => {
  return (
    <UserProfileDropdown />
  )
}

const DefaultHeader: React.FC = () => {
  const theme = useTheme();
  const { isAuthenticated } = useSelector((state: any) => state.auth);

  return (
    <Header style={{
      ...HeaderStyle,
      backgroundColor: theme.colors?.background?.primary,
    }}>
      <Flex 
      justify="space-between"
      align="center"
      style={{ 
        width: '100%',
        height: '100%',
      }}>
        <Logo />
        {isAuthenticated ? <AuthenticatedTools /> : <UnauthenticatedTools />}
      </Flex>
    </Header>
  )
};

export default DefaultHeader;