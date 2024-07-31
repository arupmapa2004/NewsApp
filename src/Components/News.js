import React, { Component } from 'react';
import { NewsItem } from './NewsItem';

export class News extends Component {
  constructor()
  {
    super();
    this.state = {
       articles : this.articles
    }
  }
  render() {
    return (
      <>
        <div className='container my-3'>
          <h1>NewsMonkey - Top Headlines</h1>
          <div className='container my-3'>
            <div className='row'>
               {this.articles.map((element)=>{
                return <div className='col-md-4'>
                   <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url}/>
                  </div>
               })}
          </div>
        </div>
       </div>
      </>
    )
  }
}