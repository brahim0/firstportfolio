import React, { Component } from 'react'
import {Grid,Cell,ProgressBar} from 'react-mdl';
export default class Langue extends Component {
  render() {
    return (
      <div>
        <Grid>
            <Cell col={4}>
             {this.props.langue}
            </Cell>
            <Cell col={8}>
            <ProgressBar progress={this.props.progress} />
            </Cell>
        </Grid>
      </div>
    )
  }
}
