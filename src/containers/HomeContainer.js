import React from 'react'

export const HomeContainer = (props) => {
  console.log(props.cdata.cdata)

  return (
    <div className='container'>

      <div className="card-deck w-25">

        <div className="card">
          <img className="card-img-top" src="data:image/jpeg;base64,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" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Nikon Camera</h5>
            <p className="card-text">Rs.20000</p>
          </div>
          <div className="card-footer">
            <button onClick={() => { props.addToCart({ proName: "nikoncamera", proPrice: 20000 });  }} className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>

    </div>
  )
}