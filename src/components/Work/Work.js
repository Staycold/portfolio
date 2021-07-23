import React from 'react';
import Worklinks from '../Worklinks/Worklinks';
import NavTabs from './NavTabs';
import Project from './Project';
import { useState } from 'react';

import Imgs from '../../Images';

function Work() {
    const [currentProject, setCurrentProject] = useState('Github');
    const [details, setDetails] = useState({
        title: "Github", 
        image: Imgs.Staycold,
        url1: "https://github.com/Staycold",
        url2:"",
        desc:"This is My Github profile. Check out all the useful apps I've written."
    
    });

    const handleProjectChange = (project) => {
        setCurrentProject(project)

        if (project === 'Github') {
            setDetails({
                title: "Github", 
                image: Imgs.Staycold,
                url1: "https://github.com/Staycold",
                url2:"",
                desc:"This is My Github profile. Check out all the useful apps I've written."
            })
        }
        if (project === 'Esports Dashboard') {
            setDetails({
                title: "Esports Dashboard",
                image: Imgs.Esports,
                url1: "https://github.com/Staycold/Project1",
                url2: "https://staycold.github.io/EsportsDashboard/",
                desc:"This was the first project I presented for my bootcamp. An exercise in the use of 3rd party APIs. This allows you to view past, present, and upcoming Esports events for Call of Duty and Valorant, along with a generated list of live streamers with active links."  
            })
        }
        if (project === 'Plan Your Trip') {
            setDetails({
                title: "Plan Your Trip",
                image: Imgs.Landingpageimg,
                url1: "https://github.com",
                url2:"https://intense-savannah-61016.herokuapp.com/" ,
                desc:"Plan Your Trip was the second project I presented for my bootcamp. A small passion project of an idea, this application lets you create an account, where you can store a planned or past trip, with a breakdown for budgeting and even a currency conversion feature. In addition to those features, you can search for and add destinations, and even leave comments on destinations so that you can pass on tips or suggestions to other users."
            })
        }
        if (project === 'The Tech Blog') {
            setDetails({
                title: "The Tech Blog",
                image: Imgs.Techblog,
                url1: "https://github.com/Staycold/The_tech_blog",
                url2:"https://cold-tech-blog.herokuapp.com/",
                desc:"The tech blog was a full stack application I developed using handlebars and the MVC file structure. It is a blog site where you can sign up, post topics, and comment. The foundation for any social media program."
            })
        }

        if (project === 'Fitness Tracker') {
            setDetails({
                title: "Fitness Tracker",
                image: Imgs.Fitness,
                url1: "https://github.com/Staycold/Fitness_tracker",
                url2:"https://benefique-chaise-73181.herokuapp.com/?id=60ef3b49d7315c00159d3821",
                desc:"The fitness tracker is a very useful application that allows you to keep track of your worktouts or training sessions. It provides you with the functionality to track many differnt aspects of your workouts, such as duration or how much weight you've lifted and presents you with graphed data."
            })
        }

    };



    return (
        <div class="workSection" >
            <div id="work">
                <h2>
                    Work
                </h2>
            </div>

            <div id='worklinks'>
                {/* <Worklinks/> */}
                <NavTabs currentProject={currentProject} handleProjectChange={handleProjectChange} />
                <Project details={details}/>
            </div>
        </div>
    )

}
export default Work;