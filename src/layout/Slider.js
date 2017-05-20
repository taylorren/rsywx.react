import React, {Component} from 'react';
import SpecialTitle from '../widget/SpecialTitle';
import NormalTitle from '../widget/NormalTitle';

class Slider extends Component {
  render() {
    return (
      <div>
        <NormalTitle />
        <SpecialTitle />
      </div>
    );
  }
}

export default Slider;
