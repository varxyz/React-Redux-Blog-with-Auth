import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { PostBody } from './styled/Layout';
import { fetchSingle, deletePost } from '../actions';

class PostShow extends Component {
  componentDidMount() {
    if (!this.props.post) {
      this.props.fetchSingle(this.props.params.id);
    }
  }

  render() {
    const { post } = this.props;
    if (post) {
      return (
        <PostBody>
          <h3>
            {post.title}
            {this.props.authenticated
              ? <div >
                <Link to={`/edit/${post.titleUrl}`}>
                  <button className="btn  pull-xs-right btn-secondary ">
                      Edit
                    </button>
                </Link>
                <button
                  onClick={() => {
                    this.props
                        .deletePost(this.props.post._id)
                        .then(() => browserHistory('/posts'));
                  }}
                  className="btn btn-danger pull-xs-right btn-secondary "
                >
                    Delete
                  </button>
              </div>
              : null}
          </h3>
          {post.body}
        </PostBody>
      );
    }
    return <PostBody>Loading</PostBody>;
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post, authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps, { fetchSingle, deletePost })(PostShow);
