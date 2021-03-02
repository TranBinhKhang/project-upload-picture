
import axios from 'axios';
 
import React,{Component, useState} from 'react';
import { PickerOverlay } from 'filestack-react';
 
class UploadApp extends Component {

  constructor(props) {
    super(props);
    this.state = {info: null}
    this.handleClick = this.handleClick.bind(this);
  }
  
    state = {
      receivedLink: []
    };
    

    handleClick() {
      console.log(this.state.info);
    }
    

    
    
    onFileUpload = () => {
      
      const formData = new FormData();
      formData.append(
      "myFile",
      this.state.receivedLink
    );
    console.log(this.state.receivedLink);

      axios.post("http://localhost:4000/upload", formData);
    };

    render() {
    
      return (
        <div>

          <PickerOverlay
          apikey={'AxjXbdiCNTkuFSyNvFyHKz'}
          onSuccess={ (res) => {
            console.log(res);
            const info = res;
            console.log(info)
            this.setState({ info });
          }}
          />  

          <button onclick={() => console.log(this.handleClick)}>
              Activate Lasers
          </button>
        </div>
      );
    }
  }
 
  export default UploadApp;