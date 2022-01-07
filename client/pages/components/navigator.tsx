import Link from "next/link";
import styles from '../../styles/Home.module.css'

interface NavigatorProps {
    name: string
    setName: (n: string) => void
}

const Navigator: React.FC<NavigatorProps> = (props) => {
    const logout = async () => {
        await fetch('', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        })

        props.setName('');
    }

    return (
        <nav className={styles.navbar}>
            <div>
                {
                    props.name ?
                        <ul className={styles.navbar__nav}>
                            <Link href='/login'>
                                <a onClick={logout}>
                                    Log out
                                </a>
                            </Link>
                        </ul>
                        :
                        <ul className={styles.navbar__nav}>
                            <li>
                                <Link href='/login'>Sign in</Link>
                            </li>
                            <li>
                                <Link href='/register'>Sign up</Link>
                            </li>
                        </ul>
                }
            </div>
        </nav>
    )
}

export default Navigator;