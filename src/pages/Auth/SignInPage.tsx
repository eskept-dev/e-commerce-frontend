import React, { useState } from 'react';
import { Button, Card, Flex, Form, Input, Typography, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleOutlined } from '@ant-design/icons';

import { useTheme } from '../../theme/components/ThemeProvider';
import DefaultLayout from '../../layouts/DefaultLayout';
import Auth from '../../services/Auth';

const { Title, Text } = Typography;

interface SignInForm {
  email: string;
  password: string;
}

const SignInPage: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const previousPath = localStorage.getItem('previousPath') || '/';

  const onFinish = async (values: SignInForm) => {
    try {
      setLoading(true);
      const response = await Auth.login(values.email, values.password);
      if (response.access_token && response.refresh_token) {
        Auth.setTokens(response.access_token, response.refresh_token);
        navigate(previousPath);
      }
    } catch (error: any) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DefaultLayout>
      <Flex
        vertical
        justify='flex-start'
        align='center'
        style={{
          width: '100%',
          minHeight: '100%',
          backgroundColor: theme.colors?.background?.default,
          padding: '128px 0 0 0',
        }}>
        <Flex
          className='sign-in-container'
          vertical
          flex={1}
        >
          <Card style={{ width: 400, maxWidth: '100%' }}>
            <Flex vertical gap={24}>
              <Title level={2} style={{ textAlign: 'center', margin: 0 }}>
                Sign in to Eskept
              </Title>

              <Form
                name="sign-in"
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
              >
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: 'Please input your email!' },
                    { type: 'email', message: 'Please enter a valid email!' }
                  ]}
                >
                  <Input placeholder="Email" size="large" />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password placeholder="Password" size="large" />
                </Form.Item>

                <Form.Item>
                  <Button 
                    type="primary" 
                    htmlType="submit" 
                    block 
                    size="large"
                    loading={loading}
                  >
                    Sign in
                  </Button>
                </Form.Item>
              </Form>

              <Flex align="center" justify="center" gap={4}>
                <Text>Don't have an account?</Text>
                <Link to="/sign_up">Sign up</Link>
              </Flex>
            </Flex>
          </Card>

          <Card style={{ width: 400, maxWidth: '100%', marginTop: 16 }}>
            <Button
              icon={<GoogleOutlined />}
              block
              size="large"
              onClick={() => console.log('Google sign in')}
            >
              Continue with Google
            </Button>
          </Card>
        </Flex>
      </Flex>
    </DefaultLayout>
  );
};

export default SignInPage;