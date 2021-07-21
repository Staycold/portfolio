import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function NavTabs({ currentProject, handleProjectChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#Github"
          onClick={() => handleProjectChange('Github')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

          className={currentProject === 'Github' ? 'nav-link active' : 'nav-link'}
        >
           Github
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Esports-Dashboard"
          onClick={() => handleProjectChange('Esports Dashboard')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentProject === 'Esports Dashboard' ? 'nav-link active' : 'nav-link'}
        >
           Esports Dashboard
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Plan-Your-Trip"
          onClick={() => handleProjectChange('Plan Your Trip')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentProject === 'Plan Your Trip' ? 'nav-link active' : 'nav-link'}
        >
           Plan Your Trip
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#The-Tech-Blog"
          //  TODO: Add a comment explaining what this logic is doing

          onClick={() => handleProjectChange('The Tech Blog')}
          className={currentProject === 'The Tech Blog' ? 'nav-link active' : 'nav-link'}
        >
          The Tech Blog
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Fitness-Tracker"
          //  TODO: Add a comment explaining what this logic is doing

          onClick={() => handleProjectChange('Fitness Tracker')}
          className={currentProject === 'Fitness Tracker' ? 'nav-link active' : 'nav-link'}
        >
          Fitness Tracker
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
