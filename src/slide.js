import React from 'react'
import styleable from 'react-styleable'

import css from './slide.css'

const { object, string } = React.PropTypes

function Slide(props) {
  return (
    <article style={props.style} className={props.css.root}>
      <img src={props.image} alt={props.title} />
      <footer className={props.css.footer}>
        <h2 className={props.css.title}>{props.title}</h2>
        <div>{props.children}</div>
      </footer>
    </article>
  )
}

Slide.propTypes = {
  image: string.isRequired,
  style: object,
  title: string
}

export default styleable(css)(Slide)
