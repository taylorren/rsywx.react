import React, { Component } from 'react';

class RandomBooks extends Component {
    state = { books: {} };
    componentDidMount() {
        fetch('http://api.rsywx.com/book/randomBook/3')
            .then(response => {
                return response.json();
            })
            .then(json => {
                this.setState({
                    books: json.out
                })
            });
    }
    render() {
        let books = this.state.books;
        return (
            <div className="widewrapper">
                <div className="container content">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="showroom-controls">
                                <div className="links">随机推荐的书籍</div>
                            </div>
                            <div className="row cropping">
                                {
                                    Object.keys(books).map(function (key) {
                                        var book = books[key];
                                        
                                        return (
                                            <div className="showroom-item blog-item col-sm-4" key={key}>
                                                <a href={"/books/"+book.bookid+".html"}>
                                                    <img
                                                        src={"http://api.rsywx.com/book/cover/"+book.bookid+"/"+book.title+"/"+book.author+"/300"}
                                                        alt={book.title+'，'+book.author}
                                                        title={book.title+'，'+book.author}
                                                        className="cropped" />
                                                </a>
                                            </div>
                                        );
                                    })
                                }

                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
            </div>

        );

    }
}

export default RandomBooks;