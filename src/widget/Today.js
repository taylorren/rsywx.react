import React, {Component} from 'react';

class Today extends Component {
  state={today: ''};

  componentDidMount() {
    fetch('http://api.rsywx.com/book/ofDay')
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          today: json.out,
        });
      })
  };


  render() {
    let today=this.state.today;
    return (

      <div className="widewrapper">
        <div className="container content">
            <div className="row">
                <div className="col-sm-12">
                    <div className="showroom-controls">
                        <div className="links">历史上的收藏</div>
                    </div>
                    <div className="row cropping">
                      <div className="showroom-item blog-item col-sm-12">
                        <p>历史上的{String(new Date().getMonth()+1).padStart(2, '0')}月{String(new Date().getDate()).padStart(2, '0')}日，任氏有无轩主人购买和/或登录了{this.state.today.length}本书。它们是：</p>
                        <div>
                          {

                            Object.keys(today).map(function (key) {
                              var item=today[key];
                              return (
                                <span key={item.bookid}>
                                  <a href={"/books/"+item.bookid+".html"}>{item.title}</a>（{item.fromnow}年前）&nbsp;&nbsp;
                                </span>
                              );
                            })
                          }
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
    </div>
  );
  }
}

export default Today;
