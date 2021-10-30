import './App.css';
import Headliner from './components/headliner/Headliner';
import img1 from './assets/img/img1.jpg'
import img2 from './assets/img/img2.jpg'
import img3 from './assets/img/img3.jpg'
import img4 from './assets/img/img4.jpg'
import img5 from './assets/img/img5.jpg'
import img6 from './assets/img/img6.jpg'

function App() {
  return (
    <div className="App">
      <header className="header">header</header>
      <aside className="sidebar">aside</aside>
      <main className='main'>
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
