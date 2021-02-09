import React from 'react';
import ReactDOM from 'react-dom';
 
import FileBase64 from 'react-file-base64';
 
class App extends React.Component {
 
  constructor() {
    super()
    this.state = {
      files: []
    }
  }
 
  // Callback~
  getFiles(files){
    this.setState({ files: files });
    console.log(files);
  }
 
  render() {
    return (
      <div>
      <FileBase64
        multiple={ true }
        onDone={ this.getFiles.bind(this) } />
       { this.state.files.map((file,i) => {
            return <img key={i} src={file.base64} />
          }) }
      
      </div>
    )
  }
 
}
 
 
export default App;
