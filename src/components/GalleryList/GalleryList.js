import React, { Component } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

class GalleryList extends Component {
  render() {
    const displayedGallery = this.props.galleryData.map((item, index) => {
      return (
        <GalleryItem
          key={index}
          item={item}
          clickLikeButton={this.props.clickLikeButton}
          clickDeleteButton={this.props.clickDeleteButton}
        />
      );
    });
    return <div className="item-container">{displayedGallery}</div>;
  }
}

export default GalleryList;
