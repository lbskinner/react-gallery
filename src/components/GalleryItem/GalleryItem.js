import React, { Component } from "react";
import "./GalleryItem.css";

class GalleryItem extends Component {
  state = {
    classNameImage: "",
    classNameDescription: "hideDisplay",
  };

  changeToDescription = (event) => {
    console.log("Image Clicked");
    this.setState({
      classNameImage: "hideDisplay",
      classNameDescription: "",
    });
  };

  changeToImage = (event) => {
    console.log("Description Clicked");
    this.setState({
      classNameImage: "",
      classNameDescription: "hideDisplay",
    });
  };

  render() {
    let likesMessage = <p>No people love this :(</p>;
    if (this.props.item.likes > 0) {
      likesMessage = (
        <p>
          <span>{this.props.item.likes}</span> people love this!
        </p>
      );
    }

    return (
      <div className="grid-container">
        <div className={"image-container " + this.state.classNameImage}>
          <img
            src={this.props.item.path}
            alt=""
            onClick={this.changeToDescription}
          />
        </div>
        <div
          className={this.state.classNameDescription + " square"}
          onClick={this.changeToImage}
        >
          <p> {this.props.item.description}</p>
        </div>

        <button
          data-id={this.props.item.id}
          onClick={this.props.clickLikeButton}
        >
          love it!
        </button>
        <button
          data-id={this.props.item.id}
          onClick={this.props.clickDeleteButton}
        >
          delete
        </button>
        {likesMessage}
      </div>
    );
  }
}

export default GalleryItem;
