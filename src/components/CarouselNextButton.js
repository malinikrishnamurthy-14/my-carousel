import React from 'react';

class CarouselNextButton extends React.Component {

    constructor(props){
        super(props);
    }

    onClick(){

    }

    render() {
      return (
        <a
          href="#"
          onClick={this.props.onClick}
        > Next
        </a>
      );
    }
  }


  export default CarouselNextButton;