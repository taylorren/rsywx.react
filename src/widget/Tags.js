import React, { Component } from 'react';

class Tags extends Component {
    constructor(props) {
        super(props);
        this.state={
            tags: '',
            bookid: ''
        };
    }
    componentDidMount() {
        this.setState({
            bookid: this.props.bookid,
        });
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.bookid===this.props.bookid) {
            
            return;
        }
        
        var URI='http://api.rsywx.com/book/tagsByBookId/'+this.props.bookid;
                
        fetch(URI)
            .then(response => {
                return response.json();
            })
            .then(json => {
                this.setState({
                    tags: json.out,
                    bookid: this.props.bookid
                
                });
            });
    }

    render() {
        let tags=this.state.tags;

        return (
            <div className="feature">
                <div className="icon">
                    <i className="glyphicons tags" />
                </div>
                <div className="text">
                    <h3>TAG</h3>
                    <small>
                        {
                            Object.keys(tags).map(function(tag,i) {
                                
                                
                                return (
                           <span id={"tag-"+tag} key={"tag-"+tag}><a href={"/books/list/tag/"+tags[i].tag}>{tags[i].tag}</a>&nbsp;&nbsp;</span>
                                );
                            })
                        }
                                                
                    </small>&nbsp;&nbsp;
                                            
                    <br />
                </div>
            </div>
        );
    }
}

export default Tags;