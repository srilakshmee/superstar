import React, { Component } from 'react';
import axios from 'axios';

import MUIReport from './MUIReport.js';
import { Typography } from '@material-ui/core';

class Artist extends React.Component {
  state = {
      top_artists: [], // list is empty in the beginning
      avg_duration: '',
      error: false,
      colnames:['artists','name','popularity'],
      colnameheaders:['Artists','Song','Popularity']
   };

   componentDidMount() {
     axios.get(`http://localhost:5000/trend/year/2020`)
    .then(res => {
      const top_artists = res.data["artists"];
      const avg_duration = 'Average Duration of Popular Songs:'+res.data["avg_duration"];
      this.setState({ top_artists,avg_duration });
    })
   }



      render() {
        return (
<div>
                    <MUIReport data={this.state.top_artists}
                        colnames={this.state.colnames}
                        totalItemsCount={this.state.top_artists.length}
                        colnameheaders={this.state.colnameheaders}
                        reportname='Top Artists of 2020'
                      />
                      <Typography variant='h6' >
                        {this.state.avg_duration}
                      </Typography>
</div>

            );
        }
}

export default Artist;
