import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import GalleryList from "../GalleryList/GalleryList";

class App extends Component {
  state = {
    galleryData: [],
  };
  componentDidMount() {
    console.log("Component App Did Mount");
    this.getGallery();
  }

  //
  // API SERVER CALLS
  // -------------------

  getGallery() {
    axios({
      method: "GET",
      url: "/gallery",
    })
      .then((response) => {
        console.log("Server Response: ", response.data);
        this.setState({
          galleryData: [...response.data],
        });
      })
      .catch((error) => {
        console.log("GET ERROR: ", error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>
        <GalleryList galleryData={this.state.galleryData} />
        {/* <img src="images/goat_small.jpg" alt="goat" /> */}
      </div>
    );
  }
}

export default App;
