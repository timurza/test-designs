import React from 'react';
import './StyledButton.scss';
/* import '../header/header.scss'; */



class StyledButton extends React.Component{
    constructor() {
        super();
        this.state = {borderBottom: 'none', };
        this.style = {
            /* height:'56px', */
            backgroundColor:'#FFFFFF',
            border: 'none',
            fontSize: 16,
            fontFamily: 'Raleway , sansSerif',
            fontWeight: '400',    
            textTransform:'uppercase',
            color:'#1D1F22',
            transition:0.3, // не работает          
            
        };
    }
    render(){
        return (
            <button
            style={Object.assign({},this.style, {
                borderBottom:this.state.borderBottom,
                color:this.state.color,
                fontWeight:this.state.fontWeight,
              
            })}
            onMouseEnter = {() => {
                this.setState({ borderBottom: 'solid 2px #5ECE7B',
                 color:'#5ECE7B',
                 fontWeight: 600,});
            }}
            onMouseLeave = {() => {
                this.setState({borderBottom: 'none', color:'black',fontWeight:'400',})
            }}
            >
             aliens
            </button>
        );
    }
}

export default StyledButton;