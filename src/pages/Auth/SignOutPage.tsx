import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AuthService } from '../../services';
import { setAuthenticated } from '../../store/slices/authSlice';

const SignOutPage: React.FC = () => {
    const navigate = useNavigate();
    const previousPath = localStorage.getItem('previousPath') || '/';
    const dispatch = useDispatch();

    useEffect(() => {
        AuthService.logout();
        dispatch(setAuthenticated(false));
        navigate(previousPath);
    }, []);

    return null;
};

export default SignOutPage;