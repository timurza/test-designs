import React from 'react';
import fetchData from '../../data';
import './clothes.scss';



export default class Clothes extends React.Component {
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
                <div className='xbox'>
                    
                        {items.categories[0].products[3].gallery.map(g =>  (
                            <img src = {g} alt = 'jacket'/>
                        ))}
                    
                </div>
            )
        }
    }
}