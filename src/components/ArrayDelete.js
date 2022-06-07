import React,{useState} from 'react'
import { pureFinalPropsSelectorFactory } from 'react-redux/es/connect/selectorFactory'

export const ArrayDelete = (props) => {

    // const [arr, setarr] = useState([{"name":'vraj',rollno:23},{"name":'v',rollno:2},{"name":'vr',rollno:13}])
    const deleteRow=(e)=>{
    
        console.log("in")
        props.dataset(props.data.splice(1))
    }
  return (
    <div>
        <table className="table">
                <thead>
                    <tr>
                        <th scope="col">name</th>
                        <th scope="col">rollno</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((e) => {
                        return (
                            <tr>
                                <th scope="row">{e.name}</th>
                                <td>{e.rollno}</td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>
            <button type="submit" onClick={()=>deleteRow()}>Delete row</button>
    </div>
  )
}
