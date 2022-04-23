import React, {Component} from 'react';



export default class Clothes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount(){
        fetch("./data.js")
        .then(res => /* console.log(res) */res.json())
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
                <div>
                    {items.map(item => (
                        <img src = {item.data.categories[0].products.gallery} alt ='jacket'/>
                    ))}
                </div>
            )
        }
    }
}