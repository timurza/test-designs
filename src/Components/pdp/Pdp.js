import React from 'react';
import fetchData from '../../data';
import StyledButton from '../buttons/StyledButton';
import '../buttons/buttons.scss';
import './pdp.scss';


export default class Pdp extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            error: null,
            isloaded: false,
            items: []
        };
    }


componentDidMount(){
    fetchData()
    .then(
        (result) => {
            this.setState({
                isLoaded: true,
                items: result.data
            });
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        }

    )
}
render() {
    const {error, isLoaded, items} = this.state;
    if (error) {
        return <p>Error {error.message}</p>
    } else if (!isLoaded) {
        return <p> Loading...</p>
    } else {
        return (

            <div className='pdp'>
                <div className='pdp-sidebar__left'>
                   
                    <img className='pdp-sidebar__left_image' src = {items.categories[0].products[0].gallery[1]} alt = 'Nike Air Huarache Le'></img>
                    <img className='pdp-sidebar__left_image' src = {items.categories[0].products[0].gallery[2]} alt = 'Nike Air Huarache Le'></img>
                    <img className='pdp-sidebar__left_image' src = {items.categories[0].products[0].gallery[3]} alt = 'Nike Air Huarache Le'></img>
                    
                </div>
                <div className='pdp-group'>
                    <div className='pdp-group__section'>
                        <img className='pdp-group__image' width={610} src = {items.categories[0].products[0].gallery[0]} alt = 'Nike Air Huarache Le'></img>
                    </div>
                    <div className='pdp-sidebar__right'>
                       
                        <h3 className='pdp-sidebar__rightTitle'>{items.categories[0].products[0].name}</h3>
                       
                        <h4 className='size'>size:</h4>
                        <div className='size-button'>
                       <StyledButton/>
                       <StyledButton/>
                       <StyledButton/>
                       <StyledButton/>
                                                     
                        </div>
                        <h4 className='price'>price:</h4>

                        <div className='price__element'>${items.categories[0].products[0].prices[0].amount}</div>
                        <button className='pdp-sidebar__button'>add to cart</button>
                        <p className='pdp-description'>Built to fit your foot and designed for comfort,
                             the Nike Air Huarache LE brings back a street-level
                              favourite. Crisp leather on the upper is mixed with
                               super-breathable, perfectly shined neoprene-like
                                fabric for easy styling. The iconic heel clip and
                                 stripped-away branding keep the early-90s look you love.</p>
                    </div>
                </div>
            </div>

        )

        
        }
     }

    }