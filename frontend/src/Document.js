import React from 'react';
import Dropzone from 'react-dropzone';
//import './leaflet-image.js';
import {Map, ImageOverlay} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// function getBounds()

export default class Document extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
          loaded: false,
          files: [],
          zoom: 1,
        };
    }

    onDrop(files) {
      console.log(files[0]);
      this.setState({loaded: true, files: files[0]});
    }

    setup() {
      if (this.state.loaded === false) {
        return (
          <Dropzone
            className="file-upload"
            multiple={false}
            accept="image/*"
            onDrop={this.onDrop.bind(this)}
            >
          <p>Drop an image or click to select a file to upload.</p>
          </Dropzone>
        );
      } else {
        const bounds = [[0, 0], [200, 600]];
        return (
          <Map className="uploaded-img" crs={L.CRS.Simple} bounds={bounds} >
            <ImageOverlay
              url={this.state.files.preview} bounds={bounds}
            />
          </Map>
        );
      }
    }

    render() {
      return (
        <div>
        {this.setup()}
        </div>
    );
  }
}

// <Map className='image-map'
//   minZoom={1}
//   maxZoom={4}
//   center={[0,0]}
//   zoom={1}
//   crs={L.CRS.Simple}
// >
//   <imageOverlay
//     src={this.state.files.preview}
//
//   />
// </Map>

// <img
//   className="uploaded-img"
//   alt={'Upload Failed'}
//   src={this.state.files.preview}
// />
// <p>{this.state.files.name}</p>
