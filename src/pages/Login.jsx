import React, { useState, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as userActions from '../redux/actions/userActions';

import { IonItem, IonInput, IonButton } from '@ionic/react';

import PageTemplate from '../components/templates/PageTemplate';

import './Login.css';

const mapState = state => ({user: state.user});

const mapDispatch = dispatch => ({
    login: (user) => dispatch(userActions.login(user))
});

const Login = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [formValid, setFormValid] = useState(false);

    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleInput = (evt) => {
        const id = evt.target.getAttribute('name');
        const value = evt.target.value;
        const setter = (id === 'username') ? setUsername : setPassword;
        setter(value);
        updateFormValid();
    };

    const updateFormValid = () => {
        setFormValid(formIsValid());
    };

    const formIsValid = () => {
        return usernameRef.current.value.length > 0 && passwordRef.current.value.length > 0;
    };

    const handleSubmit = (evt) => {
        props.login({username,password});
    }

    return props.user.isAuthenticated ? (
        <Redirect to='/balance' />
    ) : (
        <PageTemplate title="Login">
            <div id="sb-form-login">
                <IonItem className="sb-form-login-item">
                    <IonInput ref={ usernameRef } value={ username } id="sb-form-login-username" name="username" placeholder="Type username" onIonChange={handleInput} />
                </IonItem>
                <IonItem className="sb-form-login-item">
                    <IonInput  ref={ passwordRef } value={ password } id="sb-form-login-password" name="password" placeholder="Type password" onIonChange={handleInput} />
                </IonItem>
                <IonButton color="primary" onClick={handleSubmit} disabled={ !formValid }>Login</IonButton>
            </div>
        </PageTemplate>
    );
    
};

export default connect(mapState, mapDispatch)(Login);
