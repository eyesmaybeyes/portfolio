import { useState } from "react";
import "./Article.scss";

function Article(props) {
    const { title, date, text, desc, link, git } = props;

    const [isDescVisible, setIsDescVisible] = useState(false);

    const handleReadMoreClick = () => {
        setIsDescVisible(!isDescVisible);
    };

    return (
        <li className="post-list__item">
            <article className="post-block">
                <h2 className="post-title">
                    <a className="post-link" href={link}>
                        {title}
                    </a>
                </h2>
                <div className="post-info">{date}</div>
                <div className="post-content">
                    <p className="post-text">{text}</p>
                </div>
                <p className="read-more" onClick={handleReadMoreClick}>
                    Подробнее
                </p>
                {isDescVisible && (
                    <div className="post-desc">
                        <p>{desc}</p>
                        <a className="post-desc__git" href={git}>
                            GitHub
                        </a>
                    </div>
                )}
            </article>
        </li>
    );
}

export { Article };
