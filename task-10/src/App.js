import React from 'react'
import { Add } from './components/Add'
import { News } from './components/News'
import NewsData from './newsData.json'
import './App.less';

class App extends React.Component {
  state = {
    news: null,
    isLoading: false
  }
  static getDerivedStateFromProps(props, state) {
    let nextFilteredNews

    // смотрим в state.news (ранее смотрели в props)
    // и проверяем, чтобы не клоинировать null
    // например, в момент первой отрисовки
    if (Array.isArray(state.news)) {
      nextFilteredNews = [...state.news]

      nextFilteredNews.forEach((item, index) => {
        if (item.bigText.toLowerCase().indexOf('pubg') !== -1) {
          item.bigText = 'СПАМ'
        }
      })

      return {
        filteredNews: nextFilteredNews,
      }
    }

    return null
  }
  componentDidMount() {
    this.setState({ isLoading: false, news:NewsData })

  }
  handleAddNews = data => {
    const nextNews = [data, ...this.state.news]
    this.setState({ news: nextNews })
  }
  render() {
    const { news, isLoading } = this.state

    return (
      <React.Fragment>
        <Add onAddNews={this.handleAddNews} />
        <h3>Новости</h3>
        {isLoading && <p>Загружаю...</p>}
        {Array.isArray(news) && <News data={news} />}
      </React.Fragment>
    )
  }
}

export default App
