import './App.css';
import Headliner from './components/headliner/Headliner';
import img1 from './assets/img/img1.jpg'
import img2 from './assets/img/img2.jpg'
import img3 from './assets/img/img3.jpg'
import img4 from './assets/img/img4.jpg'
import img5 from './assets/img/img5.jpg'
import img6 from './assets/img/img6.jpg'
import Channels from './components/channels/Channels';
import foxNews from './assets/img/foxNews.jpg'
import cw6News from './assets/img/cw6News.jpg'
import abcNews from './assets/img/abcNews.jpg'
import alJazeera from './assets/img/alJazeera.jpg'
import bbcNews from './assets/img/bbcNews.jpg'
import cnnNews from './assets/img/cnnNews.jpg'


function App() {
  return (
    <div className="App">
      <header className="header">header</header>
      <aside className="sidebar">aside</aside>
      <main className='main'>
        <section className="channels">
          <h2 className="block-title">Explore Channels</h2>
          <div className="channels-block">
          <Channels thumbnail={foxNews}/>
          <Channels thumbnail={cw6News}/>
          <Channels thumbnail={abcNews}/>
          <Channels thumbnail={alJazeera}/>
          <Channels thumbnail={bbcNews}/>
          <Channels thumbnail={cnnNews}/>
          </div>
        </section>
        <section className="headliners">
          <h2 className="block-title">Today’s Headlines</h2>
          <div className="block-content">
          <Headliner title="Hate speech vs free speech" thumbnail={img1} text="10.8k" label="BBC NEWS" text1="1.4k"/>
          <Headliner title="Ontario Liberal leadership" thumbnail={img2} text="10.8k" label="BBC NEWS" text1="3.4k"/>
          <Headliner title="Victim of Scarborough" thumbnail={img3} text="20.8k" label="BBC NEWS" text1="1.1k"/>
          <Headliner title="Mother who left her baby" thumbnail={img4} text="0" label="ABC NEWS" text1="20k"/>
          <Headliner title="Mother of Stefanie Rengel" thumbnail={img5} text="10.8k" label="CW6 NEWS" text1="1.4k"/>
          <Headliner title="World Cup: Popular items" thumbnail={img6} text="10.8k" label="CNN NEWS" text1="1.4k"/>
          </div>
        </section>
      </main>



   
    </div>
  );
}

export default App;
