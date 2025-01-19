import React from 'react';
import { useSelector } from 'react-redux';
import { Dropdown, Flex, Typography } from 'antd';
import { SquareUserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { MenuProps } from 'antd';

import { useTheme } from '../../../theme/components/ThemeProvider';

const { Text } = Typography;

const dropdownItems: MenuProps['items'] = [
  {
    key: 'profile',
    label: <Link to="/user/profile">Profile</Link>,
  },
  {
    key: 'signout',
    label: <Link to="/auth/sign_out">Sign out</Link>,
  },
];

const UserProfileDropdown: React.FC = () => {
  const theme = useTheme();
  const { user } = useSelector((state: any) => state.auth);

  return (
    <Dropdown menu={{ items: dropdownItems }} trigger={['click']}>
      <Flex align="center" gap={4} style={{ cursor: 'pointer' }}>
        {user?.email && (
          <Text style={{ color: theme.colors?.text?.primaryLight }}>
            {user?.email}
          </Text>
        )}
        <SquareUserRound size={36} strokeWidth={1} color={theme.colors?.text?.primaryLight} />
      </Flex>
    </Dropdown>
  );
};

export default UserProfileDropdown;