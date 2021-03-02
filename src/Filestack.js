import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { PickerOverlay } from 'filestack-react';
 
import FileBase64 from 'react-file-base64';

 
 
class Filestack extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Files: [],
      Link: null,
      filestackSelected: false,
      showDownloadLink: false
    }
  }
 
  // Callback~
  async getFiles(files){
    const handleObj = {
      name: this.state.Files.filesUploaded[0].filename,
      downloadLink: 'https://process.filestackapi.com/zip/' + this.state.Files.filesUploaded[0].handle
    }
    console.log(handleObj.downloadLink);
    this.setState({Link: handleObj.downloadLink});
    console.log(this.state.Link);
    const stuff = await axios.post('http://localhost:4000/upload', handleObj);
  }

  async getUpload(){
    if (!this.state.filestackSelected) this.setState({filestackSelected: true});
    if (this.state.filestackSelected) 
    {this.setState({filestackSelected: false});
    setTimeout(() => {
      this.setState({filestackSelected: true})
  }, 10);;
  }
  console.log(this.state.filestackSelected)
  }

  async downloadFiles(files){
    if (!this.state.showDownloadLink) this.setState({showDownloadLink: true});
    if (this.state.showDownloadLink) 
    {this.setState({showDownloadLink: false});
    setTimeout(() => {
      this.setState({showDownloadLink: true})
  }, 10);;
  }


  //  const stuff = await axios.get(`https://cdn.filestackcontent.com/cache=false/` + this.state.Files.filesUploaded[0].handle);

  }
  
  
  render() {
    return (
      <div>
      {this.state.filestackSelected && (<PickerOverlay
          apikey={'AxjXbdiCNTkuFSyNvFyHKz'}
          onSuccess={ (res) => {
            console.log(res);
            const newinfo = res;
            console.log(newinfo)
            this.setState({ Files: newinfo });
          }}
        /> ) }

      <button onClick={this.getUpload.bind(this)}>Upload</button>
      <button onClick={this.getFiles.bind(this)}>Save info to database</button>
      <button onClick={this.downloadFiles.bind(this)}>Download</button>
      {this.state.showDownloadLink && <a href={this.state.Link}>{this.state.Link}</a>}
      </div>
    )
  }
 
}
 
 
export default Filestack;
