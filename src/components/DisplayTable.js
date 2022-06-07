import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const DisplayTable = () => {
    const [author, setAuthor] = useState("")
    const [category, setCategory] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [arr, setarr] = useState([])
    const postData =  (e) => {
        e.preventDefault();
        const data={ author: author, category: category, name: name, price: parseInt(price) }
        console.log(data)
        axios.post("http://127.0.0.1:9999/book",data ).then((e) => {
            console.log("in")
            console.log(e)
        })
    }
    const getData = (e) => {
        console.log(e)
        axios.get("http://127.0.0.1:9999/book").then((e) => {
            console.log("in")
            console.log(e.data)
            setarr(e.data)
        })
    }


    return (
        <div className='container text-center'>
            <form onSubmit={postData} >
                <input type="text" placeholder='enter the author' onChange={(e) => { setAuthor(e.target.value) }} />
                <input type="text" placeholder='enter the category' onChange={(e) => { setCategory(e.target.value) }} />
                <input type="text" placeholder='enter the name' onChange={(e) => { setName(e.target.value) }} />
                <input type="text" placeholder='enter the price' onChange={(e) => { setPrice(e.target.value) }} />
                <button type="submit">Post Data</button>
            </form>
            <button type="submit" onClick={getData}>Get Data</button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Author</th>
                        <th scope="col">category</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {arr.map((e) => {
                        return (
                            <tr>
                                <th scope="row">{e.author}</th>
                                <td>{e.category}</td>
                                <td>{e.name}</td>
                                <td>{e.price}</td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>
        </div>
    )
}
