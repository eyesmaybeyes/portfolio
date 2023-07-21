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
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat doloremque illo perspiciatis."
              link="#"
              git="https://github.com/yourname/yourproject"
            />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Article
              title="It`s my first project"
              date="15.07.2023"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat doloremque illo perspiciatis."
              link="#"
              git="https://github.com/yourname/yourproject"
            />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Article
              title="It`s my first project"
              date="15.07.2023"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat doloremque illo perspiciatis."
              link="#"
              git="https://github.com/yourname/yourproject"
            />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Article
              title="It`s my first project"
              date="15.07.2023"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat doloremque illo perspiciatis."
              link="#"
              git="https://github.com/yourname/yourproject"
            />} />
          </Routes>
          <Routes>
            <Route path="/about" element={<Article
              title="About Me"
              date="15.07.2023"
              text="Mari | Frontend developer | I’m interested
              in collaboration with JavaScript/React"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat doloremque illo perspiciatis."
              link="https://t.me/Cutiefrutti"
              git="https://github.com/yourname/yourproject"
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
