import React, { Component } from "react";
import "./GalleryItem.css";

class GalleryItem extends Component {
  render() {
    return (
      <div className="item-container">
        <img src={this.props.item.path} alt="" />
        <p>{this.props.item.description}</p>
        <button>love it!</button>
        <p>
          <span>{this.props.item.likes}</span> people love this!
        </p>
      </div>
    );
  }
}

export default GalleryItem;
