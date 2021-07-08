import "./styles.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ item }) => {
    return (
        <section
            className="feature"
            style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
            }}
        >
            <div className="feature--vertical">
                <div className="feature--horizontal">
                    <div className="feature--name">{item.original_name}</div>
                    <div className="feature--info">
                        <div className="feature--points">{item.vote_average} pontos</div>
                        <div className="feature--seasons">
                            {item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? "s" : ""}
                        </div>
                        <div className="feature--description">{item.overview}</div>
                        <div className="featured--buttons">{item.vote_average}</div>
                        <div className="featured--genres">
                            <strong>Gêneros:</strong>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
