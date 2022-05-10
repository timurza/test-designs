import React from 'react';
/* import './styledButton.scss'; */




class StyledButton extends React.Component{
    constructor() {
        super();
        this.state = {backgroundColor: '#FFFFFF', };
        this.style = {
            height:'45px',
            width:'63px',
            backgroundColor:'#FFFFFF',
            border: '1px solid #1D1F22',
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
            <button className=''
            style={Object.assign({},this.style, {
                backgroundColor:this.state.backgroundColor,
                color:this.state.color,
                fontWeight:this.state.fontWeight,
              
            })}
            onMouseEnter = {() => {
                this.setState({ backgroundColor: '#1D1F22',
                 color:'#FFFFFF',
                 fontWeight: 600,});
            }}
            onMouseLeave = {() => {
                this.setState({backgroundColor: '#FFFFFF', 
                color:'black',
                fontWeight:'400',})
            }}
            >
             xs
            </button>
        );
    }
}

export default StyledButton;