import React from 'react';
import {connect} from 'react-redux';
import PostForm from '../post-form';
import * as util from '../../lib/util.js';
import * as postActions from '../../action/post-actions.js';

class Dashboard extends React.Component {
  componentWillMount(){
    this.props.postsFetch();
  }

  render(){
    return (
      <div className='dashboard'>
        <h2> dashboard </h2>
        <PostForm
          buttonName='create new post'
          onComplete={this.props.postCreate}
        />

        {this.props.posts.map(post =>
          <div key={post._id}>
            {post.title}
            <button
              onClick={() => this.props.postDelete(post)}>
                delete
            </button>
          </div>
        )}
      </div>
    );
  }
}

let mapStateToProps = (state) => ({posts: state.posts});
let mapDispatchToProps = (dispatch) => ({
  postCreate: (post) => dispatch(postActions.postCreateRequest(post)),
  postDelete: (post) => dispatch(postActions.postDeleteRequest(post)),
  postsFetch: () => dispatch(postActions.postsFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
