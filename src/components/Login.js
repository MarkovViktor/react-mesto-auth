import React from 'react'

const Login = (props) => {
    const [formParams, setFormParams] = React.useState({
        email: '',
        password: '',
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormParams((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleLogin({ email: formParams.email, password: formParams.password })
    }

    return (
        <section className='login'>
            <p className='login__enter'>Вход</p>
            <form className='login__form' onSubmit={handleSubmit}>
                <input className='login__form_type_input' placeholder='Email' id="email" name="email" type="email" value={formParams.email} required onChange={handleChange} />
                <input className='login__form_type_input' placeholder='Пароль' name="password" type='password' value={formParams.password} required onChange={handleChange} />
                <div className="login__button">
                    <button type="submit" className="popup__btn-save login__button-enter">Войти</button>
                </div>
            </form>
        </section>
    )
}

export default Login