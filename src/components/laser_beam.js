import React from 'react';
import { connect } from "react-redux";

class Laser_Beam extends React.Component {
  constructor(props) {
    super(props);
    this.state = { laser_location_y: props.laser_location_y,
                   laser_location_x: props.spaceship_location_x,
                   shoot_laser: props.shoot_laser
                  }
  };

 componentDidUpdate(nextProps) {
   const { shoot_laser } = this.props;
   const laser_x = shoot_laser?this.props.spaceship_location_x:this.state.laser_location_x;
   if(nextProps.shoot_laser === this.props.shoot_laser) { return; }
   this.props.updateLaserX(laser_x);
   this.setState ({ laser_location_x:laser_x , shoot_laser });
 }

  render() {
    const { laser_opacity } = this.props;
    let laser_x_state = 617 + this.state.laser_location_x;
    let laser_x_props = 617 + this.props.spaceship_location_x;
    let laser_y = (this.props.laser_location_y);
    let transform_laser_not_shot = { opacity:0,
                                    transform:`translate3d(${laser_x_props}px,0,0)`
                                   };
    let transform_laser_shot = { opacity:laser_opacity,
                                 transform:`translate3d(${laser_x_state}px,${laser_y}px,0)`
                               };

    return (
        <div ref="laser" className="laser_beam" style={ this.props.shoot_laser?transform_laser_shot:transform_laser_not_shot }>
        </div>
    );
  }
}

const mapLaserBeamStateToProps = (reducer) => {
  return {
  laser_location_y: reducer.laser_location_y,
  spaceship_location_x: reducer.spaceship_location_x,
  shoot_laser: reducer.shoot_laser,
  laser_opacity: reducer.laser_opacity
  }
};

const mapLaserBeamDispatchToProps = (dispatch) => ({
    updateLaserX: laser_x => {
      return dispatch({ type:'UPDATE_LASER_X', laser_x })
    }
});

export default connect( mapLaserBeamStateToProps,mapLaserBeamDispatchToProps )( Laser_Beam );
