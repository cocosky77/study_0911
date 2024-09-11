import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const userData = [{
    id: 1,
    user: "Leslle",
    comp: 10,
    earn: "3,625", /* 쉼표 때문에 문자열로 처리 후 연산할 때 숫자로 변환 */
  },
  {
    id: 2,
    user: "Soham",
    comp: 8,
    earn: "3,210", /* 쉼표 때문에 문자열로 처리 후 연산할 때 숫자로 변환 */
  },
  {
    id: 3,
    user: "Esther",
    comp: 12,
    earn: "2,876", /* 쉼표 때문에 문자열로 처리 후 연산할 때 숫자로 변환 */
  },
  {
    id: 4,
    user: "Mitchell",
    comp: 2,
    earn: "2,205", /* 쉼표 때문에 문자열로 처리 후 연산할 때 숫자로 변환 */
  },
  {
    id: 5,
    user: "Ann",
    comp: 9,
    earn: "1,860", /* 쉼표 때문에 문자열로 처리 후 연산할 때 숫자로 변환 */
  },
  {
    id: 6,
    user: "Shawn",
    comp: 0,
    earn: "1,010", /* 쉼표 때문에 문자열로 처리 후 연산할 때 숫자로 변환 */
  },]

  const box = [{
    pro: "🌱",
    name: "Quest"
  },
  {
    pro: "🌱",
    name: "Quest"
  },
  {
    pro: "🌱",
    name: "Quest"
  },
  {
    pro: "🌱",
    name: "Quest"
  },
  {
    pro: "🌱",
    name: "Quest"
  },
  {
    pro: "🌱",
    name: "Quest"
  },
  {
    pro: "🌱",
    name: "Quest"
  },
  {
    pro: "🌱",
    name: "Quest"
  },
  {
    pro: "🌱",
    name: "Quest"
  },
  {
    pro: "🌱",
    name: "Quest"
  },
  {
    pro: "🌱",
    name: "Quest"
  },
  {
    pro: "🌱",
    name: "Quest"
  },]

  const video = [{
    img: "strategy.png",
    title: "Gameplay Teaser"
  },{
    img: "apex.png",
    title: "The 5 most iconic video game characters of all ti..."
  },{
    img: "never.png",
    title: "Nerf War: First Person Shooter 6"
  },{
    img: "six.png",
    title: "The Horrifying Extraction Shooter You've Never Pla..."
  },{
    img: "ten.png",
    title: "10 Best Action Games With NON-STOP Combat..."
  },{
    img: "pack.png",
    title: "TOP 12 New Upcoming FIGHTING Games 2023 | P..."
  },]

  return (
    <div className="App">
      {/* nav바 */}
    <nav className='navbar'>
      <div className='nav_logo'>
        <img src='https://github.com/user-attachments/assets/0d256f86-bb9b-4d3d-98ea-56d47bc586fa'/>
      </div>

      <ul className='nav_links'>
      <li><a href="#">MAIN</a></li>
            <li><a href="#">GAME</a></li>
            <li><a href="#">SHOP</a></li>
            <li><a href="#">EXPLORER</a></li>
            <li><a href="#" class="club">CLUB</a></li>
            <li><a href="#" class="earn">EARN</a></li>
      </ul>

      <div className='nav_btn'>
        <button class="login-btn">Login</button>
        <button class="language-btn">EN ▼</button>
      </div>
    </nav>

      <div className='club-main'>
        <div className='club-container'>
          <div className='club-header'>
            <p>NEXT STEP</p>
          </div>
          <div className='club-namebox'>
            <h2>superman</h2>
            <div>
              <p>Member 7,566</p>
              <p>Total Point 300,000</p>
            </div>
          </div>
          <div className='club-userbox'>
            <p>🙂</p>
            <p>MIRACLE</p>
            <p>🌱</p>
          </div>
          <div className='club-btns'>
            <button>Home</button>
            <button>Ranking</button>
            <button>Quest</button>
            <button>Video</button>
            <button>Board</button>
            <button>Leaderboard</button>
          </div>
          <div className='club-details'>
          <div className='club-details_rq'>
            <div className='club-details_ranking'>
              <div className='club-details_ranking_title'>
                <h2>RANKING</h2>
                <p>More</p>
              </div>
              <div className='club-details_ranking_list'>
                <div className='club-details_ranking_list_header'>
                  <p>#</p>
                  <p>USER</p>
                  <p>Completed Quest</p>
                  <p>Earned Points</p>
                </div>
                {userData.map((item, index) => (
                <div className='club-details_ranking_list_userlist' key={index}>
                  <p>{item.id}</p>
                  <p>{item.user}</p>
                  <p>{item.comp}</p>
                  <p>{item.earn}</p>
                </div>
                ))}
              </div>
            </div>
            <div className='club-details_quest'>
            <div className='club-details_quest_title'>
                <h2>QUEST</h2>
                <p>More</p>
              </div>
              <div className='club-details_quest_box'>
                {box.map((item, index) => (
                <div className='club-details_quest_box_detail' key={index}>
                  <p>{item.pro}</p>
                  <p>{item.name}</p>
                </div>
                ))}
              </div>
            </div>
            </div>
            <div className='club-details_video'>
            <div className='club-details_video_title'>
                <h2>VIDEO</h2>
                <p>More</p>
              </div>
              <div className='club-details_video_detail'>
                {video.map((item, index) => (
                <div className='club-details_video_detail_box' key={index}>
                  <img src={item.img} />
                  <p>{item.title}</p>
                </div>
                ))}
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
