import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import GalleryList from "../GalleryList/GalleryList";
import AddGalleryItem from "../AddGalleryItem/AddGalleryItem";

class App extends Component {
  state = {
    newGalleryItem: {
      path: "",
      description: "",
    },
    galleryData: [],
  };
  componentDidMount() {
    console.log("Component App Did Mount");
    this.getGallery();
  }

  //
  // EVENT HANDLERS
  // -------------------
  clickLikeButton = (event) => {
    const id = event.target.dataset.id;
    console.log("Love it Clicked: ", id);

    this.updateLikes(id);
  };

  addNewItem = (event) => {
    event.preventDefault();
    console.log(this.state.newGalleryItem);
    this.sendNewGalleryToServer(this.state.newGalleryItem);
  };

  changeNewGalleryItem = (event, newGalleryKey) => {
    this.setState({
      newGalleryItem: {
        ...this.state.newGalleryItem,
        [newGalleryKey]: event.target.value,
      },
    });
  };

  clickDeleteButton = (event) => {
    const id = event.target.dataset.id;
    console.log("Delete Clicked: ", id);
  };
  //
  // API SERVER CALLS
  // -------------------

  sendNewGalleryToServer(newItem) {
    axios({
      method: "POST",
      url: "/gallery",
      data: newItem,
    })
      .then((response) => {
        console.log(`Server POST Response: ${response.data}`);
        this.getGallery();
      })
      .catch((error) => {
        console.log("POST ERROR: ", error);
      });
  }

  getGallery() {
    axios({
      method: "GET",
      url: "/gallery",
    })
      .then((response) => {
        console.log("Server GET Response: ", response.data);
        this.setState({
          galleryData: [...response.data],
        });
      })
      .catch((error) => {
        console.log("GET ERROR: ", error);
      });
  }

  updateLikes(id) {
    axios({
      method: "PUT",
      url: `/gallery/like/${id}`,
    })
      .then((response) => {
        console.log(response.data);
        this.getGallery();
      })
      .catch((error) => {
        console.log("PUT ERROR: ", error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <AddGalleryItem
          newGalleryItem={this.state.newGalleryItem}
          addNewItem={this.addNewItem}
          changeNewGalleryItem={this.changeNewGalleryItem}
        />
        <p>Gallery goes here</p>
        <GalleryList
          galleryData={this.state.galleryData}
          clickLikeButton={this.clickLikeButton}
          clickDeleteButton={this.clickDeleteButton}
        />
        {/* <img src="images/goat_small.jpg" alt="goat" /> */}
      </div>
    );
  }
}

export default App;
