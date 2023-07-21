import './App.scss';
import './components/Header/Header.scss';
import './components/Article/Article.scss';
import './components/Paginator/Paginator.scss';
import './components/Footer/Footer.scss';

import { Route, Routes } from "react-router-dom";
import { Header } from './components/Header/Header';
import { Article } from './components/Article/Article';
import { Paginator } from './components/Paginator/Paginator';
import { Footer } from './components/Footer/Footer';

function App() {
  const navItems = document.querySelectorAll('.nav-list__link');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(item => {
        item.classList.remove('active');
      });
      item.classList.add('active');
    });
  });

  return (
    <div className="wrap">
      <Header />
      <section className="container">
        <ul class="post-list">
          <Routes>
            <Route path="/" element={<Article
              title="It`s my first project"
              date="15.07.2023"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.& Qui quaerat doloremque illo perspiciatis."
              link="#"
              git="https://github.com/yourname/yourproject"
            />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Article
              title="It`s my second project"
              date="15.07.2023"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat doloremque illo perspiciatis."
              link="#"
              git="https://github.com/yourname/yourproject"
            />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Article
              title="Pomodoro Todo-List"
              date="19.07.2023"
              text="Это приложение сочетает в себе
              помодоро-таймер и управление задачами."
              desc="– Реализованы компоненты пользовательского
              интерфейса&
              – Настроено хранение и удаление данных из
              Local Storage&
              – Разработан функционал по
              добавлению/удалению задач по отдельности и
              всего списка&
              – Реализовано изменение и отображение
              статуса задачи (завершена или не завершена)"
              stack="JavaScript, HTML, CSS, Git, JSON"
              link="https://eyesmaybeyes.github.io/pomodoro-todolist/"
              git="https://github.com/eyesmaybeyes/pomodoro-todolist"
            />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Article
              title="Superhero site"
              date="08.06.2023"
              text="На сайте содержится информация о лучших
              супергероях Marvel и DC."
              desc="– Реализованы компоненты пользовательского
              интерфейса&
              – Настроено хранение данных c JSON в Local Storage&
              – Настроен React-Routing"
              stack="React, JavaScript, React-routing, HTML, SCSS, Git, JSON"
              link="https://eyesmaybeyes.github.io/superheroes-react/"
              git="https://github.com/eyesmaybeyes/superheroes-react"
            />} />
          </Routes>
          <Routes>
            <Route path="/about" element={<Article
              date="15.07.2023"
              text="Mari | Frontend developer | I’m interested
              in collaboration with JavaScript/React"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat doloremque illo perspiciatis."
              isAboutPage={true}
            />} />
          </Routes>
        </ul>
      </section>
      <Routes>
        <Route path="/" element={<Paginator />} />
        <Route path="/page-two" element={<Paginator />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
