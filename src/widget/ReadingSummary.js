import React, {Component} from 'react';

class ReadingSummary extends Component {
  state={};

  componentDidMount(){
    fetch("http://api.rsywx.com/reading/summary")
      .then(response => {
        return response.json();
      })
      .then(json => {
        let summary=json.out.summary;
        let last=json.out.last;
        let book=json.out.book;
        let rd=new Date(last.datein);
        let y=rd.getFullYear();
        let m=String(rd.getMonth()+1).padStart(2, '0');
        let d=String(rd.getDate()).padStart(2, '0');


        this.setState({
          summary: summary,
          datein: y+"年"+m+"月"+d+"日",
          id: book.bookid,
          title: book.title,
          URI: last.URI,
          reviewTitle: last.title,
        });
      });
  }
  render() {
    let now=new Date();
    return (
    <div className="col-md-3 feature">
        <h3><a href="/books/readings"><i className="glyphicons tags"></i>读书</a></h3>
        <p>截至{now.getFullYear()}年{String(now.getMonth()+1).padStart(2, '0')}月{String(now.getDate()).padStart(2, '0')}日，任氏有无轩主人撰写了{this.state.summary}篇评论。</p>
<p>最近（{this.state.datein}）评论的书籍是<strong><a href={"/books/"+this.state.id+".html"}>《{this.state.title}》</a></strong>，题为<strong>“<a href={this.state.URI}>{this.state.reviewTitle}</a>”</strong>。</p>


    </div>
  )}

}

export default ReadingSummary;
