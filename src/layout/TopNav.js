import React, {Component} from 'react';

class TopNav extends Component{
  render() {
	let active=this.props.active;
    return (
		<header>
        <nav className="navbar navbar-default grove-navbar" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <a href="#" className="grove-toggle" data-toggle="collapse" data-target=".grove-nav">   <i className="glyphicons show_lines"></i>  </a>
                    <a href="/" className="navbar-brand"><img src="/img/logo.png" alt="任氏有无轩" /></a>
                </div>

                <div className="collapse navbar-collapse grove-nav">
                    <ul className="nav navbar-nav">
                        <li className={active==="0"?"active":""}>
                            <a href="/">首页</a>
                        </li>
                        <li className={active==="1"?"active":""}>
                            <a href="/books/list">藏书</a>
                        </li>
                        <li className={active==="2"?"active":""}>
                            <a href="/books/readings">读书</a>
                        </li>
                        <li>
                            <a href="https://rsywx.net/wordpress">博客</a>
                        </li>
                        <li>
                            <a href="http://www.rsywx.com">维客</a>
                        </li>
                        <li className={active==="99"?"active":""}>
                            <a href="/contact">联系我</a>
                        </li>
                    </ul>
                </div>
                {/*<!-- /.navbar-collapse -->*/}
            </div>
        </nav>
    </header>

    );
  }

}

export default TopNav;
