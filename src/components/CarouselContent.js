import React from 'react';
import CarousalData from '../data/carousel-data';


class CarouselContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselcontent: [],
      activeindex: props.index
    }
  }

  onClick() {

  }

  render() {
    CarousalData.forEach((value) => {
      this.state.carouselcontent.push(<div>

        <h1>{value.index} - {value.title}</h1>
        <p>{value.content}</p>
        <div>
          <p>{value.author}</p>
          <span>{value.source}</span>
        </div>
      </div>);    
    })

    return (
      <>
       {this.state.carouselcontent[this.state.activeindex]}
      </>
    );
  }
}


export default CarouselContent;