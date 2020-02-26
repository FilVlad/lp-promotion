import React from 'react';
import albionWhite from './assets/images/Albion_white.png';

export default class Footer extends React.Component {
    render() {
        return (
        <footer className="footer container-fluid">
          <div className="row pt-2">
             <div className="col-4 p-0"><img className="footer__logo" src={albionWhite} /></div>
             <div className="col-5 mt-5 text-center">All rights reserved Albion LLC 2019</div>
             <div className="col-3 mt-5 text-right">Powered by Filatov</div>
          </div>
        </footer>
        );
    }
}