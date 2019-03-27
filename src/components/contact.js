import React, { Component } from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
        <Cell col={6}>
        <h1>Brahim Hmida</h1>
        <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
        alt="avatar" style={{ height: '250px' }}/>
        <p style={{ width:'75%',margin: 'auto', paddingTop:'1em' }} >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
       
        </p>
        </Cell>
        <Cell col={6}>
        <h2>Contact me</h2>
        <hr/>
        
        <List>
  <ListItem>
    <ListItemContent icon="phone" style={{ fontSize:'25px' , fontFamily: 'Anton' }} >(+216)53727298</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent icon="mail" style={{ fontSize:'25px' , fontFamily: 'Anton' }}  >brahimhm470@gmail.com</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent icon="home"  style={{ fontSize:'25px' , fontFamily: 'Anton' }} >48 Rue Hssan Nourie Menzel Jemil Bizerte</ListItemContent>
  </ListItem>
  
</List>
        </Cell>
        </Grid>
      </div>
    )
  }
}
