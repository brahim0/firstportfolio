import React, { Component } from 'react'
import {Grid,Cell} from 'react-mdl';
export default class Skill extends Component {
  render() {
    return (
      <div>
        <Grid>
            <Cell col={4} >
             {this.props.domaine}
            </Cell>
            <Cell col={8} >
{this.props.sousdomaine}
</Cell>
        </Grid>
      </div>
    )
  }
}
