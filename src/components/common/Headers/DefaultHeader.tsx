import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Layout } from 'antd';
import { Link } from "react-router-dom";

import { useTheme } from "../../../theme/components/ThemeProvider";
import Logo from "../Logo";
import UserProfileDropdown from "./UserProfileDropdown";
import { AuthService, UserService } from "../../../services";
import { loginSuccess, setAuthenticated } from "../../../store/slices/authSlice"

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
  const dispatch = useDispatch();

  const loadUserProfile = async () => {
    if (isAuthenticated) {
      try {
        const response = await UserService.getMe();
        if (response) {
          console.log(response);
          dispatch(loginSuccess(response));
        }
      } catch (error: any) {
        console.log(error);
      }
    }
  }

  const verifyToken = async () => {
    try {
      const response = await AuthService.verifyToken();
      if (response.status === 200) {
        dispatch(setAuthenticated(true));
      } else {
        dispatch(setAuthenticated(false));
      }
    } catch (error: any) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadUserProfile();
  }, [isAuthenticated]);

  useEffect(() => {
    verifyToken();
  }, []);

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