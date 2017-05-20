import React, {Component} from 'react';

class RandomBookSlide extends Component {
  state={};

  componentDidMount() {
    fetch('http://api.rsywx.com/book/randomBook/1')
      .then(response => {
        return response.json();
      })
      .then(json => {
        let book=json.out[0];
        this.setState({
          title: book.title,
          author: book.author,
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
        data-ls="transition3d:23;" >
        <img
            className="ls-bg"
            src="img/slides/bg-three.jpg"
            alt="Slider Background"/>
        <img
            className="ls-l"
            src={this.state.cover}
            width="300px"
            title={this.state.title}
            alt={this.state.title}
            style={{top: 50, left: 650}}
            data-ls=" durationin : 2000; delayin : 0; offsetxin: right;  offsetxout: right; easingin:easeInBounce; easingout: easeOutBack" />
            <div
                    className="ls-l large"
                    style={{
                    top: 50,
                    left: 80,
                    whiteSpace: 'nowrap'
                }}
                    data-ls="offsetxin:0;durationin:3000;delayin:2000;easingin:easeOutElastic;rotatexin:90;transformoriginin:50% bottom 0;offsetxout:0;rotatexout:90;transformoriginout:50% bottom 0;">
                    随便挑的书
            </div>
            <div
                className="ls-l"
                style={{top: 130, left: 80}}
                data-ls="delayin:750; offsetxin: 0; offsetxout: 0;" >
            <div>
            <p className="mid">
                <a href={'/books/'+this.state.id+'.html'} className="yellow shadow">{this.state.title}</a>
            </p>
        </div>
        <div> <p className="mid">{this.state.author}</p> </div>
        <div> <p className="mid">收录时间：{this.state.purchdate}</p> </div> </div>
      </div >
    );

    }
}

export default RandomBookSlide;
