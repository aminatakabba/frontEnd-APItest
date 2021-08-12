import React, { useState, useEffect } from 'react';
import axios from 'axios' // easier way to fetch the API
import './TaskRef.css'

function TaskRef() {
    const [items, setItems] = useState(null)

    const api = 'https://frontendtest.huel.io/api/line-items'
    
    useEffect(() => {
        axios.get(api)
            .then(res => {     
                let lineItems = res.data.line_items
                console.log(lineItems) // test
                setItems(lineItems)
            })
            .catch(error => 
                alert('API cannot be rendered try again later') // error handling
            )
    }, [api])

    // Only appears if there's values in items
    if(items) {
        let sum = 0
        let total = items.map(item => (
            parseInt(item.price)
        ))
        
        return (
            <div className='taskRef'>
                {
                    items.map(item => (
                    <div key={item.id} className='component'>
                        <img src={item.image} className='component__image' />
                        <div className='component__text'>
                            <b>{item.title}</b>
                            <p>{item.quantity}x {item.name}</p>
                        </div>
                        <p><b>${item.price}</b></p> 
                    </div>))
                }
                <h1 className='total'>Total: $
                    {total.reduce((accumulator, curr) => accumulator + curr)}
                </h1>
            </div>
        )
    }

    // Default return value
    return (
        <div className='taskRef'>
            <p>items not rendering</p>
        </div>
    )
}

export default TaskRef
