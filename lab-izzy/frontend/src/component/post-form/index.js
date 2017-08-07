import React from 'react';
import * as util from '../../lib/util.js';

class PostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = props.post ? props.post : {title: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(props){
    if(props.post)
      this.setState(props.post);
  }

  handleSubmit(e){
    e.preventDefault();
    let {onComplete} = this.props;
    console.log('booya');
    let result = onComplete(this.state);
    if(result instanceof Promise){
      result.then(() => this.setState({error: null}))
        .catch(error => {
          util.log('postForm Error: ', error);
          this.setState({error});
        });
    }
  }

  handleChange(e){
    this.setState({title: e.target.value});
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className={util.classToggler({
          'post-form': true,
          'error': this.state.error,
        })}>
        <input
          name='title'
          type='text'
          placeholder='title'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          name='author'
          type='text'
          placeholder='author name'
          value={this.state.author}
          onChange={this.handleChange}
        />
        <input
          name='content'
          type='text'
          placeholder='content'
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type='submit'> {this.props.buttonName} </button>
      </form>
    );
  }
}

export default PostForm;
