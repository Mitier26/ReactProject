import React from 'react'

const Box = (props) => {

    let result;

    if (props.title === "컴퓨터" && props.result !== "무승부" && props.result !== '')
    {
        result = props.result === "승리!" ? "패배!" : "승리!"
    }
    else {
        result = props.result;
    }

  return (
    <div className='box'>
        <h1>{props?.title}</h1>
        <img className='item-img' src={props.item?.img}></img>
        <h2>{result}</h2>
    </div>
  )
}

export default Box