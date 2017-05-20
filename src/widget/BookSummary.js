import React, {Component} from 'react';

class BookSummary extends Component {
  state={};

  componentDidMount() {
    fetch('http://api.rsywx.com/book/summary')
      .then(response => {
        return response.json();
      })
      .then(json => {
        let summary=json.out.summary[0];
        let last=json.out.last[0];
        let formatter=new Intl.NumberFormat('en-US', {
          minimumFractionDigits: 0,
        });

        let pcd=new Date(last.purchdate);
        let y=pcd.getFullYear();
        let m=String(pcd.getMonth()+1).padStart(2,'0');
        let d=String(pcd.getDate()).padStart(2, '0');

        this.setState({
          bc: formatter.format(summary.bc),
          wc: formatter.format(summary.wc),
          pc: formatter.format(summary.pc),
          purchdate: y+"年"+m+"月"+d+"日",
          id: last.bookid,
          title: last.title,
          author: last.author,

        });
      });

  }
  render() {
    let now=new Date();
    return (
      <div className="col-md-3 feature">
          <h3><a href="/books/list"><i className="glyphicons book"></i>藏书</a></h3>
          <p>截止{now.getFullYear()}年{String((now.getMonth()+1)).padStart(2,'0')}月{String(now.getDate()).padStart(2,'0')}日，任氏有无轩藏书{this.state.bc}本。约{this.state.wc}千字，计{this.state.pc}页。</p>
      <p>
      最近（{this.state.purchdate}）收藏/整理的书籍是<strong>{this.state.author}</strong>的<strong><a href={"/books/"+this.state.id+".html"}>《{this.state.title}》</a></strong>。</p>

      </div>

    );
  }
}

export default BookSummary;
