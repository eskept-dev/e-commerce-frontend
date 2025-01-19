import React, { useState } from 'react';
import { Button, Card, Flex, Form, Input, Typography, message } from 'antd';
import { Link } from 'react-router-dom';
import { useTheme } from '../../theme/components/ThemeProvider';
import DefaultLayout from '../../layouts/DefaultLayout';
import { AuthService } from '../../services';

const { Title, Text } = Typography;

interface ActivationForm {
  email: string;
}

type SendActivationLinkCardProps = {
  setIsSentEmail: React.Dispatch<React.SetStateAction<boolean>>;
}

const SendActivationLinkCard: React.FC<SendActivationLinkCardProps> = ({ setIsSentEmail }) => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: ActivationForm) => {
    try {
      setLoading(true);
      const response = await AuthService.sendActivationEmail(values.email);
      if (response.status === 200) {
        message.success('Activation link has been sent to your email');
        setIsSentEmail(true);
      }
    } catch (error: any) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card style={{ width: 400, maxWidth: '100%' }}>
      <Flex vertical gap={8}>
        <Title level={2} style={{ textAlign: 'center', margin: 0 }}>
          Get Activation Link
        </Title>

        <Text style={{ textAlign: 'center', marginBottom: 16 }}>
          Enter your email and we'll send you an activation link
        </Text>

        <Form
          name="activation"
          onFinish={onFinish}
          layout="vertical"
          requiredMark={false}
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email!' }
            ]}
          >
            <Input size="large" placeholder="Email" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              loading={loading}
            >
              Send Activation Link
            </Button>
          </Form.Item>
        </Form>

        <Flex align="center" justify="flex-start" gap={4}>
          <Text>Remember your password?</Text>
          <Link to="/auth/sign_in">Sign in</Link>
        </Flex>
      </Flex>
    </Card>
  );
}

const WaitingForActivationCard: React.FC = () => {
  return (
    <Card style={{ width: 400, maxWidth: '100%' }}>
      <Flex vertical gap={8}>
        <Title level={2} style={{ textAlign: 'center', margin: 0 }}>
          Waiting for activation
        </Title>

        <Text style={{ textAlign: 'center', marginBottom: 16 }}>
          Check your email for activation link
        </Text>

        <Flex align="center" justify="flex-start" gap={4}>
          <Text>Remember your password?</Text>
          <Link to="/auth/sign_in">Sign in</Link>
        </Flex>
      </Flex>
    </Card>
  );
}

const SignInByActivationLinkPage: React.FC= () => {
  const theme = useTheme();
  const [isSentEmail, setIsSentEmail] = useState(false);

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
          className='sign-in-by-activation-link-container'
          vertical
          flex={1}
        >
          {isSentEmail
            ? <WaitingForActivationCard />
            : <SendActivationLinkCard setIsSentEmail={setIsSentEmail} />
          }
        </Flex>
      </Flex>
    </DefaultLayout>
  );
};

export default SignInByActivationLinkPage;