import React from 'react';
import {Link} from 'react-router-dom';

// import { Container } from './styles';
import logo from '../../assets/logo.svg';
import { Form, Input } from '@rocketseat/unform';

export default function SignUp() {
    function handleSubmit (data){
        console.tron.log(data);
    }
    return (
        <>
            <img src={logo} alt="GoBarber"></img>

            <Form onSubmit={handleSubmit}>
                <Input name="name" placeholder="Nome completo"/>
                <Input name="email" type="email" placeholder="Seu e-mail"/>
                <Input name="password" type="password" placeholder="Digite sua senha secreta"/>

                <button type="submit">Criar conta</button>
                <Link to="/">Já tenho login</Link>
            </Form>
        </>
    );
}
