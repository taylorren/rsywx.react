import React, {Component} from 'react';

class BlogSummary extends Component {
  state={blog: {}};
  componentDidMount(){
    fetch('http://api.rsywx.com/wordpress/recentPosts/1')
      .then(response => {
        return response.json();
      })
      .then(json => {
        let blog=json.out[0];
        let datein=new Date(blog.post_date);

        let y=datein.getFullYear();
        let m=String(datein.getMonth()+1).padStart(2, '0');
        let d=String(datein.getDate()).padStart(2, '0');
        let h=String(datein.getHours()).padStart(2, '0');
        let min=String(datein.getMinutes()).padStart(2, '0');
        let pubdate=y+"年"+m+"月"+d+"日"+h+"时"+min+"分";
        
        this.setState({
          blog: blog,
          pubdate: pubdate,
          y: y,
          m: m,
          d: d,
        });
      });

  };

  render(){
    return (
      <div className="col-md-3 feature">
          <h3><a href="http://www.rsywx.net/wordpress"><i className="glyphicons pen"></i>博客</a></h3>
          <p>本博客自2003年开始设立。写的少不是因为我不思考。我思考的越多，写下来的就越少。</p>
          <p>最近的文章发布于{this.state.pubdate}，题为“<strong><a href={"https://rsywx.net/wordpress/"+this.state.y+"/"+this.state.m+"/"+this.state.d+"/"+this.state.blog.post_name}>{this.state.blog.post_title}</a></strong>”。 </p>
      </div>
    );
  };
}

export default BlogSummary;
