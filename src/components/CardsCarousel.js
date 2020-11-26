import React from 'react';
import CarousalData from '../data/carousel-data';
import RightArrow from '../images/rightarrow.png';
import LeftArrow from '../images/leftarrow.png';

class CardsCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carouselcontent: [],
            activeindex: 0
        }
    }

    gotoprevious(event, activeindex) {
        if (activeindex === 0) {
            activeindex = 3;
        } else {
            activeindex = activeindex-1;
        }
        this.setState({ activeindex: activeindex });
    }

    gotonext(event, activeindex) {
        if (activeindex === 3) {
            activeindex = 0;
        } else {
            activeindex = activeindex+1;
        }
        this.setState({ activeindex: activeindex });
    }
    render() {
        const activeindex = this.state.activeindex;
        if (!this.state.carouselcontent.length) {
            CarousalData.forEach((value) => {
                this.state.carouselcontent.push(
                    <div className="cards">        
                        <div className="cards-heading">{value.title} </div>        
                        <img class="cardscarousel-image" src={value.image}></img>
                        <p className="cards-content-1"> {value.content.substring(0, 100)}....</p>
                    </div>
                );
            })
        }

        return (
            <>
                <div className="cardscarousel-main-div">
                    <div className="cardscarousel-image-div">
                        <div>
                            <img className="cardscarousel-image-child-div" width="50px" height="50px" src={LeftArrow} onClick={(event) => this.gotoprevious(event, activeindex)}></img>
                        </div>
                        <div>
                            <img className="cardscarousel-image-child-div" width="50px" height="50px" src={RightArrow} onClick={(event) => this.gotonext(event, activeindex)}></img>
                        </div>
                    </div>
                  

                    <div className="cardscarousel-content">
                        {this.state.carouselcontent[activeindex]}
                        {this.state.carouselcontent[activeindex + 1]}
                        {this.state.carouselcontent[activeindex + 2]}
                        {this.state.carouselcontent[activeindex + 3]}
                    </div>

                   
                </div>


               

            </>
        )
    }
}


export default CardsCarousel;