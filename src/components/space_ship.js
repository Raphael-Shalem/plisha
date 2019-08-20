import React from 'react';
import { connect } from "react-redux";

class SpaceShip extends React.Component {
  constructor(props) {
    super(props);
  }

 componentDidUpdate(nextProps) {
   if(nextProps.spaceship_destroyed === this.props.spaceship_destroyed) { return; }
   const boom_ = ()=>{
    const center = { x:0, y:0, opacity:1 };
      for(let i = 0; i < 25; i++){
        let rand_x = Math.floor(Math.random() * 400) - 200;
        let rand_y = Math.floor(Math.random() * 350) - 200;
        let sqr_ = {x:rand_x, y:rand_y, opacity:0 };
  //fix      TweenMax.fromTo("#sqr" + i + "_", 1, center, sqr_);
      }
    }
    boom_();
 }


  render() {
    const { spaceship_destroyed } = this.props;
    const transform = { transform:`translate3d(${this.props.spaceship_location_x}px,0,0)` };
    const fills = [ "#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff",
                    "#f00","#f00","#f00","#f00","#f00","#f00","#f00","#f00",
                    "#f11","#f22","#f33","#f44","#f55","#f66","#f77","#f88"
                  ];


    return (
      <div  className = 'spaceship' style={ transform } >
         { !spaceship_destroyed &&
         <div>
           <svg xmlns="http://www.w3.org/2000/svg">
              <g>
                <path className="blaze1" d="M12.5,82.5l1.5-8.8l1.5,8.7c0,0,1.7,14-1.5,38.5C14,120.9,11.7,98.8,12.5,82.5z"/>
                <path className="blaze1" d="M62.1,82.5l1.5-8.8l1.5,8.7c0,0,1.7,14-1.5,38.5C63.5,120.9,61.3,98.8,62.1,82.5z"/>
                <path className="blaze2" d="M13.2,78.6l0.8-5l0.8,4.9c0,0,1,7.9-0.8,21.8C14.1,100.4,12.8,87.9,13.2,78.6z"/>
                <path className="blaze2" d="M62.8,78.6l0.8-5l0.8,4.9c0,0,1,7.9-0.8,21.8C63.6,100.4,62.3,87.9,62.8,78.6z"/>
              </g>
           </svg>
           <img
             src="https://i.pinimg.com/originals/83/31/71/833171037dc8f8a6d1f95209e4ade5fa.png"
             width="77px"
             className="spaceship_img"
           />
         </div>
       }
       { spaceship_destroyed &&
         <svg className="explosion" xmlns="http://www.w3.org/2000/svg">
           <g>
             { fills.map((fill, ind) =>
               <rect
                  key={`sqr${ind}_`} id={`sqr${ind}_`} x="200" y="200" fill={ fills[ind] } opacity="0"
                  width={ (Math.floor(ind/10))+4 }
                  height={ (Math.floor(ind/10))+4 }
                />
               )}
            </g>
          </svg>
        }
      </div>
    );
  }
}

const mapSpaceShipStateToProps = (reducer) => {
  return {
  interval: reducer.interval,
  spaceship_location_x: reducer.spaceship_location_x,
  spaceship_destroyed: reducer.spaceship_destroyed
  }
};


const mapSpaceShipDispatchToProps = (dispatch) => ({});


export default connect( mapSpaceShipStateToProps, mapSpaceShipDispatchToProps )( SpaceShip );
