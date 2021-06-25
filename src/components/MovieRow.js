import "./MovieRow.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ title, items }) => {
    return (
        <div>
            <h2>{title}</h2>
            <div className="movieRow listarea">
                {items.results.length > 0 &&
                    items.map((item, key) => (
                        <img src={`http://image.tmdb.org/t/p/w300${item.poster_path}`} alt="lista de filmes" />
                    ))}
            </div>
        </div>
    );
};
