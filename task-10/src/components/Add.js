import React from 'react'
import PropTypes from 'prop-types'

class Add extends React.Component {
  state = {
    name: '',
    like:'',
    surname: '',
    text: '',
    bigText: '',
    agree: false,
  }
  onBtnClickHandler = e => {
    e.preventDefault()
    const { name,surname, text, bigText,like } = this.state
    this.props.onAddNews({
      id: +new Date(),
      name: name,
      like:'0',
      surname: surname,
      text,
      bigText,
    })
  }
  handleChange = e => {
    const { id, value } = e.currentTarget
    this.setState({ [id]: value })
  }
  handleCheckboxChange = e => {
    this.setState({ agree: e.currentTarget.checked })
  }
  validate = () => {
    const { name,surname, text, agree } = this.state
    if (name.trim() && text.trim()&& surname.trim() && agree) {
      return true
    }
    return false
  }
  render() {
    const { name,surname, text, bigText } = this.state
    return (
      <form className="add">
        <input
          id="name"
          type="text"
          onChange={this.handleChange}
          className="add__name"
          placeholder="Ваше имя"
          value={name}
        />
        <input
          id="surname"
          type="text"
          onChange={this.handleChange}
          className="add__surname"
          placeholder="Ваша фамилия"
          value={surname}
        />
        <textarea
          id="text"
          onChange={this.handleChange}
          className="add__text"
          placeholder="Текст новости"
          value={text}
        />
        <textarea
          id="bigText"
          onChange={this.handleChange}
          className="add__text"
          placeholder="Текст новости подробно"
          value={bigText}
        />
        <label className="add__checkrule">
          <input type="checkbox" onChange={this.handleCheckboxChange} /> Я
          согласен с правилами
        </label>
        <button
          className="add__btn"
          onClick={this.onBtnClickHandler}
          disabled={!this.validate()}
        >
          Добавить новость
        </button>
      </form>
    )
  }
}

Add.propTypes = {
  onAddNews: PropTypes.func.isRequired,
}

export { Add }
