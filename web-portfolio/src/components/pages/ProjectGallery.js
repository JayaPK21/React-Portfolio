import React, { Component } from "react";
import Project from "./Project";
import projectData from "../../projects.json";

class ProjectGallery extends Component {

  state = {
    proj1: "cover",
    proj2: "cover",
    proj3: "cover",
    proj4: "cover",
    proj5: "cover",
    proj6: "cover"
  }

  setDisplayState = event => {
    //event.stopPropagation();
    const {id} = event.target;
    //console.log("Event is being called: "+event.target.className);
    //console.log("Event is being called: "+this.state[id]);
    if(this.state[id] === "cover") {
      this.setState({
        [id]: "detail"
      });
      //console.log(this.state);
    } else {
      // console.log(event.target+"Inside Else Statement");
      this.setState({
        [id]: "cover"
      });
      // console.log(this.state);
    }
  };

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row m-5">
            {projectData.map((project, i) => {
              let displayVal = "";
              switch(project.id){
                case "proj1": displayVal = this.state.proj1;
                              break;
                case "proj2": displayVal = this.state.proj2;
                              break;
                case "proj3": displayVal = this.state.proj3;
                              break;
                case "proj4": displayVal = this.state.proj4;
                              break;
                case "proj5": displayVal = this.state.proj5;
                              break;
                case "proj6": displayVal = this.state.proj6;
                              break;
                default: //do nothing
              }
              //console.log("DisplayVal: "+displayVal);
              return (
                <div key={i} id={project.id} className='col-sm-6 col-lg-4' onClick={(event) => this.setDisplayState(event)} >
                  <Project 
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    display={displayVal}
                    // displayHandler={this.setDisplayState}
                    />
                </div>
              );
              
              })}
          </div>
        </div>
      </div>
    );
  }
  
}

export default ProjectGallery;
