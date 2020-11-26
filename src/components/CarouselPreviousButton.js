import React from 'react';

class CarouselPreviousButton extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
      return (
        <a
          href="#"
          onClick={this.props.onClick}
        > Previous
        </a>
      );
    }
  }


  export default CarouselPreviousButton;