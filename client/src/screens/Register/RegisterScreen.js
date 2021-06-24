import React from 'react';
import Card from '../../components/AuthCard/Card';
import Intro from '../../components/AuthCard/Intro';

const RegisterScreen = () => {
    return (
        <div class="w-full h-full flex">
            <Intro />
            <Card type="Sign up"/>
        </div>
    );
};
export default RegisterScreen;