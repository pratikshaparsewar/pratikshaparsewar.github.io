import React, { Component } from 'react';
import { Button, CardMenu, Grid, Cell, List, ListItem, ListItemContent,Card, CardTitle,CardText,CardActions,IconButton} from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={4}>
            <h2>pratiksha parsewar</h2>
            <img
              src="https://cdn3.iconfinder.com/data/icons/roles-computer-it/128/programmer-2-512.png"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Front end developer/ UI developer with over
             1.3 year of experience working in a startup environment and the digital world.I have been hooked on creating elegant,
             user friendly, SEO friendly, responsive websites.
             </p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    8888762473
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    parsewarpratikshap@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;