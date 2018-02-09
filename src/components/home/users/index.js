import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getInfoUsersAction } from '../../../actions/index.js';

class UsersComponent extends Component {
  constructor() {
    super();
    this.state = {
      listUser: null,
      textSearch: '',
      listChunk: [],
      index: 0,
      num: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.paginations = this.paginations.bind(this);
  }

  componentDidMount() {
    this.props.getInfoUsersAction();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.listUsers !== undefined) {
      const users = _.chunk(nextProps.listUsers, 300);
      this.setState({
        listUser: nextProps.listUsers,
        listChunk: users[this.state.index],
        num: users.length
      })
    }
  }

  infoByUser = (item, key) => {
    return (
      <tr key={key}>
        <th>{item.info.name}</th>
        <td>{item.info.name}</td>
        <td>{item.info.name}</td>
        <td><button onClick={() => this.goInfoByUser(key)} type="button" class="btn btn-link">Link</button></td>
      </tr>
    );
  };

   handleChange = (event) => {
    const value = event.target.value;
    const searchUsers = _.filter(this.props.listUsers,
      (user) => _.startsWith(user.info.name, value));
    this.setState({
      textSearch: value,
      listUser: searchUsers
    });
  }

  goInfoByUser = (key) => {
    console.log(key);
  }

  paginations = () => {
    for (let i = 0; i < this.state.num; i++) {
      return (
        <li class="page-item"><a class="page-link">{i+1}</a></li>
      );
    }
  }

  render() {
    const { listChunk } = this.state;
    return (
      <div class="container-fluid">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Buscar</span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={this.handleChange}
            value={this.state.textSearch}
          />
        </div>
        {listChunk !== null ?
          <table class="table">
            <thead class="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
            {_.map(listChunk, this.infoByUser)}
            </tbody>
          </table>
          : null
        }
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-end">
            <li class="page-item disabled">
              <a class="page-link" tabindex="-1">Previous</a>
            </li>
            {this.paginations}
            <li class="page-item">
              <a class="page-link">Next</a>
            </li>
          </ul>
        </nav>
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
