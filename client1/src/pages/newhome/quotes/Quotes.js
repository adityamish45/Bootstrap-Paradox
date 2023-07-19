import React from 'react'
import './Quotes.scss'

const Quotes = ({quoteData}) => {
  return (
  <>
  
  {quoteData.map((curElem) => {
    return (
      <>
        <div className="Quotes">
        <div className="quotes-container">
          <div className="quotes-info">
            <p className="title">{curElem.description}</p>
            
          </div>
        </div>
      </div>
       </>
     )
  })}
  
  </>
  )
}

export default Quotes
