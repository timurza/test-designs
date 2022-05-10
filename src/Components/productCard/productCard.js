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
                <div className='productCard__elements-title' >{items.categories[0].products[0].name}</div>
                <div className='productCard__elements-price'>${items.categories[0].products[0].prices[0].amount}</div>
                </div>
             </div>

             < div className='productCard__desktop'>
                <img className='productCard__image' src = {items.categories[0].products[1].gallery[5]} alt = 'Jacket'></img>
                
                <div className='productCard__elements'>
                <div className='productCard__elements-title' >{items.categories[0].products[1].name}</div>
                <div className='productCard__elements-price'>${items.categories[0].products[1].prices[0].amount}</div>
                </div>
             </div>

             <div className='productCard__desktop'>
                <img className='productCard__image' src = {items.categories[0].products[2].gallery[0]} alt = 'PlayStation 5'></img>
                <div className='productCard__elements'>
                <div className='productCard__elements-title' >{items.categories[0].products[2].name}</div>
                <div className='productCard__elements-price'>${items.categories[0].products[2].prices[0].amount}</div>
                </div>
             </div>

                
                <div className='productCard__desktop'>
                <img className='productCard__image' src = {items.categories[0].products[3].gallery[0]} alt = 'xbox'></img>
                <div className='productCard__elements'>
                <div className='productCard__elements-title'>{items.categories[0].products[3].name}</div>
                <div className='productCard__elements-price'>${items.categories[0].products[3].prices[0].amount}</div>
                </div>
             </div>

             <div className='productCard__desktop'>
                <img className='productCard__image' src = {items.categories[0].products[4].gallery[0]} alt = 'iMac 2021'></img>
                <div className='productCard__elements'>
                <div className='productCard__elements-title'>{items.categories[0].products[4].name}</div>
                <div className='productCard__elements-price'>${items.categories[0].products[4].prices[0].amount}</div>
                </div>
             </div>

             <div className='productCard__desktop'>
                <img className='productCard__image' src = {items.categories[0].products[5].gallery[0]} alt = 'iPhone 12 Pro'></img>
                <div className='productCard__elements'>
                <div className='productCard__elements-title'>{items.categories[0].products[5].name}</div>
                <div className='productCard__elements-price'>${items.categories[0].products[5].prices[0].amount}</div>
                </div>
             </div>

             <div className='productCard__desktop'>
                <img className='productCard__image' src = {items.categories[0].products[6].gallery[0]} alt = 'AirPods Pro'></img>
                <div className='productCard__elements'>
                <div className='productCard__elements-title'>AirPods Pro</div>
                <div className='productCard__elements-price'>${items.categories[0].products[6].prices[0].amount}</div>
                </div>
             </div>

             <div className='productCard__desktop'>
                <img className='productCard__image' src = {items.categories[0].products[7].gallery[0]} alt = 'AirTag'></img>
                <div className='productCard__elements'>
                <div className='productCard__elements-title'>{items.categories[0].products[7].name}</div>
                <div className='productCard__elements-price'>${items.categories[0].products[7].prices[0].amount}</div>
                </div>
             </div>
                    </div>
                                                              
                </div>
            )
        }
    }
}