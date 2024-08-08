import React, { Component } from 'react';
import { NewsItem } from './NewsItem';
import { Spiner } from './Spiner';

export class News extends Component {
   capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  constructor(props)
  {
    super(props);
    this.state = {
       articles : [],
       page : 1,
       loading: false
    }
    document.title = `NewsMonkey-${this.capitalizeFirstLetter(this.props.category)}`;
  }
  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f3aaca2500dc4141b36de0fa09556364&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
    });
  }
  async componentDidMount()
  {
    this.updateNews();
  }
  handlePrevBtn = async ()=>{
    this.setState({
      page: this.state.page-1,
    });
    this.updateNews();
  }
  handleNextBtn = async ()=>{
    this.setState({
      page: this.state.page + 1,
    });
    this.updateNews(); 
  }
  render() {
    return (
      <>
        <div className='container mb-7' style={{marginTop:"60px"}}> 
          <h1>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
          {this.state.loading && <Spiner/>}
          <div className='container my-3'>
            <div className='row' >
               {!this.state.loading && this.state.articles.map((element)=>{
                return <div className='col-md-4 my-3' key={element.url}>
                   <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} auther={element.auther} date={element.publishedAt} source={element.source.name}/>
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