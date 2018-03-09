import React, { Component } from 'react';
import {Button} from 'react-mdl';


class Resume extends Component {
  render() {
    return(
      <div className="resume-page">
      	<Button raised accent style={{margin:'50px'}} href="resume.pdf" download="resume.pdf">Download Resume </Button>
      	<span>
			<img src="https://netbramha.com/wp-content/uploads/2016/12/front-end-developers-openings-1.gif" alt="name" />
      	</span>
      </div>
    )
  }
}

export default Resume;
