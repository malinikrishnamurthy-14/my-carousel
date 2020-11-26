import React from 'react';
import CarouselPreviousButton from './CarouselPreviousButton';
import CarouselNextButton from './CarouselNextButton';
import CarouselContent from './CarouselContent';



class CarouselContainer extends React.Component {

    constructor(props) {
        super(props);
       
    }

    gotoprevious(CarouselContent, index) {
        console.log("pre");
        this.state.activeindex--;
    }

    gotonext(currentindex) {
        console.log("next");
        this.state.activeindex++;
    }

    render() {
        return (
            <>
                <div className="carousal-div">
                    <div className="carousal-content-div">
                        <CarouselPreviousButton onClick={(event, CarouselContent, index) => this.gotoprevious(event, CarouselContent, index)} />
                    </div>
                    <div className="carousal-content-div">
                        <CarouselContent className="content" index="0"/>
                    </div>
                    <div className="carousal-content-div">
                        <CarouselNextButton onClick={(event) => this.gotonext(event)} />
                    </div>
                </div>
            </>
        )
    }
}


export default CarouselContainer;