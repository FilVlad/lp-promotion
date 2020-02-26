import React from 'react';
import cn from 'classnames';
import pero from "./assets/images/korpus_pero.jfif";
import universal from './assets/images/universal_korpus.jfif';
import plastic from './assets/images/korpus_polimer.jfif';

export default class Carousel extends React.Component {
    static defaultProps = {
        slideIndex: 0,
    };

    state = {
        slideIndex: this.props.slideIndex,
    };

    handleSwipeRight = (e) => {
        e.preventDefault();
        const { slideIndex } = this.state;
        const newIndex = slideIndex === 2 ? 0 : slideIndex + 1;
        this.setState({slideIndex: newIndex});
    };

    handleSwipeLeft = (e) => {
        e.preventDefault();
        const { slideIndex } = this.state;
        const newIndex = slideIndex === 0 ? 2 : slideIndex - 1;
        this.setState({slideIndex: newIndex});
    };

    render() {
        const {slideIndex} = this.state;
        const itemClasses = (value) => cn({'carousel-item': true, active: value == slideIndex});
        return (
            <div id="carouselControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className={itemClasses(0)}>
                        <img src={universal} className="ploughshare__img" alt=" " />
                        <h4>Универсальный корпус №9</h4>
                    </div>
                    <div className={itemClasses(1)}>
                        <img src={pero} className="ploughshare__img" alt=" " />
                        <h4>Перьевой корпус №30</h4>
                    </div>
                    <div className={itemClasses(2)}>
                        <img src={plastic} className="ploughshare__img" alt=" " />
                        <h4>Полимерный корпус №14 (для липких почв)</h4>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev" onClick={this.handleSwipeLeft}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next" onClick={this.handleSwipeRight}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}