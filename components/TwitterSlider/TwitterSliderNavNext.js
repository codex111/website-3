import React from 'react';

export default class TwitterSliderNavNext extends React.Component {
  render() {
    return (
      <span {...this.props}>
        <img
          src={require('./images/right.svg')}
          alt="next slide"
        />
      </span>
    );
  };
};
