import './App.css';
import Headliner from './components/headliner/Headliner';
import img1 from './assets/img/img1.jpg'
import img2 from './assets/img/img2.jpg'
import img3 from './assets/img/img3.jpg'
import img4 from './assets/img/img4.jpg'
import img5 from './assets/img/img5.jpg'
import img6 from './assets/img/img6.jpg'

import {ChannelItem} from './components/channel/ChannelItem';
import foxLogo from './assets/img/foxNews/foxLogo.png'
import foxTitle from './assets/img/foxNews/foxTitle.png'
import cw6Logo from './assets/img/cw6News/cw6Logo.png'
import cw6Title from './assets/img/cw6News/cw6Title.png'
import abcLogo from './assets/img/abcNews/abcLogo.png'
import abcTitle from './assets/img/abcNews/abcTitle.png'
import aljazeeraLogo from './assets/img/alJazeera/aljazeeraLogo.png'
import aljazeeraTitle from './assets/img/alJazeera/aljazeeraTitle.png'
import bbcLogo from './assets/img/bbcNews/bbcLogo.png'
import bbcTitle from './assets/img/bbcNews/bbcTitle.png'
import cnnLogo from './assets/img/cnnNews/cnnLogo.png'
import cnnTitle from './assets/img/cnnNews/cnnTitle.png'

import News from './components/news/News';
import img7 from './assets/img/img7.jpg'
import img8 from './assets/img/img8.jpg'
import img9 from './assets/img/img9.jpg'

import Sidebar from './components/sidebars/Sidebar';
import logoDaily from './assets/img/logoDaily.png'
import homeIcon from './assets/img/Home/homeIcon.png'
import exploreIcon from './assets/img/Explore/exploreIcon.png'
import savedIcon from './assets/img/Saved/savedIcon.png'
import subscriptionIcon from './assets/img/Subscription/subscriptionIcon.png'
import messageIcon from './assets/img/Message/messageIcon.png'
import settingsIcon from './assets/img/Settings/settingsIcon.png'
import logoutIcon from './assets/img/Logout/logoutIcon.png'
import numerOfMessage from './assets/img/Message/numerOfMessage.png'

import Heading from './components/heading/Heading';
import headingIcon from './assets/img/headingPic/headingIcon.png'
import headingCalendar from './assets/img/headingPic/headingCalendar.png'
import headingGroup from './assets/img/headingPic/headingGroup.png'
import headingImage from './assets/img/headingPic/headingImage.png'
import Options from './assets/img/headingPic/Options.png'



function App() {
    return (
        <div className="App">
            <header className="headers">
                <div className="headers-block">
                    <Heading iconImg={headingIcon} title="San Francisco, California" iconImg1={Options}/>
                    <Heading iconImg={headingGroup} title="Analysis" iconImg1={Options}/>
                    <Heading iconImg={headingCalendar} title="Monthly" iconImg1={Options}/>
                    <input className="headers-input" placeholder="Search for anything…"></input>
                    <button className="headers-btn"></button>
                </div>
            </header>
            <aside className="sidebars">
                <Sidebar thumbnail={logoDaily}/>
                <div className="sidebars-container">
                    <Sidebar iconImg={homeIcon} title="Home"/>
                    <Sidebar iconImg={exploreIcon} title="Explore"/>
                    <Sidebar iconImg={savedIcon} title="Saved"/>
                    <Sidebar iconImg={subscriptionIcon} title="Subscription"/>
                    <Sidebar iconImg={messageIcon} title="Message" iconImg1={numerOfMessage}/>
                    <Sidebar iconImg={settingsIcon} title="Settings"/>
                </div>
                <Sidebar iconImg={logoutIcon} title="Logout"/>
            </aside>
            <main className='main'>
                <section className="channels">
                    <div className="control">
                        <h2 className="block-title">Explore Channels</h2>
                        {/*<ChannelBtn iconImg={seeAll}/>*/}
                        {/*<button className="btn">See all</button>*/}
                    </div>
                    <div className="channels-block">
                        <ChannelItem titleImg={foxTitle} logoImg={foxLogo}/>
                        <ChannelItem titleImg={cw6Title} logoImg={cw6Logo}/>
                        <ChannelItem titleImg={abcTitle} logoImg={abcLogo}/>
                        <ChannelItem titleImg={aljazeeraTitle} logoImg={aljazeeraLogo}/>
                        <ChannelItem titleImg={bbcTitle} logoImg={bbcLogo}/>
                        <ChannelItem titleImg={cnnTitle} logoImg={cnnLogo}/>
                    </div>
                </section>
                <section className="headliners">
                    <h2 className="block-title">Today’s Headlines</h2>
                    <div className="block-content">
                        <Headliner title="Hate speech vs free speech" thumbnail={img1} text="10.8k" label="BBC NEWS"
                                   text1="1.4k"/>
                        <Headliner title="Ontario Liberal leadership" thumbnail={img2} text="10.8k" label="BBC NEWS"
                                   text1="3.4k"/>
                        <Headliner title="Victim of Scarborough" thumbnail={img3} text="20.8k" label="BBC NEWS"
                                   text1="1.1k"/>
                        <Headliner title="Mother who left her baby" thumbnail={img4} text="0" label="ABC NEWS"
                                   text1="20k"/>
                        <Headliner title="Mother of Stefanie Rengel" thumbnail={img5} text="10.8k" label="CW6 NEWS"
                                   text1="1.4k"/>
                        <Headliner title="World Cup: Popular items" thumbnail={img6} text="10.8k" label="CNN NEWS"
                                   text1="1.4k"/>
                    </div>
                </section>
                <section className="news">
                    <h2 className="block-title">Featured News</h2>
                    <div className="news-block">
                        <News thumbnail={img7} title="Travellers to pay more than $2K, Trudeau says" label="Fox NEWS"/>
                        <News thumbnail={img8} title="Myanmar’s military seizes control of country ov  er..."
                              label="CNN NEWS"/>
                        <News thumbnail={img9} title="Pressure builds for Biden to cancel other pipeline..."
                              label="BBC NEWS"/>
                    </div>
                </section>
            </main>


        </div>
    );
}

export default App;
