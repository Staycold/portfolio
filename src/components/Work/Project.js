import React from 'react';

function Project(props) {
    return (
        <div>
            {/* <h1></h1>
            <a href={props.details.url} ><img src= /></a> */}


            <div className="d-flex">
                <div className="img-container">
                    <img src={props.details.image} className="project-img" alt="" />
                </div>
                <div className="desc-container">
                    <h2>{props.details.title} </h2>
                    <p>{props.details.desc}</p>
                </div>

            </div>

            <div className="d-flex justify-content-around ">
                <div>
                    <a href={props.details.url1}>The Code</a>
                </div>
                <div>
                <a href={props.details.url1}>Deployed</a>
                </div>
            </div>


        </div>
    );
}

export default Project;