import React, {Component} from 'react';

class ForgottenBookSlide extends Component {
  state={};

  componentDidMount() {
    fetch('http://api.rsywx.com/book/forgotten')
      .then(response => {
        return response.json();
      })
      .then(json => {
        let book=json.out[0];
        
        this.setState({
          title: book.title,
          author: book.author,
          id: book.bookid,
          mrv: book.mrv,
          bvc: book.bvc,
          cover: "http://api.rsywx.com/book/cover/"+book.bookid+"/"+book.title+"/"+book.author+"/300"
        });
      });
  }
    render() {
    return (
    <div className="ls-slide" data-ls="transition3d:59;">
        <img className="ls-bg" src="img/slides/bg-four.jpg" alt="Slider Background" />
        <img className="ls-l" src={this.state.cover} alt={this.state.title} title={this.state.title} style={{top: 25, left: 50}} data-ls="durationin: 2500; offsetxin: left; offsetxout: left;" />
        <div className="ls-l" style={{top: 50, left: 550}} data-ls="durationin : 2000; delayin : 0; offsetxin: right;  offsetxout: right;">
            <div>
                <p className="large">好久没访问的书</p>
            </div>
        </div>
        <div className="ls-l" style={{top: 120, left: 550}} data-ls="delayin: 750; offsetxin: 0; offsetxout: 0;">
          <div>
              <p className="mid"><a href={'/books/'+this.state.id+'.html'} className="yellow shadow">{this.state.title}</a></p>
          </div>
          <div><p className="s18">上次访问时间：{this.state.mrv}</p>
          </div>
          <div><p className="s18">总访问量：{this.state.bvc}</p></div>
        </div>
      </div>

    );

    }
}

export default ForgottenBookSlide;
