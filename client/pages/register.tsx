import type { NextPage } from 'next'
import Router from 'next/router'
import { SyntheticEvent, useState } from 'react'
import styles from '../styles/Home.module.css'
import Navigator from './components/navigator'

interface NavigatorProps {
    name: string
    setName: (n: string) => void
}

const Register: NextPage<NavigatorProps> = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch('', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                name,
                email,
                password
            })
        })
        Router.push('/login')
    }
    return (
        <div className={styles.form_signin}>
            <form className={styles.form} onSubmit={submit}>
                <h2>Sign up</h2>
                <input className={styles.form_control}
                    type='name'
                    placeholder='Name'
                    onChange={e => setName(e.target.value)}
                />
                <input className={styles.form_control}
                    type='email'
                    placeholder='Email'
                    onChange={e => setEmail(e.target.value)}
                />
                <input className={styles.form_control}
                    type='password'
                    placeholder='Password'
                    onChange={e => setPassword(e.target.value)}
                />
                <button className={styles.button} type='submit'><span>Register</span></button>
            <Navigator name={props.name} setName={props.setName} />
            </form>
        </div>
    )
}

export default Register
