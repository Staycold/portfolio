import React from 'react';


function NavTabs({ currentProject, handleProjectChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#Github"
          onClick={() => handleProjectChange('Github')}
          
          className={currentProject === 'Github' ? 'nav-link active' : 'nav-link'}
          id='nav-item'>
           Github
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Esports-Dashboard"
          onClick={() => handleProjectChange('Esports Dashboard')}
          
          className={currentProject === 'Esports Dashboard' ? 'nav-link active' : 'nav-link'}
         id='nav-item'>
           Esports Dashboard
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Plan-Your-Trip"
          onClick={() => handleProjectChange('Plan Your Trip')}
         
          className={currentProject === 'Plan Your Trip' ? 'nav-link active' : 'nav-link'}
          id='nav-item'>
           Plan Your Trip
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#The-Tech-Blog"
          
          onClick={() => handleProjectChange('The Tech Blog')}
          className={currentProject === 'The Tech Blog' ? 'nav-link active' : 'nav-link'}
          id='nav-item'>
          The Tech Blog
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Fitness-Tracker"
         
          onClick={() => handleProjectChange('Fitness Tracker')}
          className={currentProject === 'Fitness Tracker' ? 'nav-link active' : 'nav-link'}
          id='nav-item'>
          Fitness Tracker
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
