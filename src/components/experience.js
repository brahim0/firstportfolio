import React, { Component } from 'react'
import {Grid,Cell} from 'react-mdl';
export default class Experience extends Component {
  render() {
    return (
      <div>
        <Grid>
            <Cell col={4}>
            {this.props.dateFE}
            </Cell>
            <Cell col={8}>
            {this.props.FE}
            </Cell>
        </Grid>
        <Grid>
            <Cell col={4}>
            {this.props.dateSE}
            </Cell>
            <Cell col={8}>
            {this.props.SE}
            </Cell>
        </Grid>
        <Grid>
            <Cell col={4}>
            {this.props.dateTE}
            </Cell>
            <Cell col={8}>
            {this.props.TE}
            </Cell>
        </Grid>
      </div>
    )
  }
}
