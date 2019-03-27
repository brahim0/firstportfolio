import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';
import  Education from './education';
import Experience from './experience';
import Skill from './skill';
import Langue from './langue';

export default class Resume extends Component {
  state={
    bacYear:'2013',
    firstYearFac: '2014',
    secondYearFac: '2016',
    terminalYearFac:'2017',
    moyenneBac: '12.78',
    moyenneFYF:'11.27',
    moyenneSYF:'10.00',
    moyenneTYF: '11.56',
    dateFE:'30 Jan 2017 - 25 Mai 2017',
    dateSE:'05 Fev 2018 - 04 Mai 2018',
    dateTE:'03 Sept 2018 - 07 Jan 2019',
    FE: 'Projet de fin d\'études, chez ARAB SOFT',
    SE : 'ALLIANCE DESIGN, Secteur Informatique:  Poste occupé : Développeur Informatique (stage)',
    TE : 'BLUEPEN LABS, SecteurInformatique, Poste occupé : Développeur Informatique',
    

  }
  render() {
    return (
      <div>
        <Grid >
        <Cell style={{ textAlign: "center" }} col={4}>
        <img  src="https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png" alt="avatar"
        style={{ height:'200px' }}
        />
        <h2 style={{ paddingTop: '2em' }} >Brahim Hmida</h2>
        <h4 style={{ color:'grey' }}>Full stack developper</h4>
        <hr style={{  borderTop: '3px solid #833fb2' , width: '50%' }} />
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor
        </p>
        <hr style={{  borderTop: '3px solid #833fb2' , width: '50%' }} />
        <h5>Address</h5>
        <p>48 Rue hssan nourie menzel jmil bizerte 7080</p>
        <h5>Phone</h5>
        <p>(+216)53727298</p>
        <h5>Email</h5>
        <p>brahim470@gmail.com</p>
        <hr style={{  borderTop: '3px solid #833fb2' , width: '50%' }} />
        </Cell>
        <Cell className="resume-right-col" col={8}>
       <h2   >Education</h2>
       <Education bac={this.state.bacYear} firstYearFac={this.state.firstYearFac} secondYearFac={this.state.secondYearFac} terminalYearFac={this.state.terminalYearFac} moyenneBac={this.state.moyenneBac} moyenneFYF={this.state.moyenneFYF} moyenneSYF={this.state.moyenneSYF} moyenneTYF={this.state.moyenneTYF} />
       <hr style={{ borderTop: '2px solid #e22947' }} />
       <h2   >Experience</h2>
       <Experience dateFE={this.state.dateFE} dateSE={this.state.dateSE} dateTE={this.state.dateTE} FE={this.state.FE} SE={this.state.SE} TE={this.state.TE} />
       <hr style={{ borderTop: '2px solid #e22947' }} />
       <h2   >Skills</h2>
       <Skill domaine='Langages' sousdomaine="C, VB.NET, C#, Java, php5, php7"  />
       <Skill domaine='Web' sousdomaine="ASP.Net MVC, HTML, CSS, BootStrap, JavaScript , Jquery , JqueryUI, Vue.js"  />
       <Skill domaine='Framework' sousdomaine="Symfony(2.5,3.2,3.4), Laravel(5.2,5.3,5.5,5.6,5.7) ,Angular(2,7), React"  />
       <Skill domaine='Méthodologies' sousdomaine="UML, Scrum"  />
       <Skill domaine='Outils de conception' sousdomaine="tarUML"  />
       <Skill domaine='SGBD' sousdomaine="StarUML"  />
       <Skill domaine='IDE' sousdomaine="Eclipse , Android Studio , Visual Studio"  />
       <Skill domaine='System d’exploitation' sousdomaine="Linux ( Ubuntu 14.04 , Ubuntu 16.04) , Windows"  />
       <hr style={{ borderTop: '2px solid #e22947' }} />
       <h2   >Langues</h2>
       <Langue langue="Arabe" progress={100} />
       <Langue langue="Français" progress={70} />
       <Langue langue="Anglais" progress={70} />
       



        </Cell>
        </Grid>
      </div>
    )
  }
}
