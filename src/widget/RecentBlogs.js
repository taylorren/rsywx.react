import React, { Component } from 'react';

class RecentBlogs extends Component {
    state = { posts: {} };
    componentDidMount() {
        fetch('http://api.rsywx.com/wordpress/recentPosts/4')
            .then(response => {
                return response.json();
            })
            .then(json => {
                this.setState(
                    {
                        posts: json.out
                    });
            });

    }

    render() {
        let posts = this.state.posts;

        return (
            <div className="widewrapper">
                <div className="container content">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="showroom-controls">
                                <div className="links">最近的博客文章</div>
                            </div>
                            <div className="row">
                                {
                                    Object.keys(posts).slice(1,4).map(function (key) {
                                        var item = posts[key];
                                        var pd = new Date(item.post_date);
                                        var pdy = pd.getFullYear();
                                        var pdm = String(pd.getMonth() + 1).padStart(2, '0');
                                        var pdd = String(pd.getDate()).padStart(2, '0');
                                        var puri = "https://rsywx.net/wordpress/" + pdy + "/" + pdm + "/" + pdd + "/" + item.post_name;

                                        var html = item.post_content;
                                        var div = document.createElement("div");
                                        div.innerHTML = html;
                                        var text = div.textContent || div.innerText || "";
                                        
                                        var pattern=/<img.+src=['"]([^'"]+)['"].*>/i;
                                        var res=html.match(pattern);
                                        var img=res[1];
                                        
                                        return (
                                            <div className="showroom-item blog-item col-sm-4" key={key}>
                                                <div className="image">
                                                    <a href={puri}>
                                                        <img src={img}className="img-responsive" alt={item.post_title} title={item.post_title} />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <h3>
                                                        <a href={puri}>
                                                            {item.post_title}</a>
                                                    </h3>
                                                    <span className="meta">发表日期：{item.post_date}</span>
                                                    <span className="preview">{text.substring(0,100)}
                </span>
                                                    <a className="more" href={puri}>浏览全文&nbsp;&nbsp;<span className="red">&raquo;</span></a>
                                                </div>
                                            </div>

                                        );
                                    })
                                }
                            </div>

                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecentBlogs;
