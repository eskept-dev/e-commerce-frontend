import React from "react";

import { Layout } from 'antd';

import { DefaultHeader } from "../../components";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayoutStyle: React.CSSProperties = {
  position: 'fixed',  // Fix the layout to viewport
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  margin: 0,
  padding: 0,
  overflow: 'hidden',
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <Layout style={DefaultLayoutStyle}>
      <DefaultHeader />
      {children}
    </Layout>
  )
};

export default DefaultLayout;