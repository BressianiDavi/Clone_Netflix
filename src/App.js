import Tmdb from "./Tmdb";
import { useEffect, useState } from "react";
import MovieRow from "./components/movieRow/index";
import FeatureMovie from "./components/featureMovie/index";
import Header from "./components/header/index";
import "./App.css";

function App() {
    const [movieList, setMovieList] = useState([]);
    const [featureData, setFeatureData] = useState(null);
    const [blackHeader, setBlackHeader] = useState(false);

    useEffect(() => {
        const loadAll = async () => {
            // pegando a lista total
            let list = await Tmdb.getHomeList();
            setMovieList(list);

            //Pegando o Featured
            let originals = list.filter((i) => i.slug === "originals");
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let chosen = originals[0].items.results[randomChosen];
            let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
            setFeatureData(chosenInfo);
        };

        loadAll();
    }, []);

    useEffect(() => {
        const scrollListiner = () => {
            if (window.scrollY > 10) {
                setBlackHeader(true);
            } else {
                setBlackHeader(false);
            }
        };
        window.addEventListener("scroll", scrollListiner);

        return () => {
            window.removeEventListener("scroll", scrollListiner);
        };
    }, []);

    if (movieList.length <= 0) {
        return (
            <div className="loading">
                <img src="https://c.tenor.com/DQyztbEmqnYAAAAC/netflix-loading.gif" alt="loading" />
            </div>
        );
    }

    return (
        <div className="page">
            <Header black={blackHeader} />

            {featureData && <FeatureMovie item={featureData} />}
            <section className="lists">
                {movieList.map((item, key) => (
                    <MovieRow key={key} title={item.title} items={item.items}></MovieRow>
                ))}
            </section>

            <footer>
                <p>Desenvolvido em aula com a B7Web</p>
                <p>Dados retiradas do Themoviedb.org</p>
                <p>Direitos de imagem para a Netflix</p>
            </footer>
        </div>
    );
}

export default App;
