import React, {Component} from 'react';

class ReviewList extends Component {
    constructor(props) {
        super(props);
        this.state= {
            id: '',
            reviews: []
        };
    }

    componentDidMount() {
        let id=this.props.id;
        this.setState(
            {
                id: id
            }
        );
        let uri="http://api.rsywx.com/reading/relatedReview/"+id;
        fetch(uri)
            .then(res => {
                return res.json();
            })
            .then(json => {
                this.setState({
                    reviews: json.out
                });
            })


    }


    render() {
        let reviews=this.state.reviews;
        return (
            <table className="table table-striped table-hover" key={"review-"+this.state.id}>
                <tbody>
                    <tr>
                        <td className="col-md=2"><strong>评论编号</strong></td>
                        <td className="col-md-8"><strong>评论标题</strong></td>
                        <td className="col-md-2"><strong>评论日期</strong></td>
                    </tr>
                    {
                        Object.keys(reviews).map(function(review, index) {
                            return (
                                <tr key={"headlings-"+index}>
                                    <td>{reviews[review].id}</td>
                                    <td><a href={reviews[review].URI}>{reviews[review].title}</a></td>
                                    <td>{reviews[review].datein}</td>
                                </tr>
                            );

                        })
                    }
                </tbody>
            </table>
            
        );
    }

}

export default ReviewList;