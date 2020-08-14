import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signOut } from '../../store/modules/auth/actions';
import { updateProfileRequest } from '../../store/modules/user/action';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);

    function handleSubmit(data) {
        console.tron.log(data);
        dispatch(updateProfileRequest(data));
    }

    function handleSignOut(){
        dispatch(signOut());
    }

    return (

        <Container>
            <Form initialData={profile} onSubmit={handleSubmit} >
                <AvatarInput name="avatar_id" />

                <Input name="name" placeholder="Nome completo" />
                <Input name="email" type="email" placeholder="Se e-mail" />

                <hr />

                <Input type="password" name="oldPassword" placeholder="Sua senha atual" />
                <Input type="password" name="Password" placeholder="Nova senha" />
                <Input type="password" name="ConfirmPassword" placeholder="Confirma senha" />
                <button type="submit">Atualizar perfil</button>
            </Form>

            <button type="submit" onClick={handleSignOut}>Sair do GoBarber</button>

        </Container>
    );
}
