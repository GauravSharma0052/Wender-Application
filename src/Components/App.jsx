import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import News from './News'
export default class App extends Component {
    constructor(){
        super()
        this.state={
            language:"hi",
            pageSize:4
        }
    }
    changeLanguage(e){
        this.setState({language:e.target.value})
    }
    changePage(e){
        this.setState({pageSize:e.target.value})
    }
    render() {
        return (
            <>
            <div className='row mt-2 mb-2'>
                    <div className='col-2'>
                        <label className='form-label'>Language </label>
                        <select name='language' onChange={(e)=>this.changeLanguage(e)} className='form-select'>
                            <option value="hi">Hindi</option>
                            <option value="en">English</option>
                        </select>
                    </div>
                    <div className='col-2'>
                        <label className='form-label'>Page Size</label>
                        <select name='language' onChange={(e)=>this.changePage(e)} className='form-select'>
                            <option value="4">4</option>
                            <option value="8">8</option>
                            <option value="12">12</option>
                            <option value="16">16</option>
                            <option value="20">20</option>
                        </select>
                    </div>
                </div>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<News language={this.state.language} pageSize={this.state.pageSize} category="All"/>}></Route>
                        <Route path='/Politics' element={<News language={this.state.language} pageSize={this.state.pageSize} category="Politics"/>}></Route>
                        <Route path='/Education' element={<News language={this.state.language} pageSize={this.state.pageSize} category="Education"/>}></Route>
                        <Route path='/Science' element={<News language={this.state.language} pageSize={this.state.pageSize} category="Science"/>}></Route>
                        <Route path='/Technology' element={<News language={this.state.language} pageSize={this.state.pageSize} category="Technology"/>}></Route>
                        <Route path='/Sports' element={<News language={this.state.language} pageSize={this.state.pageSize} category="Sports"/>}></Route>
                        <Route path='/Jokes' element={<News language={this.state.language} pageSize={this.state.pageSize} category="Jokes"/>}></Route>
                        <Route path='/Crime' element={<News language={this.state.language} pageSize={this.state.pageSize} category="Crime"/>}></Route>
                        <Route path='/Entertainment' element={<News language={this.state.language} pageSize={this.state.pageSize} category="Entertainment"/>}></Route>
                        <Route path='/Cricket' element={<News language={this.state.language} pageSize={this.state.pageSize} category="Cricket"/>}></Route>
                        <Route path='/IPL' element={<News language={this.state.language} pageSize={this.state.pageSize} category="IPL"/>}></Route>
                        <Route path='/COVID19' element={<News language={this.state.language} pageSize={this.state.pageSize} category="COVID19"/>}></Route>
                    </Routes>
                </BrowserRouter>
                <Footer/>
            </>
        )
    }
}
