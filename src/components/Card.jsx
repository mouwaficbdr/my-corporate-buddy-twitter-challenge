import React from "react"

export default function Card({backgroundColor, textColor, titleColor, buttonBackgroundColor, img, title, text}) {

  const cardStyle = {
    backgroundColor: backgroundColor
  }

  const titleStyle = {
    color: titleColor
  }

  const textStyle = {
    color: textColor
  }

  const buttonStyle = {
    backgroundColor: buttonBackgroundColor
  }

  return (
    <div style={cardStyle} className="card">
      <img src={img} className="card-images"/>
      <p style={titleStyle} className="card-title">{title}</p>
      <p style={textStyle} className="card-text">{text}</p>
      <button style={buttonStyle} type="button" className="card--button">Visit Page</button>
    </div>
    
  )
}