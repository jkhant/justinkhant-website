import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>MyanEats</h2></a>
                <p>Designed and developed an iOS application that enables users to browse, search, and pre-order homemade Myanmar cuisine across the United States using SwiftUI and Firebase.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>Koe Na Win Tracker</h2></a>
                <p>Koe Na Win Tracker is a mobile app designed to help users stay consistent with Myanmar traditional prayers through a structured tracking system. The app includes features such as a daily prayer counter, a calendar to track completed days, a leaderboard to compare progress with other users, and detailed progress statistics showing stages and milestones.</p>
            </div>
            
            
        </div>

        <h1>Upcoming Projects</h1>
        <div className="projects-grid">
        <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Game Swap</h2></a>
                <p>Game Swap is a mobile app that enables users to rent and swap unused game cartridges from popular consoles such as Nintendo, PlayStation, and Xbox. Designed for gamers looking to share and explore new titles, Game Swap allows users to list their unused games for rent and browse available games from other users.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Campus Culture</h2></a>
                <p>Campus Culture is a mobile app designed to connect students with cultural organizations and events at universities. Users can explore various cultural student organizations across campuses, view upcoming events, and make reservations.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;