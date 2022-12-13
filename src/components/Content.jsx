import React from 'react'

export default function Content() {
  return (
    <div className="container">
        <div className="main text-center">
            <br />
            <br />
            <h3 id='head'>
                Collect and sell super rate NFTs
            </h3>
            <p id='con' className='text-secondary'>
                The world's first and largest marketplace for crypto collectibles and non-fungible tokens(NFTs).
            </p>
            <br />
            <br />
            <button className="btn btn-outline-secondary">Explore Marketplace</button>
            <br />
            <br />
            <div className="row text-center">
                <div className="col box shadow mx-3 p-3 mb-5 bg-white rounded"><img src="" alt="" /><br /> <button className="eth text-dark bg-light btn btn-outline-success"><box-icon className='mx-5' name='money-withdraw'></box-icon>44.02ETH &nbsp; &nbsp; &nbsp;<button className="btn btn-warning">Place a bid</button></button></div>
                <div className="col box shadow mx-3 p-3 mb-5 bg-white rounded"><img src="" alt="" /><br /> <button className="eth text-dark bg-light btn btn-outline-success"><box-icon className='mx-5' name='money-withdraw'></box-icon>44.02ETH &nbsp; &nbsp; &nbsp;<button className="btn btn-warning">Place a bid</button></button></div>
                <div className="col box shadow mx-3 p-3 mb-5 bg-white rounded"><img src="" alt="" /><br /> <button className="eth text-dark bg-light btn btn-outline-success"><box-icon className='mx-5' name='money-withdraw'></box-icon>44.02ETH &nbsp; &nbsp; &nbsp;<button className="btn btn-warning">Place a bid</button></button></div>

            </div>
        </div>
    </div>
  )
}
