import React from 'react';
import Dropzone from 'react-dropzone';

export default class Document extends React.Component {
    constructor(props) {
        super(props)

        this.state = {loaded: false, files: []}
    }

    onDrop(files) {
      console.log(files[0]);
      this.setState({loaded: true, files: files[0]});
    }

    setup() {
      if (this.state.loaded === false) {
        return (
          <Dropzone
            className="App-file-upload"
            multiple={false}
            accept="image/*"
            onDrop={this.onDrop.bind(this)}
            >
          <p>Drop an image or click to select a file to upload.</p>
          </Dropzone>
        );
      } else {
        return (
          <div>
            <img
              className="App-uploaded-img"
              alt={'Upload Failed'}
              src={this.state.files.preview}
            />
            <p>{this.state.files.name}</p>
          </div>
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
