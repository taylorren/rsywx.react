import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';

class MetaData extends Component {
  render(){
    let meta= {
      title: this.props.title,
      
      meta: {
        charset: 'utf-8',
        name: {
          keywords: this.props.keywords||"任氏有无轩",
          description: this.props.description||"任氏有无轩是一个个人藏书、读书、博客、维客网站",
		      viewport: 'width=device-width'
        }
      }
    };
    return (
      <DocumentMeta {...meta} />
    );
  }
}

export default MetaData;
