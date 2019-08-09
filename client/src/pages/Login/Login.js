import React from 'react';
import style from './Login.module.scss';
import Login from '../../components/LoginAndSignUp/MainLogin/Login';
import {USER_KEY} from '../../constants/consts';
import {Redirect} from 'react-router';

function LoginPage() {
    const user = localStorage.getItem(USER_KEY);
    if (user) return <Redirect to="/"/>;
    return (
        <div className={style.body}>
            <Login/>
        </div>
    );
}

export default LoginPage;
