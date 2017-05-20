import React, {Component} from 'react';

class LatestBookSlide extends Component {

  state={};

  componentDidMount() {
    fetch('http://api.rsywx.com/book/latestBook')
      .then(response => {
        return response.json();
      })
      .then(json => {
        let book=json.out[0];
        this.setState({
          title: book.title,
          author: book.author,
          publisher: book.p_name,
          purchdate: book.purchdate,
          id: book.bookid,
          cover: "http://api.rsywx.com/book/cover/"+book.bookid+"/"+book.title+"/"+book.author+"/300"
        });
      })
  }

  render() {

    return (

        <div
          className="ls-slide"
          data-ls="transition3d:5;">

          <img
            className="ls-bg"
            src="img/slides/bg-one.jpg"
            alt="Slider Background" />

          <img
            className="ls-l"
            src={this.state.cover}
            title={this.state.title}
            alt={this.state.title}
            width="300px"
            style={{top: 15, left: 650}}
            data-ls="durationin : 2000; delayin : 0; offsetxin: right;  offsetxout: right; easingin: easeInBounce; easingout: easeOutBack" />
          <div className="ls-l large" style={{top: 50, left:80, whiteSpace: 'nowrap'}} data-ls="offsetxin:0;durationin:3000;delayin:2000;easingin:easeOutElastic;rotatexin:90;transformoriginin:50% bottom 0;offsetxout:0;rotatexout:90;transformoriginout:50% bottom 0;" >
                最近收藏的书
          </div>
          <div
            className="ls-l large-caption"
            style={{top: 150, left: 80}}
            data-ls="delayin: 750; offsetxin: 0; offsetxout: 0;">

            <div>

              <p className='mid'>

                <a href={'/books/'+this.state.id+'.html'} className='yellow shadow'>{this.state.title}</a>
              </p>

            </div>
            <div><p className="s18">{this.state.author}</p></div>
            <div><p className="s18">{this.state.publisher}</p></div>
            <div><p className="small"><em>收录时间：{this.state.purchdate}</em></p></div>
          </div>
        </div>


    );
  }
}

export default LatestBookSlide;
