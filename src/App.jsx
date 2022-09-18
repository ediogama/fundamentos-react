import { Post } from "./Post";
import { Header } from "./components/Header";


import './styles.css';

export function App() {
    return (
        <div>
            <Header />
            <Post author="Edio Gama" content="a great post" />
            <Post author="Vanessa Vital" content="another post" />

        </div>
    )
}