import React, { Component } from 'react';

import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <h1>Dashboard Page</h1>
        <h4>List of Users</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Phone No.</th>
            </tr>
          </thead>
          <tbody>
            {this.props.user.map(item => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.gender}</td>
                  <td>{item.email}</td>
                  <td>{item.phoneNo}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.dashboard;
};

export default connect(mapStateToProps)(Dashboard);
