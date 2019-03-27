import React, { Component } from 'react';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import './App.css';
import Main from './components/main';
import {Link} from 'react-router-dom';
import logo from './logo.svg';
class App extends Component {
  render() {
    return (
      
        <div >
    <Layout fixedHeader>
        <Header className="header-color" title={<span><Link to="/"><img style={{ width: '60%', height: '50%' }} src={logo} alt="logo" /></Link></span>}>
            <Navigation>
               <Link to="/contact" >Contact</Link>
               <Link to="/about" >About Me</Link>
               <Link to="/resume" >Resume</Link>
               <Link to="/projects" >Projects</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
               <Link to="/contact" >Contact</Link>
               <Link to="/about" >About Me</Link>
               <Link to="/resume" >Resume</Link>
               <Link to="/projects" >Projects</Link>
            </Navigation>
        </Drawer>
        <Main />
        <Content />
    </Layout>
</div>
     
    );
  }
}

export default App;
