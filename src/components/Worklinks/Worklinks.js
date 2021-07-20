import React from 'react';
// import Landingpageimg from '../../Images/landing-page.png';
import Imgs from '../../Images';

function Worklinks() {
    return(
    
    <div class="boxes">
    
    <div class="bigOne">
        <a href="https://github.com/Staycold" target="_blank">                       
        <img class="bigImg" src="assets/iceshelf.webp"/> Github
        </a>
    </div>
    <div class="row">
      <div class="portal">
          <a href="https://github.com/darylnauman/cold-travel-planner" target= "_blank">
        <img id="pics" src={Imgs.Landingpageimg}/>Project 2/ Plan your trip!
          </a>
      </div>
      <div class="portal">
          <a href="https://github.com/Staycold/ReadmeGenerator" target="_blank">
        <img id ="pics" src="assets/readmegen.png"/> Readme Generator
          </a>
      </div>
    </div>
    <div class="row">
      <div class="portal">
          <a href="https://github.com/Staycold/Team-Profile-Generator-OOP" target="_blank">                       
        <img id="pics" src="assets/TPG.png"/> Team Profile Generator
        </a>                          
      </div>
      <div class="portal">
          <a href="https://github.com/Staycold/Project1" target="_blank">
          <img id="pics" src={Imgs.Esports}/> Project 1</a>

      </div>
    </div>
</div>

)
}

export default Worklinks;