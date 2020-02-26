import React from 'react';
import Header from './Header.jsx';
import InfoGroup from './InfoGroup.jsx';
import PlowGuide from './PlowGuide';
import TechData from './TechData';
import Feedback from './Feedback';
import Footer from './Footer';
import Modal from './Modal';
export default class App extends React.Component {
    
    static defaultProps = {
        mode: 'rn100',
        modal: 'disabled',
    };

    constructor(props) {
        super(props);
        this.state = { mode: this.props.mode, modal: this.props.modal };
    }

    handleModeToggle = (value) => (e) => {
        e.preventDefault();
        this.setState({ mode: value });
    }
  
    handleModalOpen = (value) => () => {
        this.setState({modal: value});
    }

    handleCloseModal = (value) => (e) => {
        e.preventDefault();
        this.setState({modal: value});
    }

    render() {
        return (
        <React.Fragment>
        <Header mode={this.state.mode} modeToggle={this.handleModeToggle} modalToggle={this.handleModalOpen} />
        <Modal stage={this.state.modal} closeModal={this.handleCloseModal}/>
        <InfoGroup mode={this.state.mode}/>
        <PlowGuide />
        <TechData mode={this.state.mode}/>
        <Feedback />
        <Footer />
        </React.Fragment>
        );
    }
}