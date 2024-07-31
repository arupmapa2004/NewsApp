import React, { Component } from 'react';
import { NewsItem } from './NewsItem';

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
    let url = "https://newsapi.org/v2/everything?q=apple&from=2024-07-30&to=2024-07-30&sortBy=popularity&apiKey=f3aaca2500dc4141b36de0fa09556364&page=1&pageSize=12";
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles:parseData.articles,
      totalResults:parseData.totalResults
    });
  }
  handlePrevBtn = async ()=>{
    let url = `https://newsapi.org/v2/everything?q=apple&from=2024-07-30&to=2024-07-30&sortBy=popularity&apiKey=f3aaca2500dc4141b36de0fa09556364&page=${this.state.page-1}&pageSize=12`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles:parseData.articles,
      page: this.state.page-1
    });
  }
  handleNextBtn = async ()=>{
      let url = `https://newsapi.org/v2/everything?q=apple&from=2024-07-30&to=2024-07-30&sortBy=popularity&apiKey=f3aaca2500dc4141b36de0fa09556364&page=${this.state.page+1}&pageSize=12`;
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        articles:parseData.articles,
        page: this.state.page+1
      });
    
  }
  render() {
    return (
      <>
        <div className='container my-3'>
          <h1>NewsMonkey - Top Headlines</h1>
          <div className='container my-3'>
            <div className='row'>
               {this.state.articles.map((element)=>{
                return <div className='col-md-4 my-3'>
                   <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url}/>
                  </div>
               })}
          </div>
          <div className='container d-flex justify-content-between'>
            <button disabled={this.state.page <= 1} className='btn btn-primary' onClick={this.handlePrevBtn}>&larr; Previous</button>
            <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/10)}className='btn btn-primary' onClick={this.handleNextBtn}>Next &rarr;</button>
          </div>
        </div>
       </div>
      </>
    )
  }
}