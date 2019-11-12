import React from 'react';
import { connect } from "react-redux";

class Modal extends React.Component {
  constructor(props) {
        super(props);
        this.setint = this.setint.bind(this);
  }

  setint () {
    let { interval_set } = this.props;
    if(interval_set){ this.props.new_game(); return; }
    setInterval(() => this.props.updateInterval(), 50);
  }

  render() {
    const { spaceship_destroyed, alien_army_destroyed, game_over } = this.props;
    const show_controls = game_over?{ display:"none" }:{ display:"visible" };
    const button_style = game_over?{ top:"50%" }:{ top:"60%" };

    return <div className="modal" style={ this.props.style }>
             <div className="txt_wrapper">
               <div className="txt0">
                { (!game_over && <p>Controls</p>)  ||
                  (alien_army_destroyed && spaceship_destroyed && <p>You sacrificed yourself to save humanity. Thanks.</p>) ||
                  (spaceship_destroyed  && <p>Looks like you got blown up.<br/>Better luck next time.</p>) ||
                  (game_over && !spaceship_destroyed  && <p>You have defeated the aliens and saved the world. Well done.</p>)
                }
               </div>
               <div style={show_controls} ><br/>Move Right<br/>Move Left<br/>Fire</div>
               <div style={show_controls} ><br/>&#8594;<br/>&#8592;<br/>&#8593;</div>
             </div>
            <div className="new_game_button" onClick={ this.setint } style={ button_style } >New Game</div>
          </div>;
  }
}




const mapModalStateToProps = (reducer) => {
 return {
   interval_set : reducer.interval_set,
   spaceship_destroyed : reducer.spaceship_destroyed,
   alien_army_destroyed: reducer.alien_army_destroyed,
   game_over : reducer.game_over,
   style: { opacity: reducer.modal_opacity }
 };
};

const mapModalDispatchToProps = (dispatch) => ({
    updateInterval : () => dispatch({ type:'UPDATE_INTERVAL' }),
    new_game : () => dispatch({ type:'NEW_GAME' })
});

export default connect( mapModalStateToProps, mapModalDispatchToProps )( Modal );
