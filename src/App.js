import React from 'react';
import { connect } from "react-redux";
import SpaceShip from './components/space_ship.js';
import LaserBeam from './components/laser_beam.js';
import AlienLaser from './components/alien_laser.js';
import InvasionArmy from './components/invasion_army.js';
import Modal from './components/modal.js';

const innerHeight = window.innerHeight;
const top = (innerHeight - 710) / 2;

class Application extends React.Component {
    constructor(props) {
    super(props);
    this.keydown = this.keydown.bind(this);
    this.keyup = this.keyup.bind(this);
  }

    keydown ({key}) { this.props.updateStateKeyDown(key); }
    keyup ({key}) { this.props.updateStateKeyUp(key); }

     componentDidMount() {
       window.addEventListener('keydown',this.keydown);
       window.addEventListener('keyup',this.keyup);
     }


  render() {
    return <div style={{
                margin: 'auto',
                marginTop: top,
                width: '1260px',
                height: '710px'
              }}
            >
             <InvasionArmy/>
             <LaserBeam/>
              { new Array(4).fill('').map((laser,i) => {
                    return <AlienLaser id = {i} key = {"key"+i} />;
                })
              }
             <SpaceShip/>
             <Modal/>
           </div>;
  }
}

//



const mapApplicationStateToProps = ({ reducer }) => {
 return {

 };
};

const mapApplicationDispatchToProps = (dispatch) => ({
    updateStateKeyDown: key => dispatch({ type:'KEY_DOWN', key }),
    updateStateKeyUp: key => dispatch({ type:'KEY_UP', key })
});

export default connect( mapApplicationStateToProps, mapApplicationDispatchToProps )( Application );




////////////////////////////////////////////////////////////////////////////////
