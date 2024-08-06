import React, { Component } from 'react';


export class NewsItem extends Component {
    render() {
        let { title, description, imgUrl, newsUrl, auther, date, source } = this.props;
        return (
            <>
                <div className="card">
                    <img src={!imgUrl ? 'https://www.businessinsider.in/_next/image?url=https%3A%2F%2Fstaticbiassets.in%2Fthumb%2Fmsid-112145975%2Cwidth-700%2Cheight-525%2Cimgsize-187260%2Fhereaposs-a-closer-look-at-how-much-big-tech-is-spending-on-ai.jpg&w=640&q=75' : imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}
                            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "88%", zIndex: "1.5" }}>
                                {source}
                            </span>
                        </h5>
                        <p className="card-text">{description}</p>
                        <footer className="blockquote-footer">By {!auther ? "Unknown" : auther} <cite title="Source Title">on {new Date(date).toGMTString()}</cite></footer>
                        <a href={newsUrl} target="-blanck" className="btn btn-primary">Read More..</a>
                    </div>
                </div>
            </>
        )
    }
}