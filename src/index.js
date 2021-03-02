import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './base64test';
import reportWebVitals from './reportWebVitals';
import UploadApp from './uploadfile';
import Upload from './upload';
import Filestack from './Filestack';
ReactDOM.render(
  <React.StrictMode>
    <Filestack />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
