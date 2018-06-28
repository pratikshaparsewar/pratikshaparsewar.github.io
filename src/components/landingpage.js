import React, { Component } from 'react';
import { Grid, Cell , Footer , FooterSection, FooterLinkList } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
     <div style={{width:'100%',margin:'auto'}}>
     <Grid className="landing-grid">
     	<Cell col={12}>
           <img src="https://scontent.fbom3-2.fna.fbcdn.net/v/t1.0-1/p160x160/21077286_698941270295639_980205353201706261_n.jpg?_nc_cat=0&oh=57d8120197ce3d115c7d065ad09df18e&oe=5BB51ED7" 
           		alt="pratiksha parsewar picture"
           		className="avtar"
           />
           <div className="bannertext">
             <h1>Front end web developer</h1>
             <div className="buttons">
                <button className="fill">HTML5</button>
                <button className="fill">CSS3</button>
                <button className="fill">Bootstrap</button>
                <button className="fill">Sass/Less</button>
                <button className="fill">Javascript</button>
                <button className="fill">Jquery</button>
                <button className="fill">React</button>
                <button className="fill">React-Native</button>
              </div>  

             <div className="social-links">
    		          <a href="https://www.linkedin.com/in/pratikshaparsewar/" target="_blank">
    		            <i className="fa fa-linkedin-square" aria-hidden="true" />
    		          </a>
    		          <a href="https://github.com/pratikshaparsewar" rel="noopener noreferrer" target="_blank">
    		            <i className="fa fa-github-square" aria-hidden="true" />
    		          </a>
    		          <a href="https://codepen.io/pratikshaparsewar/" rel="noopener noreferrer" target="_blank">
    		            <i className="fa fa-codepen" aria-hidden="true" />
    		          </a>
                  <a href="https://codepen.io/pratikshaparsewar/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-pinterest" aria-hidden="true" />
                  </a>
    		          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
    		            <i className="fa fa-twitter" aria-hidden="true" />
    		          </a>
             </div>
           </div>
     	 </Cell>
     </Grid>
      <Footer size="mini">
        <FooterSection type="left">
            <FooterLinkList>
                <a className="text-center" style={{color:'#fff'}}>Made with  <i className="fa fa-heart" aria-hidden="true" style={{color:'red',margin:'auto'}} /> in bangalore</a>
            </FooterLinkList> 
        </FooterSection>
    </Footer>
     
     </div>
    )
  }
}

export default Landing;
