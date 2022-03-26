
import { ReactNode } from 'react';
type Props = {
    children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {

    return (
        <>
            <div>
                <main>
                    {children}
                </main>
            </div>
        </>
    );
};

export default Layout;