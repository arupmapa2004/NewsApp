import React, { Component } from 'react';
import { NewsItem } from './NewsItem';
import { Spiner } from './Spiner';

export class News extends Component {
  constructor()
  {
    super();
    this.state = {
       articles : [],
       page : 1,
       loading: false
    }
  }
  async componentDidMount()
  {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f3aaca2500dc4141b36de0fa09556364&page=${this.state.page}&pageSize=12`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
    });
  }
  handlePrevBtn = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f3aaca2500dc4141b36de0fa09556364&page=${this.state.page}&pageSize=12`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles:parseData.articles,
      page: this.state.page-1,
      loading: false
    });
  }
  handleNextBtn = async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f3aaca2500dc4141b36de0fa09556364&page=${this.state.page}&pageSize=12`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        articles:parseData.articles,
        page: this.state.page+1,
        loading: false
      });
    
  }
  render() {
    return (
      <>
        <div className='container my-3'>
          <h1>NewsMonkey - Top Headlines</h1>
          {this.state.loading && <Spiner/>}
          <div className='container my-3'>
            <div className='row' >
               {!this.state.loading && this.state.articles.map((element)=>{
                return <div className='col-md-4 my-3' key={element.url}>
                   <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url}/>
                  </div>
               })}
          </div>
          <div className='container d-flex justify-content-between'>
            <button disabled={this.state.page <= 1} className='btn btn-primary' onClick={this.handlePrevBtn}>&larr; Previous</button>
            <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/12)}className='btn btn-primary' onClick={this.handleNextBtn}>Next &rarr;</button>
          </div>
        </div>
       </div>
      </>
    )
  }
}