import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Layout, { PostsUl } from './styled/Layout';
import { fetchPosts, fetchSingle } from '../actions';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderPosts() {
    console.log(this.props);
    return this.props.posts.map(item => (
      <li key={item._id}>
        <span>
          {new Date(item.time).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </span>
        {'  '}
        <Link
          onClick={() => this.props.fetchSingle(item.titleUrl)}
          to={`posts/${item.title ? item.title
                .replace(/[^\w\s]+/gi, '')
                .replace(/[\W_]+/gi, '-')
                .toLowerCase() : null}`}
        >
          <strong>{item.title}</strong>
        </Link>
      </li>
    ));
  }
  render() {
    return (
      <Layout>
        <PostsUl clasName="list-group">
          {this.renderPosts()}
        </PostsUl>
      </Layout>
    );
  }
}
function mapStateToProps(state) {
  return { posts: state.posts.all, post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPosts, fetchSingle })(IndexPage);
