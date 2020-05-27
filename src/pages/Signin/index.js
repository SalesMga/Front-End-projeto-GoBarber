import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { Form, Input } from '@rocketseat/unform';

export default function Signin() {
    function handleSubmit(data) {
        console.tron.log(data);
    }

    return (
        <>
            <img src={logo} alt="GoBarber" />
            <Form onSubmit={handleSubmit}>
                <Input name="email" type="email" placeholder="Seu e-mail" />
                <Input
                    name="password"
                    type="password"
                    placeholder="Digite sua senha secreta" />

                <button type="submit">Acessar</button>
                <Link to="/register">Criar conta gratuita</Link>
            </Form>
        </>
    );
}
