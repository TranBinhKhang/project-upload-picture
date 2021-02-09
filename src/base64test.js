import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
 
import FileBase64 from 'react-file-base64';

 
 
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Files: []
    }
  }
 
  // Callback~
  async getFiles(files){
    this.setState({ Files: files });
    console.log(this.state.Files[0].base64);
     
    const imageObj = {
      imageName: "base-image-" + Date.now(),
      imageData: this.state.Files[0].base64.toString()
    };

    console.log(imageObj)
    const stuff = await axios.post('http://localhost:4000/api/images', imageObj);
    console.log(stuff);

  }
  
  render() {
    return (
      <div>
      <FileBase64
        multiple={ true }
        onDone={ this.getFiles.bind(this) } />
       { this.state.Files.map((file,i) => {
            return <img key={i} src={file.base64} />
          }) }
          { console.log(this.state.Files)}
      
      </div>
    )
  }
 
}
 
 
export default App;
