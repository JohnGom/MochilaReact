import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import IconButton from 'material-ui/IconButton';
import SelectField from 'material-ui/SelectField';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {Card, CardActions, CardHeader, CardMedia} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FontIcon from 'material-ui/FontIcon';
import CircularProgress from 'material-ui/CircularProgress';
import MenuItem from 'material-ui/MenuItem';
import { getInfoUsersAction } from '../../../actions/index.js';

class UsersComponent extends Component {
  constructor() {
    super();
    this.state = {
      textSearch: '',
      listChunk: [],
      index: 0,
      num: 0,
      value: 100
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.getInfoUsersAction();
    if (this.props.listUsers.length > 0) {
      const users = _.chunk(this.props.listUsers, this.state.value);
      this.setState({
        listChunk: users,
        num: users.length
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.listUsers !== undefined && nextProps.listUsers.length !== this.props.listUsers.length) {
      const users = _.chunk(nextProps.listUsers, this.state.value);
      this.setState({
        listChunk: users,
        num: users.length
      });
    }
  }

  infoByUser = (item, key) => {
    return (
      <TableRow key={key}>
        <TableRowColumn>{item.info.name}</TableRowColumn>
        <TableRowColumn>{item.info.name}</TableRowColumn>
        <TableRowColumn><button onClick={() => this.goInfoByUser(item.uid)} type="button" className="btn btn-link">Link</button></TableRowColumn>
      </TableRow>
    );
  };

   handleChange = (event) => {
    const value = event.target.value;
    const searchUsers = _.filter(this.props.listUsers,
      (user) => _.startsWith(user.info.name, value));
    const users = _.chunk(searchUsers, this.state.value);
    this.setState({
      textSearch: value,
      listChunk: users,
      index: 0
    });
  }

  goInfoByUser = (key) => {
    console.log(key);
  }

  changePage = (i) => {
    this.setState({
      index: i
    });
  }

  paginations = (item, i) => {
    return (
      <li key={i} className="page-item">
        <button onClick={() => this.changePage(i)} className="page-link">{i+1}</button>
      </li>
    );
  }

  previousPage = () => {
    this.setState({
      index: this.state.index - 1
    });
  }
  nextPage = () => {
    this.setState({
      index: this.state.index + 1
    });
  }

  handleChangeSelect = (event, index, value) => {
    const users = _.chunk(this.props.listUsers, value);
    this.setState({
      listChunk: users,
      num: users.length,
      index: 0,
      value
    })
  }

  render() {
    const { listChunk } = this.state;
    return (
      <div className="container">
      {listChunk.length > 0 ?
       <Card>
       <Toolbar>
       <ToolbarGroup>
       <TextField hintText="Buscar" onChange={this.handleChange} />
       </ToolbarGroup>
       </Toolbar>
       <CardMedia>
        <Table
          selectable={false}>
          <TableHeader displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {_.map(listChunk[this.state.index], this.infoByUser)}
          </TableBody>
        </Table>
        </CardMedia>
        <CardActions>
        <SelectField
          floatingLabelText="Frequency"
          value={this.state.value}
          onChange={this.handleChangeSelect}
        >
          <MenuItem value={100} primaryText="100" />
          <MenuItem value={500} primaryText="500" />
          <MenuItem value={1000} primaryText="1000" />
        </SelectField>
        <div className="pagination justify-content-end">
        <IconButton
          disabled={this.state.index === 0 ? true : false}
          onClick={() =>  this.previousPage()}
          tooltip="Anterior"
          tooltipPosition="bottom-right"
        ><i className="material-icons">keyboard_arrow_left</i></IconButton>
        <p className="font-Italic">{`${this.state.index+1}/${listChunk.length}`}</p>
        <IconButton
          disabled={this.state.index === listChunk.length - 1 ? true : false}
          onClick={() =>  this.nextPage()}
          tooltip="Siguiente"
          tooltipPosition="bottom-left"
        ><i className="material-icons">keyboard_arrow_right</i></IconButton>
        </div>
        </CardActions>
        </Card>
        :
        <CircularProgress size={80} thickness={5} />
      }
     </div>
    );
  }
}

const mapStateToProps = (state) => {
  const listUsers = state.user.listUsers;
  return { listUsers }
};

export default connect(mapStateToProps,
{ getInfoUsersAction })(UsersComponent);
