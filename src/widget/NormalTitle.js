import React, {Component} from 'react';
import LatestBookSlide from './LatestBookSlide';
import LatestReadingSlide from './LatestReadingSlide';
import RandomBookSlide from './RandomBookSlide';
import ForgottenBookSlide from './ForgottenBookSlide';

class NormalTitle extends Component {
  render (){
    return (
      <div className="hidden-xs">
        <div
          id="layerslider"
          style={{width: '100%', height: 405, margin: '0px auto'}}>
          <LatestBookSlide />
          <LatestReadingSlide />
          <RandomBookSlide />
          <ForgottenBookSlide />
        </div>
      </div>
    );
  }
}

export default NormalTitle;
