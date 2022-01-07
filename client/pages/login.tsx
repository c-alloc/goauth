import type { NextPage } from 'next'
import Router from 'next/router'
import { SyntheticEvent, useState } from 'react'
import styles from '../styles/Home.module.css'
import Navigator from './components/navigator'

interface NavigatorProps {
    name: string
    setName: (n: string) => void
}

const Login: NextPage<NavigatorProps> = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch('', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        })

        const content = await response.json();
        console.log(content)

        props.setName(content.name)

        Router.push('/')
    }
    return (
        <div className={styles.form_signin}>
            <form className={styles.form} onSubmit={submit}>
                <h2>Sign in</h2>
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
                <button className={styles.button} type='submit'><span>Log in</span></button>
            <Navigator name={props.name} setName={props.setName} />
            </form>
        </div>
    )
}

export default Login
