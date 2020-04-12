import React, { Component } from "react";

class AddGalleryItem extends Component {
  render() {
    return (
      <form onSubmit={this.props.addNewItem}>
        <label>Picture URL:</label>
        <input
          type="text"
          placeholder="www.example.com"
          required
          onChange={(event) => this.props.changeNewGalleryItem(event, "path")}
        />
        <label>Description:</label>
        <input
          type="text"
          placeholder="Enter a description"
          required
          onChange={(event) =>
            this.props.changeNewGalleryItem(event, "description")
          }
        />
        <button>Add To Gallery</button>
      </form>
    );
  }
}

export default AddGalleryItem;
