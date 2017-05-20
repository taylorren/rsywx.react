import React, { Component } from 'react';

class ReviewPaginator extends Component {
    render() {
        let prev="";
        let next="";
        if(this.props.page==="1") {
            //Now in the first page
            prev=<a className="disabled" title="上一页">
                    <i className="glyphicons rewind" />
                </a>
        }
        else {
            prev=<a href={"/books/readings/"+(parseInt(this.props.page,10)-1)} title="上一页">
                    <i className="glyphicons rewind" />
                </a>
            
        }

        if(parseInt(this.props.page,10)===this.props.pages){
            //Now in the last page
            next=<a className="disabled" title="下一页">
                    <i className="glyphicons forward" />
                </a>
        }
        else {
            next=<a href={"/books/readings/"+(parseInt(this.props.page,10)+1)} title="下一页">
                    <i className="glyphicons forward" />
                </a>
        }
        return (
            <section id="pagination" className="col-md-12">
                <a href={"/books/readings/1"} title="首页">
                    <i className="glyphicons fast_backward" />
                </a>
                {prev}
                {next}
                <a href={"/books/readings/"+ this.props.pages} title="末页">
                    <i className="glyphicons fast_forward" />
                </a>
            </section>
        );
    }
}

export default ReviewPaginator;