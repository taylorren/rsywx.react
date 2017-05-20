import React, { Component } from 'react';

import TopNav from './layout/TopNav';
import MetaData from './MetaData';
import Footer from './layout/Footer.js';
import Paginator from './widget/Paginator.js';

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: {},
            pages: -1,
            key: "",
        };
    
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.gotoPage=this.gotoPage.bind(this);
        this.searchPage=this.searchPage.bind(this);
    }
    searchPage(e){
        let key=this.state.key;
        window.location="/books/list/title/"+key+"/1";
        e.preventDefault();

    }
    handleSearchChange(e){
        this.setState({
            key: e.target.value,
        });
    }

    handlePageChange(e)
    {
        this.setState({
            page: e.target.value,
        });
    }
    gotoPage(e){
        let page=this.state.page;
        window.location="/books/list/"+this.state.type+"/"+this.state.key+"/"+page;
        e.preventDefault();
    }
    
    componentDidMount() {
        this.setState({
            type: this.props.match.params.type || "title",
            key: this.props.match.params.key || "all",
            page: this.props.match.params.page || "1",
        });
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.type!==this.state.type) {
            let URI="http://api.rsywx.com/books/list/"+this.state.type+"/"+this.state.key+"/"+this.state.page;
            
            fetch(URI)
                .then(response => {
                    return response.json();
                })
                .then(json => {
                    let out=json.out;
                    console.log(out);
                    this.setState({
                        pages: Math.ceil(out.count.bc/20),
                        books: out.books
                    });
                });
        }
        
    }
    render() {
        let books=this.state.books;
                                                
        return (
            <div>
				<MetaData title={"任氏有无轩藏书 | 第"+this.state.page+"页"}/>
                <TopNav active="1"/>
                    <div className="widewrapper">
                        <div className="container content">
                            <div className="row">
                                <section id="searchform" className="col-md-6">
                                    <form
                                        onSubmit={this.searchPage}
                                        acceptCharset="utf-8"
                                        className="form-inline">
                                        <div className="row">
                                            <div className="col-sm-6 form-group">
                                                <input
                                                    className="form-control input-sm"
                                                    type="text"
                                                    id="key"
                                                    name="key"
                                                    placeholder="all" 
                                                    onChange={this.handleSearchChange}
                                                    value={this.state.key} />&nbsp;&nbsp;
                                                <button
                                                    type="submit"
                                                    className="btn btn-grove-one btn-sm btn-bold">搜索</button>
                                            </div>
                                        </div>
                                    </form>
                                </section>
                                <section id="gotoform" className="col-md-6">
                                    <form
                                        onSubmit={this.gotoPage}
                                        acceptCharset="utf-8"
                                        className="form-inline"
                                        >
                                        <div className="row">
                                            <div className="col-sm-6 form-group">
                                                <input
                                                    className="form-control input-sm"
                                                    type="text"
                                                    id="page"
                                                    name="page"
                                                    placeholder="直接去第几页" 
                                                    onChange={this.handlePageChange}
                                                    size="18"/>
                                                <input
                                                    type="hidden"
                                                    name="current"
                                                    id="current"
                                                    defaultValue="1" 
                                                    />&nbsp;&nbsp;
                                                <button
                                                    type="submit"
                                                    className="btn btn-grove-one btn-sm btn-bold">直接去</button>
                                            </div>
                                        </div>
                                    </form>
                                </section>
                            </div>
                            <div className="row">
                                <section id="data" className="col-md-12">
                                    <table className="table table-striped table-hover">
                                        <tbody>
                                            <tr>
                                                <th>
                                                    <strong>编号</strong>
                                                </th>
                                                <th>
                                                    <strong>书名</strong>
                                                </th>
                                                <th>
                                                    <strong>作者</strong>
                                                </th>
                                                <th>
                                                    <strong>购买/整理日期</strong>
                                                </th>
                                                <th>
                                                    <strong>位置</strong>
                                                </th>
                                            </tr>
                                            {
                                                Object.keys(books).map(function(book, index) {
                                                                                                                                let purchdate=new Date(books[index].purchdate);
                                                   return (<tr key={index}>
                                                <td>
                                                    <a href={"/books/"+books[index].bookid+".html"}>{books[index].bookid}</a>
                                                </td>
                                                <td>
                                                    <a href={"/books/"+books[index].bookid+".html"}>{books[index].title}</a>
                                                </td>
                                                <td>【{books[index].region}】{books[index].author}</td>
                                                <td>{purchdate.getFullYear()+"年"+(purchdate.getMonth()+1)+"月"+purchdate.getDate()+"日"}</td>
                                                <td />
                                            </tr>);

                                               })
                                            }
                                            
                                        </tbody>
                                    </table>
                                </section>
                                <Paginator type={this.state.type} keyword={this.state.key} page={this.state.page} pages={this.state.pages}/>
                                
                            </div>
                        </div>
                    </div>
                <Footer />
            </div >
        );

    }

}

export default BookList;