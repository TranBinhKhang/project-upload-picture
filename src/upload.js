import axios from 'axios';
 
import React, {Component, useState} from 'react';
import { PickerOverlay } from 'filestack-react';

function Upload() {
  const [info, setInfo] = useState({});

  const storeInfo = async () => {

}

  return (
    <div>
        <PickerOverlay
          apikey={'AxjXbdiCNTkuFSyNvFyHKz'}
          onSuccess={ (res) => {
            console.log(res);
            const newinfo = res;
            console.log(newinfo)
            setInfo(res);
            console.log(info);
          }}
        />  

        <button onclick={() => console.log(this.handleClick)}>
              Activate Lasers
        </button>
    </div>
  );
}

export default Upload;