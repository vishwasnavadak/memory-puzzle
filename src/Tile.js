import React, { Component } from "react";

class Tile extends Component {
  toggleReveal = () => {
    const { logo, index } = this.props;
    this.props.onClick(logo, index);
  };

  render() {
    return (
      <div>
        <div className="card tile" onClick={this.toggleReveal}>
          <div className="card-content">
            {this.props.reveal && <p>{this.props.logo}</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default Tile;
