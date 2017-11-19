import React, { Component } from 'react';
import User from './User'
class Users extends Component {
  static defaultProps = {
    users:[]
  }
  render() {
   
    return (
      <div>
        {
          this.props.users.map((user, index) => {
            return (
              <User user={user} key={index} />
            )
          })
        }  
      </div>
    )
  }
}

export default Users