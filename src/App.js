import Tmdb from "./Tmdb";
import { useEffect, useState } from "react";
import MovieRow from "./components/movieRow/index";
import FeatureMovie from "./components/featureMovie/index";
import "./App.css";

function App() {
    const [movieList, setMovieList] = useState([]);
    const [featureData, setFeatureData] = useState(null);

    useEffect(() => {
        const loadAll = async () => {
            // pegando a lista total
            let list = await Tmdb.getHomeList();
            setMovieList(list);
        };

        loadAll();
    }, []);

    return (
        <div className="page">
            {featureData && <FeatureMovie item={featureData} />}

            <section className="lists">
                {movieList.map((item, key) => (
                    <MovieRow key={key} title={item.title} items={item.items}></MovieRow>
                ))}
            </section>
        </div>
    );
}

export default App;
