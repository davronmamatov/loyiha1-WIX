import logo from './logo.svg';
import monitor from './monitor.png';
import phone from './phone.png';
import odam from './Photos/odam.webp';
import velik from './Photos/velik.webp';
import kasita from './Photos/kasita.webp';
import number from './Photos/number.webp';
import soat from './Photos/soat.webp';
import choynak from './Photos/choynak.webp';
import mashina from './Photos/mashina.webp';
import mushik from './Photos/mushik.webp';
import tarvuz from './Photos/tarvuz.webp';
import facebook from './Photos/facebook.png';
import flickr from './Photos/a1.png';
import twitter from './Photos/a3.png';
import pinterest from './Photos/a2.png';
import './App.css';

function App() {
  return (
    <div className="pra">
      <header>
        <div>
          <a href="https://ru.wix.com/" className='a1'>WIX</a>
          <span className='spn'>
              <button type='button'><img src={monitor} alt="" /></button>
              <hr />
              <button type='button'><img src={phone} alt="" /></button>
          </span>
        </div>
        <div>
          <p>Нажмите Редактировать, чтобы создать ваш сайт!</p>
          <a href="#" className='a2'>Подробнее</a>
          <a href='#' className='a3'>Редактировать</a>
        </div>
      </header>
      <main>
      <section>
        <div className='container'>
        <h1>Олиг Марков</h1>
        <div>
          <button type='button'>Главная</button>
          <button type='button'>Обо мне</button>
          <button type='button'>Связаться</button>
        </div>
        </div>
        <div className='container1'>
          <img src={odam} className="img1" alt="" />
          <img src={velik} className="imgvelik" alt="" />
          <img src={kasita} className="img1" alt="" />
          <img src={number} className="img1" alt="" />
          <img src={soat} className="img1" alt="" />
          <img src={choynak} className="img1" alt="" />
          <img src={mashina} className="img1" alt="" />
          <img src={mushik} className="img1" alt="" />
          <img src={tarvuz} className="img1" alt="" />
        </div>
      </section>
      <footer>
        <div className="footer-1">
          <p>© 2023 Олег Марков. Сайт создан на</p>
          <a href="https://ru.wix.com/">Wix.com</a>
        </div>
        <div className="footer-2">
          <a href="#"><img className="img-1" src={facebook} alt="" /></a>
          <a href="#"><img className="img-2" src={flickr} alt="" /></a>
          <a href="#"><img className="img-3" src={twitter} alt="" /></a>
          <a href="#"><img className="img-4" src={pinterest} alt="" /></a>
        </div>
      </footer>
      </main>
    </div>
  );
}

export default App;
