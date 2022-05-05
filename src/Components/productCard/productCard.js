import React from 'react';
import fetchData from '../../data';
import './productCard.scss';



export default class ProductCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount(){
        fetchData()
        //.then(res => /* console.log(res) */res.json())
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
                <div className='productCard'>
                    <div className='productCard__content'>
                    <div className='productCard__desktop'>
                   
                   <img className='productCard__image' src = {items.categories[0].products[0].gallery[0]} alt = 'Nike Air Huarache Le'></img>
                   
                <div className='productCard__elements'>
                <div className='productCard__elements-title' >Nike Air Huarache Le</div>
                <div className='productCard__elements-price'>$144.69</div>
                </div>
             </div>

             < div className='productCard__desktop'>
                <img className='productCard__image' src = {items.categories[0].products[1].gallery[5]} alt = 'Jacket'></img>
                
                <div className='productCard__elements'>
                <div className='productCard__elements-title' >Jacket</div>
                <div className='productCard__elements-price'>$518.47</div>
                </div>
             </div>

             <div className='productCard__desktop'>
                <img className='productCard__image' src = {items.categories[0].products[2].gallery[0]} alt = 'PlayStation 5'></img>
                <div className='productCard__elements'>
                <div className='productCard__elements-title' >PlayStation 5</div>
                <div className='productCard__elements-price'>$844.02</div>
                </div>
             </div>

                
                <div className='productCard__desktop'>
                <img className='productCard__image' src = {items.categories[0].products[3].gallery[0]} alt = 'xbox'></img>
                <div className='productCard__elements'>
                <div className='productCard__elements-title'>Xbox Series S 512GB</div>
                <div className='productCard__elements-price'>$50.00</div>
                </div>
             </div>

             <div className='productCard__desktop'>
                <img className='productCard__image' src = {items.categories[0].products[4].gallery[0]} alt = 'iMac 2021'></img>
                <div className='productCard__elements'>
                <div className='productCard__elements-title'>iMac 2021</div>
                <div className='productCard__elements-price'>$1688.03</div>
                </div>
             </div>

             <div className='productCard__desktop'>
                <img className='productCard__image' src = {items.categories[0].products[5].gallery[0]} alt = 'iPhone 12 Pro'></img>
                <div className='productCard__elements'>
                <div className='productCard__elements-title'>iPhone 12 Pro</div>
                <div className='productCard__elements-price'>$1000.76</div>
                </div>
             </div>

             <div className='productCard__desktop'>
                <img className='productCard__image' src = {items.categories[0].products[6].gallery[0]} alt = 'AirPods Pro'></img>
                <div className='productCard__elements'>
                <div className='productCard__elements-title'>AirPods Pro</div>
                <div className='productCard__elements-price'>$300.23</div>
                </div>
             </div>

             <div className='productCard__desktop'>
                <img className='productCard__image' src = {items.categories[0].products[7].gallery[0]} alt = 'AirTag'></img>
                <div className='productCard__elements'>
                <div className='productCard__elements-title'>AirTag</div>
                <div className='productCard__elements-price'>$120.57</div>
                </div>
             </div>


                    </div>
                    
                        
                    
                </div>
            )
        }
    }
}