import React, { Component } from 'react';

class people extends Component {
  render() {
    return (
      <div>
        <div id="myModal" style={{ display: this.props.dis }} className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <span
                className="close"
                onClick={this.props.spanHandler.bind(this)}
              >
                &times;
              </span>
              <div className="profileHeader">
                <img
                  className="backgroundImage"
                  style={{ width: '100%', height: '300px' }}
                  src={this.props.info[this.props.id - 1]['profileImage']}
                ></img>
                <img
                  className="profileImage"
                  src={this.props.info[this.props.id - 1]['profileImage']}
                ></img>
              </div>
              <div id="nav-left">
                <h2>Address :</h2>

                <h3>Country</h3>

                <h3>State</h3>
                <h3>City</h3>
                <h3>Street</h3>

                <h2>Contact:</h2>

                <h3>Email</h3>
                <h3>Phone</h3>
              </div>

              <div id="nav-right">
                <h3>
                  {this.props.info[this.props.id - 1]['address']['country']}
                </h3>

                <h3>
                  {this.props.info[this.props.id - 1]['address']['state']}
                </h3>
                <h3>{this.props.info[this.props.id - 1]['address']['city']}</h3>
                <h3>
                  {
                    this.props.info[this.props.id - 1]['address'][
                      'streetAddress'
                    ]
                  }
                </h3>

                <div className="leftThorai">
                  <h3>{this.props.info[this.props.id - 1]['email']}</h3>
                  <h3>{this.props.info[this.props.id - 1]['phone']}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {}
      </div>
    );
  }
}

export default people;
