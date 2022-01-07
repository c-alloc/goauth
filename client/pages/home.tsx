import { NextPage } from "next";

interface NavigatorProps {
    name: string
    setName: (n: string) => void
}

const Home: React.FC<NavigatorProps> = (props) => {
    return (
        <div>
            {
                props.name ? 'Welcome ' + props.name : 'You re not logged'
            }
        </div >
    );
}

export default Home;
