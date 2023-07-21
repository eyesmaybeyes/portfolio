import { useState } from "react";
import "./Article.scss";

function Article(props) {
    const { title, date, text, desc, link, git, isAboutPage, stack } = props;

    const [isDescVisible, setIsDescVisible] = useState(false);

    const handleReadMoreClick = () => {
        setIsDescVisible(!isDescVisible);
    };

    const arr = desc.split("&");
    return (
        <li className="post-list__item">
            <article className="post-block">
                {isAboutPage && <h2 className="post-title">About Me</h2>}
                <h2 className="post-title">
                    <a className="post-link" href={link}>
                        {title}
                    </a>
                </h2>
                <div className="post-info">{date}</div>
                <div className="post-content">
                    <p className="post-text">{text}</p>
                </div>

                {!isAboutPage && (
                    <p className="read-more" onClick={handleReadMoreClick}>
                        Подробнее
                    </p>
                )}

                {isDescVisible && (
                    <div className="post-desc">
                        {arr.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                        <p>
                            <span>Tech stack: </span>
                            {stack}
                        </p>
                        <a className="post-desc__git" href={git}>
                            GitHub
                        </a>
                    </div>
                )}
                {isAboutPage && (
                    <p class="post-text">
                        <a
                            class="post-text__link"
                            href="https://t.me/Cutiefrutti"
                        >
                            Telegram
                        </a>{" "}
                        |
                        <a
                            class="post-text__link"
                            href="https://github.com/eyesmaybeyes"
                        >
                            {" "}
                            GitHub
                        </a>{" "}
                        | eyesmaybeyes@gmail.com
                    </p>
                )}
            </article>
        </li>
    );
}

export { Article };
