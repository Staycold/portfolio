import React from 'react';

function Project(props) {
    return (
        <div className='project-section'>
            {/* <h1></h1>
            <a href={props.details.url} ><img src= /></a> */}


            <div className="d-flex" id='firstRow'>
                <div className="img-container">
                    <img src={props.details.image} className="project-img" alt="" />
                </div>
                <div className="desc-container">
                    <h2>{props.details.title} </h2>
                    <p id='txt'>{props.details.desc}</p>
                </div>

            </div>

            <div className="d-flex justify-content-around " id='wrklinks'>
                <div>
                    <a href={props.details.url1} target="_blank">The Code</a>
                </div>
                <div>
                <a href={props.details.url2} target="_blank">Deployed</a>
                </div>
            </div>


        </div>
    );
}

export default Project;