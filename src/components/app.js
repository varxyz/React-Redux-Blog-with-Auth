import React, { Component } from 'react';
import Header from './header';
import Layout from './styled/Layout';

class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        {this.props.children}
      </Layout>
    );
  }
}

export default App;
