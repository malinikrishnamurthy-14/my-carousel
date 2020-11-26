import React from 'react';
import CarousalData from '../data/carousel-data';
import RightArrow from '../images/rightarrow.png';
import LeftArrow from '../images/leftarrow.png';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carouselcontent: [],
            activeindex: 0
        }
    }

    gotoprevious(event, activeindex) {
        if (activeindex === 0) {
            activeindex = this.state.carouselcontent.length - 1;
        } else {
            activeindex--;
        }
        this.setState({ activeindex: activeindex });
    }

    gotonext(event, activeindex) {
        if (activeindex === this.state.carouselcontent.length - 1) {
            activeindex = 0;
        } else {
            activeindex++;
        }
        this.setState({ activeindex: activeindex });
    }
    render() {
        const activeindex = this.state.activeindex;
        if (!this.state.carouselcontent.length) {
            CarousalData.forEach((value) => {
                this.state.carouselcontent.push(
                    <div className="carousel-content-div">
                        <div className="carousel-content-child-div">
                            <img className="carousel-image" src={value.image}></img>
                        </div>
                        <div className="carousel-content-child-div">
                            <p className="content-heading">{value.title}</p>
                            <p className="content-p">{value.content}</p>
                        </div>
                    </div>
                );
            })
        }

        return (
            <>
                <h1 className="heading">Carousel Example</h1>
                <div className="carousel-main-div">
                    <div className="carousel-child-div">
                        <img className="image" width="50px" height="50px" src={LeftArrow} onClick={(event) => this.gotoprevious(event, activeindex)}></img>
                    </div>

                    <div className="carousel-child-div">
                        {this.state.carouselcontent[activeindex]}
                    </div>

                    <div className="carousel-child-div">
                        <img className="image" width="50px" height="50px" src={RightArrow} onClick={(event) => this.gotonext(event, activeindex)}></img>
                    </div>
                </div>


               

            </>
        )
    }
}


export default Carousel;