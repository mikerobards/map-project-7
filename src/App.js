import React, {	Component } from 'react';
import './App.css';
import Map from "./components/Map"
import foursquareAPI from './api'

class App extends Component {
    componentDidMount() {
      foursquareAPI.search({
        near: "Atlanta, GA",
        query: "pizza",
        limit: 10
      }).then(results => console.log(results))
    }
	render() {
		return (
      <div className = "App">
        <Map />
      </div>
		);
	}
}

export default App;
