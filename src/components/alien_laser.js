import React from 'react';
import { connect } from "react-redux";

class Alien_Laser extends React.Component {
  /*constructor(props) {
    super(props);
  };*/
///
  render() {
    const laser_style = [
      { opacity: this.props.obj0.opacity, transform:`translate3d(${this.props.obj0.pos.x}px,${this.props.obj0.pos.y}px,0)` },
      { opacity: this.props.obj1.opacity, transform:`translate3d(${this.props.obj1.pos.x}px,${this.props.obj1.pos.y}px,0)` },
      { opacity: this.props.obj2.opacity, transform:`translate3d(${this.props.obj2.pos.x}px,${this.props.obj2.pos.y}px,0)` },
      { opacity: this.props.obj3.opacity, transform:`translate3d(${this.props.obj3.pos.x}px,${this.props.obj3.pos.y}px,0)` }
    ];

    return (
        <div className="alien_laser" style={ laser_style[this.props.id.id] }></div>
    );
  }
}

const mapAlienLaserStateToProps = (reducer,id) => {
  return {
    id,
    obj0: reducer.obj0,
    obj1: reducer.obj1,
    obj2: reducer.obj2,
    obj3: reducer.obj3
  }
};


export default connect( mapAlienLaserStateToProps )( Alien_Laser );
