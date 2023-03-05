import React from 'react';
import project1Img from '../../assets/images/pilot-application-website.png';
import project2Img from '../../assets/images/css-snippet-project.png';
import project3Img from '../../assets/images/quiz-application-website.png';
import project4Img from '../../assets/images/scheduler_application.png';
import project5Img from '../../assets/images/weather-dashboard-website.png';
import project6Img from '../../assets/images/css-snippet-project.png';


function Project({id, title, description, image, display, displayHandler}) {
    
    let projectImage = null;

    switch(image){
        case 'project1Img': projectImage = project1Img;
                            break;

        case 'project2Img': projectImage = project2Img;
                            break;

        case 'project3Img': projectImage = project3Img;
                            break;

        case 'project4Img': projectImage = project4Img;
                            break;

        case 'project5Img': projectImage = project5Img;
                            break;

        case 'project6Img': projectImage = project6Img;
                            break;
        
        default: break;
    }
    // console.log("project image: "+projectImage);
    const imgStyle = {
        backgroundImage: 'url('+projectImage+')',
        minHeight: 250,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    if(display === "cover"){

        return(
            
            <div id={id} style={imgStyle} className='card my-2'>
                {/* <div  className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div> */}
            </div>
            
        );

    } else {
        // console.log("Value of id: "+id);
        return(
            
            <div id={id} style={{minHeight: 250, backgroundColor: 'green'}} className='card my-2'>
                <div id={id} className="card-body">
                    <h5 id={id} className="card-title">{title}</h5>
                    <p id={id} className="card-text">{description}</p>
                </div>
            </div>
            
        );

    }
    
}

export default Project;