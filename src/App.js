import React from 'react';
import './App.css';
import NewFeed from './pages/newfeed/newfeed.page';
import Header from './components/header/header.component';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isMobile: false };
  }

  render() {
  return (
    <div className="wrapper">
      <Header/>
      <NewFeed/>
    </div>
  )}
}

export default App;
