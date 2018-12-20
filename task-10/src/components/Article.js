import React from 'react'
import PropTypes from 'prop-types'
class Article extends React.Component {
  state = {
    visible: false,
  }
  handleReadMoreClck = e => {
    e.preventDefault()
    this.setState({ visible: true })
  }
  handleLikeBtn = e => {
    e.preventDefault()
     let value = parseInt(e.currentTarget.textContent, 10);    
        e.currentTarget.textContent = ++value;
        console.log(e.currentTarget.textContent);
  }
  render() {
    const { name, surname,like, text, bigText } = this.props.data
    const { visible } = this.state
    return (
      <div className="article">
        <a onClick={this.handleLikeBtn.bind(this)} className="news__like">{like}</a>
        <p className="news__author">{name} {surname}:</p>
        <p className="news__text">{text}</p>
        
        {!visible && (
          <a
            onClick={this.handleReadMoreClck}
            href="#readmore"
            className="news__readmore"
          >
            Подробнее
          </a>
        )}
        {visible && <p className="news__big-text">{bigText}</p>}
      </div>
    )
  }
}

Article.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired, // добавили id, это число, обязательно
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    like: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    bigText: PropTypes.string.isRequired,
  }),
}

export { Article }
