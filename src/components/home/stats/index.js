import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { getInfoStats } from '../../../actions/index.js';
import { HorizontalBar, Doughnut, Bar} from 'react-chartjs-2';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Usuarios por Union',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

class StatistiComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.props.getInfoStats();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.report !== undefined) {
      const report = nextProps.report;
      let labels = [];
      let info = []
      for (let i = 0; i < report.length; i++) {
        labels.push(report[i].union);
        info.push(report[i].users);
      }
      data.labels = labels;
      data.datasets[0].data = info;
    }
  }

  goInfoUnion = (item) => {
    let labels = [];
    let info = []
    for (let i = 0; i < item.associations.length; i++) {
      labels.push(item.associations[i].association);
      info.push(item.associations[i].users);
    }
    this.setState({ data: {
      labels,
      datasets: [{
        label: 'Usuarios por Asociación',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: info,
      }]
    }});
  }

  infoReport = (item, key) => {
    return (
      <ListItem
        key={key}
        onClick={() => this.goInfoUnion(item)}
        primaryText={item.union}
        leftIcon={<i class="material-icons">business</i>}
        primaryTogglesNestedList={true}
        />
    );
  };
  infoReportAssoc = (item, key) => {
    return (
      <ListItem
        key={key}
        primaryText={item.association}
        leftIcon={<i class="material-icons">account_balance</i>}
      />
    );
  };

  render() {
    const { report } = this.props;
    return (
      <div className="container">
      <Card>
       <CardMedia>
        <HorizontalBar
          width={100}
          height={50}
          data={data} />
       </CardMedia>
       { report !== undefined ?
       <CardMedia>
        <div className="row">
          <List className="col-sm-3">
            <Subheader>Nested List Items</Subheader>
            {_.map(report, this.infoReport)}
          </List>
          <div className="col-sm-9">
            <HorizontalBar data={this.state.data} />
          </div>
        </div>
       </CardMedia> :
       null
       }
       <CardActions>
       </CardActions>
      </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const report = state.stats.listData;
  console.log(report);
  return { report };
};

export default connect(mapStateToProps,
{ getInfoStats })(StatistiComponent);
