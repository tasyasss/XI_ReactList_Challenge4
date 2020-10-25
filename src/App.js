// src/App.js
import React from 'react';
import Main from './Components/Main';

import {Link} from 'react-router-dom';

class App extends React.Component {
  render(){
    return(
      <div align="center"> <hr />
        <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top" align="right">
          <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#menu">
            <span class="navbar navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menu">
			      <ul className="navbar-nav" align="center">
              <li className="nav-item"><a href="List" className="nav-link">List</a></li>
			      </ul>
      		</div>
        </nav> <hr />
        <p><Main /></p>
      </div>
    );
  }
}
export default App;
