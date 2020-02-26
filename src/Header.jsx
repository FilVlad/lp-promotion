import React from 'react';
import Logo from './assets/images/kverneland.png';
import cn from 'classnames';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

export default class Header extends React.Component {
 
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  renderOnlandSlide() {
      const { modeToggle, modalToggle } = this.props;
    return (
      <div className="main-onland p-3 text-right text-white">
      <div className="wrapper"></div>
      <div className="row px-4">
        <div className="offset-sm-3 offset-md-6"></div>
        <div className="col-12 col-sm-9 col-md-6 mt-3 mt-md-5">
          <h1 className="display-4">KVERNELAND RN100 Onland</h1>
          <p className="lead">Универсальный оборотный плуг для пахоты в борозде и вне борозды</p>
          <button type="button" className="btn btn-danger btn-lg" onClick={modalToggle('fillingForm')}>Получить просчет</button>
        </div>
      </div>
      <div className="row">
        <div className="plow__switcher" onClick={ modeToggle('rn100') }>
          <span>RN100→</span>
        </div>
      </div>
      <svg className="arrow__bottom" xmlSpace="preserve" xmlnsXlink="http://www.w3.org/1999/xlink"
        enable-background="new 0 0 56.999 32" height="32px" id="Ebene_1" version="1.1" viewBox="0 0 56.999 32"
        width="56.999px" x="0px" xmlns="http://www.w3.org/2000/svg" y="0px">
        <polygon className="selection__arrow-svg--red" fill="#fff"
          points="0,0.231 0,7.032 28.367,32 56.999,6.801 56.999,0 28.367,23.155 " onClick={() => this.scrollTo()}></polygon>
      </svg>
    </div>
      );
    }

    renderRn100Slide() {
      const { modeToggle, modalToggle } = this.props;
      return (
      <div className="main p-3 text-right text-white">
      <div className="wrapper"></div>
      <div className="row px-4">
        <div className="offset-sm-3 offset-md-6"></div>
        <div className="col-12 col-sm-9 col-md-6 mt-3 mt-md-5">
          <h1 className="display-4">KVERNELAND RN100</h1>
          <p className="lead">Полунавесной высокопрочный оборотный плуг родом из Норвегии</p>
          <button type="button" className="btn btn-danger btn-lg" onClick={modalToggle('fillingForm')}>Получить просчет</button>
        </div>
      </div>
      <div className="row">
        <div className="plow__switcher" onClick={modeToggle('onland')}>
          <span>Onland→</span>
        </div>
      </div>
      <svg className="arrow__bottom" xmlSpace="preserve" xmlnsXlink="http://www.w3.org/1999/xlink"
        enable-background="new 0 0 56.999 32" height="32px" id="Ebene_1" version="1.1" viewBox="0 0 56.999 32"
        width="56.999px" x="0px" xmlns="http://www.w3.org/2000/svg" y="0px" onClick={() => this.scrollTo()}>
        <polygon className="selection__arrow-svg--red" fill="#fff"
          points="0,0.231 0,7.032 28.367,32 56.999,6.801 56.999,0 28.367,23.155 "></polygon>
      </svg>
    </div>
      );
    }

    render() {
      const { mode, modeToggle } = this.props;
      const classRn100 = cn({
        header__option: true,
        plow: true,
        active: mode === 'rn100',
        'p-2': true,
      });

      const classOnland = cn({
        header__option: true,
        plow: true,
        active: mode === 'onland',
        'p-2': true,
      });
      
        return(
        <div className="header__container container-fluid p-0 mb-0">
          <header className="header">
          <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom shadow-sm">
          <img src={Logo} alt="" class="my-0 mr-md-auto" />
          <nav className="my-2 my-md-0 mr-md-3">
          <span className={classRn100} onClick={ modeToggle('rn100') }>Kverneland RN100</span>
          <span className={classOnland} onClick={ modeToggle('onland') }>Kverneland RN100 Onland</span>
          <span className="header__option phone p-2">Звоните: +38(067)5648740</span>
          </nav>
          </div>
         </header>
          {mode === 'rn100' ? this.renderRn100Slide() : this.renderOnlandSlide()}
        </div>
        );
    }
}