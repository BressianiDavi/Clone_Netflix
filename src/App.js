import Tmdb from "./Tmdb";
import { useEffect } from "react";

export default function App() {
    useEffect(() => {
        const loadAll = async () => {
            // pegando a lista total
            let list = await Tmdb.getHomeList;
            console.log(list);
        };

        loadAll();
    }, []);

    return <h1>rola</h1>;
}
