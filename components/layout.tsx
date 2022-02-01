
import { ReactNode } from 'react';
import styles from '../styles/Layout.module.scss';

type Props = {
    children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {

    return (
        <>
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </>
    );
};

export default Layout;