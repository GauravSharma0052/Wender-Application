import React, { useState, useEffect } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default function News(props) {
    var [articles, setarticles] = useState([])
    var [totalResults, settotalResults] = useState(0)
    var [page,setpage] = useState(1)
    async function getData() {
        setpage(1)
        var rawdata = await fetch(`https://newsapi.org/v2/everything?q=${props.category}&pageSize=${props.pageSize}&page=${page}&language=${props.language}&apiKey=93b7a952ae0c462390338b7e15d3ce8e`)
        var data = await rawdata.json()
        setarticles(data.articles)
        settotalResults(data.totalResults)
    }
    var fetchMoreData = async () => {
        setpage(++page)
        var rawdata = await fetch(`https://newsapi.org/v2/everything?q=${props.category}&pageSize=${props.pageSize}&page=${page}&language=${props.language}&apiKey=93b7a952ae0c462390338b7e15d3ce8e`)
        var data = await rawdata.json()
        setarticles(articles.concat(data.articles))
    }
    useEffect(()=>{
        getData()
    },[props.category,props.language,props.pageSize])
    return (
        <>
            <h5 className='background text-light text-center p-2 mt-1'>{props.category} Latest News</h5>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<Spinner />}
            >
                <div className='row'>
                    {
                        articles.map((item, index) => {
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
