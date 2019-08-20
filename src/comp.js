import React from 'react';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";
import ReactDOM from "React-dom";
/*

const store=createStore( combineReducers({ reducer,
                                         other_reducer
                                        }),
                                        {},
                                        applyMiddleware());

store.subscribe(() => {
});

*/
////////////////////////////////////////////////////////////////////////////////

////////////////////COMPONENTS////////////////////////////////////////////////////////////

////////////////////ALIEN LASER ////////////////////////////////////////////////////////////



///////////////////////////////////SPACESHIP////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////INVASION_ARMY////////////////////////////////////////////////




////////////////////////////Modal////////////////////////////////////////////////////



////////////////////////////Application////////////////////////////////////////////////////


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
    return <Provider store={ store }>
             <Connected_Invasion_Army/>
             <ConnectedLaser_Beam/>
              { new Array(4).fill('').map((laser,i) => {
                    return <Connected_Alien_Laser_Beam id = {i} key = {"key"+i} />;
                })
              }
             <ConnectedSpaceShip />
             <ConnectedModal/>
           </Provider>;
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

const ConnectedApplication = connect( mapApplicationStateToProps, mapApplicationDispatchToProps )( Application );




////////////////////////////////////////////////////////////////////////////////


React.render(

    <ConnectedApplication />
  ,
//  document.getElementById('app')
);

export default ConnectedApplication
