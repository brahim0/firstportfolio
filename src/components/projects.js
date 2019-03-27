import React, { Component } from 'react'
import {Tabs,Tab,Cell,Grid,Card,CardActions,CardTitle,Button,CardMenu,IconButton,CardText} from 'react-mdl';

export default class Projects extends Component {
  constructor(props){
      super(props);
      this.state={
       activeTab:0
      };
  }
  toggleCategories=()=>{
      if(this.state.activeTab===0){
          return (<div>
              <Card shadow={5} style={{minWidth: '450px',margin: 'auto'}}>
                 <CardTitle style={{color:"#fff",height:'170px',background: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjPlvC70nvxGemyIgUOIamxDC0426qdbXiaDbqcylTd_Qd7BY3')"}}>React project</CardTitle>
                 <CardText>
                 Lorem Ipsum is simply dummy text of the printing and typesetting 
                 industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, 
                 </CardText>
                 <CardActions border>
                   <Button colored>Github</Button>
                   <Button colored>CodePen</Button>
                   <Button colored>Live Demo</Button>
                 </CardActions>
                 <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                 </CardMenu>
              </Card>
          </div>)
      }
      if(this.state.activeTab===1){
        return (<div>
            <Card shadow={5} style={{minWidth: '450px',margin: 'auto'}}>
               <CardTitle style={{color:"#fff",height:'170px',background: "url('https://pbs.twimg.com/profile_images/1450222519/logosf_positif_03_icon_400x400.png')"}}>Symfony project</CardTitle>
               <CardText>
               Lorem Ipsum is simply dummy text of the printing and typesetting 
               industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, 
               </CardText>
               <CardActions border>
                 <Button colored>Github</Button>
                 <Button colored>CodePen</Button>
                 <Button colored>Live Demo</Button>
               </CardActions>
               <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
               </CardMenu>
            </Card>
        </div>)
    }
    if(this.state.activeTab===2){
        return (<div>
            <Card shadow={5} style={{minWidth: '450px',margin: 'auto'}}>
               <CardTitle style={{color:"#fff",height:'170px',background: "url('https://www.ladybirdweb.com/wp-content/uploads/2016/03/laravel-1.png')"}}>Laravel project</CardTitle>
               <CardText>
               Lorem Ipsum is simply dummy text of the printing and typesetting 
               industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, 
               </CardText>
               <CardActions border>
                 <Button colored>Github</Button>
                 <Button colored>CodePen</Button>
                 <Button colored>Live Demo</Button>
               </CardActions>
               <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
               </CardMenu>
            </Card>
        </div>)
    }
  }
    render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>{this.setState({activeTab:tabId})}} ripple>
          <Tab>React</Tab>
          <Tab>Symfony</Tab>
          <Tab>Laravel</Tab>
        </Tabs>
        <section className="projects-grid">
        <Grid>
            <Cell col={12}>
              <div className="content">
              {this.toggleCategories()}
              </div>
            </Cell>
        </Grid>
          
        </section>
      </div>
    )
  }
}
