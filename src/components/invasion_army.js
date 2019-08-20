import React from 'react';
import { connect } from "react-redux";


class Invasion_Army extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidUpdate(nextProps) {
   if(nextProps.dead_alien === this.props.dead_alien) { return; }
    const boom = ()=>{
    const center = { x:0, y:0, opacity:1 };
      for(let i = 0; i < 25; i++){
        let rand_x = Math.floor(Math.random() * 400) - 200;
        let rand_y = Math.floor(Math.random() * 400) - 200;
        let exp = { x:rand_x, y:rand_y, opacity:0 };
    //fix    TweenMax.fromTo("#sqr"+i, 1, center, exp);
      }
    }
   boom();
 }


  render() {
    const new_army_x = this.props.army_position_x + 616;
    const new_army_y = this.props.army_position_y + 552;
    const move_army = { transform:`translate3d(${new_army_x}px,${new_army_y}px,0)` };
    const alive = { overflow:"hidden" };
    const dead =  { overflow:"visible" };
    const { dead_alien } = this.props;
    const fills = [ "#9fa","#3bf","#aff","#eee","#9fa","#9f9","#ae7","#eee","#aff",
                    "#9f9","#9fa","#ae7","#aff","#9f9","#9fa","#ae7","#eff",
                    "#3bf","#9fa","#ae7","#eff","#fff","#fff","#fff","#efe"
                  ];

    return (
      <div className="Invasion_Army">
        <div className="wrapper" style={ move_army }>
           { this.props.alien_army.map((health, index) =>
            <div className="alien_div" key={`alien_div_${index}`} style={health?alive:dead} >
              { health &&
               <img src ="https://i.pinimg.com/originals/07/78/57/077857e58473a43f07f0626819f3bdba.png"
                      width="100%"
                      className="alien_sprite"
                /> ||
              !health &&
                index === dead_alien &&
                  <svg className="explosion" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      { fills.map((fill, ind) =>
                        <rect
                          key={`sqr${ind}`} id={`sqr${ind}`} x="200" y="200" fill={ fills[ind] } opacity="0"
                          width={ (Math.floor(ind/10))+4 }
                          height={ (Math.floor(ind/10))+4 }
                        />
                      )}
                    </g>
                  </svg>
              }
            </div>
            )}
        </div>
       </div>
    );
  }
}



const mapInvasionArmyStateToProps = (reducer) => { 
  return {
  alien_army:reducer.alien_army,
  army_position_x:reducer.army_position_x,
  army_position_y:reducer.army_position_y,
  dead_alien:reducer.dead_alien
  }
};

export default connect( mapInvasionArmyStateToProps )( Invasion_Army );
