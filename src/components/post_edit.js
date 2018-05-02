import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchSingle, updatePost } from '../actions';
import { PostBody } from './styled/Layout';

const renderInput = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div className="form-group has-danger">
    <div className="form-group has-danger">
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);
const renderArea = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div className="form-group has-danger">
    <div className="form-group has-danger">
      <textarea {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

class PostNew extends Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  componentDidMount() {
    this.props.fetchSingle(this.props.params.id);
  }
  onFormSubmit(props) {
    this.props.updatePost(props, this.props.post._id).then(() => {
      this.props.history.push('/posts');
    });
  }
  render() {
    if (this.props.authenticated && this.props.post) {
      return (
        <PostBody>
          <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
            <h3>Edit post</h3>
            <div className="form-group has-danger">
              <div>
                <Field
                  name="title"
                  component={renderInput}
                  type="text"
                  className="form-control"
                  defaultValue="lop"
                />
              </div>
              <div className="text-help" />
            </div>
            <div className="form-group">
              <div>
                <Field
                  name="body"
                  component={renderArea}
                  type="textarea"
                  className="form-control"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link className="btn btn-danger" to="/posts">Cancel</Link>
          </form>
        </PostBody>
      );
    }
    return (
      <div className="alert alert-danger">Unauthorized. Please log in!</div>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  }
  if (!values.body) {
    errors.body = 'Required';
  }
  return errors;
};

function mapStateToProps(state) {
  if (state.posts.post) {
    return {
      authenticated: state.auth.authenticated,
      post: state.posts.post,
      initialValues: {
        title: state.posts.post.title,
        body: state.posts.post.body,
      },
    };
  }
  return null;
}
const Form = reduxForm({
  form: 'PostNewForm',
  enableReinitialize: true,
  validate,
})(PostNew);

export default connect(mapStateToProps, { fetchSingle, updatePost })(Form);
