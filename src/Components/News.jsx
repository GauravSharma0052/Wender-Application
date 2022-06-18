import React, { Component } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            totalResults: 0,
            page: 1,
        }
    }
    async getData() {
        this.setState({ page: 1 })
        var rawdata = await fetch(`https://newsapi.org/v2/everything?q=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page}&language=${this.props.language}&apiKey=c2bc28a13e944ae29f084e78e6ce8306`)
        var data = await rawdata.json()
        this.setState({
            articles: data.articles,
            totalResults: data.totalResults
        })
    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        var rawdata = await fetch(`https://newsapi.org/v2/everything?q=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page}&language=${this.props.language}&apiKey=c2bc28a13e944ae29f084e78e6ce8306`)
        var data = await rawdata.json()
        this.setState({ articles: this.state.articles.concat(data.articles) })
    }
    componentDidMount() {
        this.getData()
    }
    componentDidUpdate(old) {
        if ((this.props.category != old.category) ||(this.props.language != old.language) ||(this.props.pageSize != old.pageSize))
            this.getData()
    }
    render() {
        return (
            <>
                <h5 className='background text-light text-center p-2 mt-1'>{this.props.category} Latest News</h5>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={true}
                    loader={<Spinner />}
                >
                    <div className='row'>
                        {
                            this.state.articles.map((item, index) => {
                                return <div key={index} className='col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                                    <NewsItem

                                        title={item.title}
                                        description={item.description}
                                        url={item.url}
                                        pic={item.urlToImage}
                                    />
                                </div>
                            })
                        }
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}
