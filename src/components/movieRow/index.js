import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { useState } from "react";

import "./styles.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ title, items }) => {
    const [scrollX, setScrollX] = useState(-400);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);

        if (x > 0) {
            x = 0;
        }

        setScrollX(x);
    };

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listLength = items.results.length * 150;

        if (window.innerWidth - listLength > x) {
            x = window.innerWidth - listLength - 60;
        }

        setScrollX(x);
    };

    return (
        <div className="movieRow">
            <h2>{title}</h2>

            <div href="/" className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </div>
            <div href="/" className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </div>

            <div className="movieRow--listarea">
                <div
                    className="movieRow--list"
                    style={{
                        marginLeft: scrollX,
                        width: items.results.length * 150,
                    }}
                >
                    {items.results.length > 0 &&
                        items.results.map((item, key) => (
                            <div key={key} className="movieRow--item">
                                <img
                                    src={`https://image.tmdb.org/t/p/w300${item.poster_path} `}
                                    alt={item.original_title}
                                />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};
