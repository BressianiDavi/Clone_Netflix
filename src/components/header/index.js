import "./styles.css";

function Header({ black }) {
    return (
        <header className={black ? "black" : ""}>
            <div className="header--logo">
                <a href="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                        alt="logo_netflix"
                    />
                </a>
            </div>
            <div>
                <a href="/">Início</a>
            </div>
            <div>
                <a href="/">Séries</a>
            </div>
            <div>
                <a href="/">Filmes</a>
            </div>
            <div>
                <a href="/">Bombando</a>
            </div>
            <div>
                <a href="/">Minha Lista</a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuário" />
                </a>
            </div>
        </header>
    );
}

export default Header;
