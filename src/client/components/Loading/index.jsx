import React from 'react';
import { HashLoader } from 'react-spinners';
import 'styles/loading.css';

const Loading = () => (
  <div className="loading">
    <HashLoader color="#61dbfb" />
  </div>
);

export default Loading;
