import React, {Component} from 'react';

class LatestReadingSlide extends Component {
  state={};

  componentDidMount() {
    fetch('http://api.rsywx.com/reading/latestReading')
      .then(response => {
        return response.json();
      })
      .then(json => {
        let book=json.out.book[0];
        let review=json.out.review[0];
        this.setState({
          title: book.title,
          id: book.bookid,
          author: book.author,
          reviewUrl: review.URI,
          reviewTitle: review.title,
          date: review.datein,
          cover: "http://api.rsywx.com/book/cover/"+book.bookid+"/"+book.title+"/"+book.author+"/300"
        });
      });
  }
  render() {
    return (
      <div
        className="ls-slide"
        data-ls="transition3d:40;">

        <img
          className="ls-bg"
          src="img/slides/bg-two.jpg"
          alt="Slider Background" />

        <img
          className="ls-l"
          src={this.state.cover}
          title={this.state.title}
          alt={this.state.title}
          width="300px"
          style={{top: 50, left: 50}}
          data-ls=" durationin : 2000; delayin : 0; offsetxin: left;  offsetxout: left;" />

        <div
          className="ls-l large"
          style={{top: 50, left: 700, whiteSpace: 'nowrap'}}
          data-ls=" durationin : 2000; delayin : 0; offsetxin: right;  offsetxout: right;">
          最近读的书
        </div>

        <div
          className="ls-l"
          style={{top: 130, left: 700}}
          data-ls="delayin:750; offsetxin: 0; offsetxout: 0;">

          <div>

            <p className="mid">

              <a
                href={'/books/'+this.state.id+'.html'} className="yellow shadow">{this.state.title}</a>

            </p>

          </div>

          <div>

            <p className="mid">书评见：<a href={this.state.reviewUrl} className="yellow shadow">{this.state.reviewTitle}</a></p>

          </div>

          <div>

            <p className="small">

              <em>书评时间：{this.state.date}</em>

            </p>

          </div>

        </div>

      </div>

    );
  }
}

export default LatestReadingSlide;
