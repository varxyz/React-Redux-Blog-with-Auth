import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { createPost } from '../actions';
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
  onFormSubmit(props) {
    this.props.createPost(props).then(() => {
      this.props.history.push('/posts');
    });
  }
  render() {
    if (this.props.authenticated) {
      return (
        <PostBody>
          <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
            <h3>Create post</h3>
            <div className="form-group has-danger">
              <div>
                <Field
                  name="title"
                  component={renderInput}
                  type="text"
                  className="form-control"
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

const Form = reduxForm({
  form: 'PostNewForm',
  validate,
})(PostNew);

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToProps, { createPost })(Form);
