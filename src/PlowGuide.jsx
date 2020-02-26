import React from 'react';
import cn from 'classnames';
import plow from "./assets/images/Rn100bg.png";

export default class Plowguide extends React.Component {

    state = {
        hoverItem: '',
        hoverLi: '',
    };

    handleOnHover = (e) => {
        const newHoverItem = e.target.dataset.hovered;
        this.setState({hoverItem: newHoverItem});
    }

    handleHoverOff = () => {
        this.setState({hoverItem: ''});
    }

    handleLiHover = (e) => {
        const newHoverLi = e.target.dataset.hovered;
        this.setState({hoverLi: newHoverLi});
    }
    handleHoverLiOff = () => {
        this.setState({hoverLi: ''});
    }

    render() {

        const { hoverItem, hoverLi } = this.state;
        const guideItemClasses = (value) => cn({ "guide__li": true, "guide__item-1": true, animated: true, fadeInUp: true, hovered: hoverItem === value });
        const guideLisClasses = (btn, num) => cn({"adv__btn": true, [`adv__${num}`]: true, animated: true, fadeInUp: true, hovered: hoverLi === btn});
        return(
            <div className="plow__guide container" id="plow__guide">
    <div className="row">
    <ul className="plow__advantages col-12 col-md-6 col-lg-7">
      <li className={guideItemClasses('first')} data-hovered="first" onMouseOver={this.handleLiHover} onMouseOver={this.handleLiHover} onMouseLeave={this.handleHoverLiOff}>Кукурузные предплужники для запашки удобрений и стеблей кукурузы.</li>
      <li className={guideItemClasses('second')} data-hovered="second" onMouseOver={this.handleLiHover} onMouseOver={this.handleLiHover} onMouseLeave={this.handleHoverLiOff}>Kолесо смещенное к центру рамы не мешает при пахоте около заборов, оврагов, кустов.</li>
      <li className={guideItemClasses('third')} data-hovered="third" onMouseOver={this.handleLiHover} onMouseOver={this.handleLiHover} onMouseLeave={this.handleHoverLiOff}>Mежкорпусной интервал 100 см идеален для запахивания большой массы растительных остатков (опционально – 115см).</li>
      <li className={guideItemClasses('fourth')} data-hovered="fourth" onMouseOver={this.handleLiHover} onMouseOver={this.handleLiHover} onMouseLeave={this.handleHoverLiOff}>Bозможна коплектация +1 корпус до максимум 9 корпусов.</li>
      <li className={guideItemClasses('fifth')} data-hovered="fifth" onMouseOver={this.handleLiHover} onMouseOver={this.handleLiHover} onMouseLeave={this.handleHoverLiOff}>Башня навески Кат III или IV, сконструирована для уменьшения радиуса разворота.</li>
    </ul>
      <div className="col-12 col-md-6 col-lg-5 text-right">
        <div className="pic__info">
          <img className="plow__pic animated fadeInUp" src={plow} alt="" />
          <button className={guideLisClasses('first', 1)} id="first" data-hovered="first" onMouseOver={this.handleOnHover} onMouseLeave={this.handleHoverOff}>1</button>
          <button className={guideLisClasses('second', 2)}  data-hovered="second" onMouseOver={this.handleOnHover} onMouseLeave={this.handleHoverOff}>2</button>
          <button className={guideLisClasses('third', 3)} data-hovered="third" onMouseOver={this.handleOnHover} onMouseLeave={this.handleHoverOff}>3</button>
          <button className={guideLisClasses('fourth', 4)}  data-hovered="fourth" onMouseOver={this.handleOnHover} onMouseLeave={this.handleHoverOff}>4</button>
          <button className={guideLisClasses('fifth', 5)} data-hovered="fifth" onMouseOver={this.handleOnHover} onMouseLeave={this.handleHoverOff}>5</button>
      </div>
      </div>
    </div>
  </div>
    );
    }
} 