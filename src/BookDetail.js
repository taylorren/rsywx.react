import React, { Component } from 'react';

import TopNav from './layout/TopNav';
import MetaData from './MetaData';
import Footer from './layout/Footer.js';
import Tags from './widget/Tags.js';

class BookDetail extends Component {
    state = {
        book: {},
        isbn: '',
        douban: {},
        tags: {},
        reviews: {}
    };

    componentDidMount() {
        let formatter = new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 0,
        });

        let bookid = this.props.match.params.bookid;

        let URI = "http://api.rsywx.com/book/bookByBookId/" + bookid;
        fetch(URI)
            .then(response => {
                return response.json();
            })
            .then(json => {
                this.setState({
                    book: json.out[0],
                    isbn: json.out[0].isbn
                })
            });

        fetch("http://api.rsywx.com/book/visitCount/" + bookid+', 1')
            .then(response => {
                return response.json();
            })
            .then(json => {
                this.setState({
                    vc: formatter.format(json.out),
                })
            })

        fetch("http://api.rsywx.com/book/lastVisit/" + bookid)
            .then(response => {
                return response.json();
            })
            .then(json => {
                this.setState({
                    lv: json.out
                });
            })

        fetch("http://api.rsywx.com/reading/relatedReview/" + bookid)
            .then(response => {
                return response.json();
            })
            .then(json => {

                this.setState({
                    reviews: json.out
                })
            })
    }

    componentDidUpdate(prevProps, prevState) {
        // If ISBN updated
        if (prevState.isbn !== this.state.isbn) {
            let URI = "http://api.rsywx.com/douban/douban/" + this.state.isbn;
            fetch(URI)
                .then(response => {
                    return response.json();
                })
                .then(json => {
                    this.setState({
                        douban: json.out,
                        tags: json.out.tags
                    });

                })
        }


    }

    render() {
        let book = this.state.book;
        let copyrighter=book.copyrighter || "（无）"

        let cover = "http://api.rsywx.com/book/cover/" + book.bookid + "/" + book.title + "/" + book.author + "/300";


        return (
            <div>
                <MetaData title={'任氏有无轩 | ' + book.title} description={"书籍详情 " + book.author + " " + book.title + " " + book.pname} keywords={book.author + ", " + book.title + ", " + book.pname}
                />
                <TopNav active="1" />
                <div>
                    <div className="widewrapper">
                        <div className="container content">
                            <div className="row">
                                <div className="col-sm-6">
                                    <img
                                        src={cover}
                                        alt={book.title + " " + book.author}
                                        title={book.title + " " + book.author} />
                                </div>
                                <div className="col-sm-6">
                                    <h1>{book.title}</h1>
                                    <p>
                                        <strong>ISBN：</strong>{book.isbn}<br />
                                        <strong>作者：</strong>{book.author}（{book.region}）| <strong>译者：</strong>{copyrighter}<br />
                                        <strong>价格：</strong>
                                        RMB {book.price}<br />
                                        <strong>购于：</strong>{book.purchdate}，{book.plname}<br />
                                    </p>
                                    <Tags bookid={book.bookid} />
                                    <a
                                        className="btn btn-info btn-sm"
                                        data-toggle="modal"
                                        href="#addtag">
                                        增加更多TAG »
                                    </a>
                                    <div className="feature">
                                        <div className="icon">
                                            <i className="glyphicons tags" />
                                        </div>
                                        <div className="text">
                                            <h3>豆瓣TAG</h3>
                                            {
                                                Object.keys(this.state.tags).map((tag, i) => {
                                                    return <small key={"douban-" + i}>{this.state.tags[i]}&nbsp;&nbsp;</small>
                                                })
                                            }


                                        </div>
                                    </div>
                                    <div className="feature">
                                        <div className="icon">
                                            <i className="glyphicons star" />
                                        </div>
                                        <div className="text">
                                            <h3>豆瓣评分</h3>
                                            <small>{this.state.douban.rating}</small>
                                        </div>
                                    </div>
                                    <div className="feature">
                                        <div className="icon">
                                            <i className="glyphicons screenshot" />
                                        </div>
                                        <div className="text">
                                            <h3>浏览次数</h3>
                                            <small>
                                                <strong>{this.state.vc}</strong>
                                                （上次访问时间是{this.state.lv}）
</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-10 col-md-offset-1">
                                    <h3>简介：</h3>
                                    <p>{book.intro}</p>
                                    <h3>任氏有无轩主人评论：</h3>
                                    <p />
                                    <table className="table table-hover table-striped">
                                        <tbody>
                                            {
                                                Object.keys(this.state.reviews).map((review, i) => {
                                                    return (
                                                        <tr key={"review-" + i + "-" + book.bookid}>
                                                            <td>
                                                                <a href={this.state.reviews[review].URI}>{this.state.reviews[review].title}</a>，发表于{this.state.reviews[review].datein}
                                                            </td>
                                                        </tr>
                                                    );


                                                })
                                            }
                                        </tbody>
                                    </table>
                                    <p />
                                    <h3>豆瓣简介：</h3>
                                    {this.state.douban.summary}
                                    <p>更多信息参见：<a href={this.state.douban.alternate}>豆瓣链接</a>。</p>
                                    <h3>更多书籍信息</h3>
                                    <table className="table table-hover table-striped">
                                        <tbody>
                                            <tr>
                                                <td>出版社：</td>
                                                <td>{book.pname}</td>
                                            </tr>
                                            <tr>
                                                <td>出版日期：</td>
                                                <td>{book.pubdate}</td>
                                            </tr>
                                            <tr>
                                                <td>印刷日期：</td>
                                                <td>{book.printdate}</td>
                                            </tr>
                                            <tr>
                                                <td>版次：</td>
                                                <td>{book.ver}</td>
                                            </tr>
                                            <tr>
                                                <td>装帧：</td>
                                                <td>{book.deco}</td>
                                            </tr>
                                            <tr>
                                                <td>千字数：</td>
                                                <td>{book.kword}</td>
                                            </tr>
                                            <tr>
                                                <td>页数：</td>
                                                <td>{book.page}</td>
                                            </tr>
                                            <tr>
                                                <td>分类号：</td>
                                                <td>{book.category}</td>
                                            </tr>
                                            <tr>
                                                <td>藏书位置：</td>
                                                <td>{book.location}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* The modal dialog to add more tags */}
                    <div>
                        <div className="modal fade" id="addtag">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-hidden="true">×</button>
                                        <h4 className="modal-title">增加自己的TAG</h4>
                                    </div>
                                    <div className="modal-body">
                                        <form
                                            role="form"
                                            method="post"
                                            action="http://api.rsywx.com/book/addtags"
                                            id="tagform"
                                            name="tagform">
                                            <div className="row">
                                                <div className="col-sm-4 form-group">
                                                    <label
                                                        className="control-label"
                                                        htmlFor="newtags">新增TAG</label>
                                                    <input
                                                        type="text"
                                                        className="input-xlarge"
                                                        id="newtags"
                                                        name="newtags"
                                                        size="40"
                                                        placeholder="输入你的TAG" />
                                                    <p className="help-block">（用空格分隔）</p>
                                                    <input
                                                        type="hidden"
                                                        defaultValue={book.id}
                                                        id="id"
                                                        name="id" />
                                                    <input
                                                        type="hidden"
                                                        defaultValue={book.bookid}
                                                        id="bookid"
                                                        name="bookid" />
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <a href="#" className="btn" data-dismiss="modal">取消</a>
                                                <button type="submit" className="btn btn-primary">保存</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>

        );
    }
}

export default BookDetail;