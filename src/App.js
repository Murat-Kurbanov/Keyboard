import React, { Component} from 'react';
import Keyboard from "./containers/Kyeboard/Keyboard";

class App extends Component {
  render() {
    return (
        <div className='App'>
            <Keyboard/>
        </div>
    );
  }
}

export default App;