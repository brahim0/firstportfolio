import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';
export default class Education extends Component {
  render() {
    return (
        <div>
<Grid>
          <Cell col={4}  >{this.props.bac}</Cell>
          <Cell col={8}  >J'ai obtenue mon bacalauréat avec mention assez bien avec un moyenne {this.props.moyenneBac}</Cell>
      </Grid>
      <Grid>
          <Cell col={4}  >{this.props.firstYearFac}</Cell>
          <Cell col={8}  >Faculté des Sciences de Bizerte (FSB).1ère année : (Moyenne : {this.props.moyenneFYF})  </Cell>
      </Grid>
      <Grid>
          <Cell col={4}  >{this.props.secondYearFac}</Cell>
          <Cell col={8}  >Faculté des Sciences de Bizerte (FSB).2éme année : (Moyenne : {this.props.moyenneSYF})  </Cell>
      </Grid>
      <Grid>
          <Cell col={4}  >{this.props.terminalYearFac}</Cell>
          <Cell col={8}  >Faculté des Sciences de Bizerte (FSB).3éme année : (Moyenne : {this.props.moyenneTYF})  </Cell>
      </Grid>
        </div>
      
    )
  }
}

