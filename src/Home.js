import React, { Component } from 'react';

import TopNav from './layout/TopNav';
import Slider from './layout/Slider';
import MetaData from './MetaData';
import Summary from './layout/Summary';
import Today from './widget/Today';
import RecentBlogs from './widget/RecentBlogs';
import RandomBooks from './widget/RandomBooks.js';
import Footer from './layout/Footer.js';

class Home extends Component {
  render() {
    return (
      <div>
        <MetaData description='主页' />
        <TopNav active="0"/>
	    <Slider />
        <Summary />
        <Today />
        <RecentBlogs />
        <RandomBooks />
        <Footer />
      </div>


    );
  }
}

export default Home;
