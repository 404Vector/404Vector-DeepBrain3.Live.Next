import React, {useState} from 'react';
import {useDispatch, connect} from 'react-redux';
import {registerRequest} from '@/modules/auth/register';
import {Register} from '@/components/auth/Register';

// container, 부모, props가 없어야 함
const RegisterPage = () => {
    const [user, setUser] = useState({
        userid: '',
        password: '',
        email: '',
        name: '',
        phone: '',
        birth: '',
        address: ''
    })
    const dispatch = useDispatch()
    const onChange = e => {
        e.preventDefault()
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    const onSubmit = e => {
        e.preventDefault()
        dispatch(registerRequest(user))
    }
    return (<Register onChange={onChange} onSubmit={onSubmit}/>); // props = onChange={onChange} onSubmit={onSubmit}
};
const mapStateToProps = state => ({isRegistered: state.register.isRegistered});
const registerActions = {
    registerRequest
}
export default connect(mapStateToProps, registerActions)(RegisterPage);