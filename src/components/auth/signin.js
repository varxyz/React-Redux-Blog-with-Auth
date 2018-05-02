import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { signin } from '../../actions';
import { AuthBody } from '../styled/Layout';

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

class Signin extends Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit({ email, password }) {
    this.props.signin({ email, password });
  }
  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="aler alert-danger">
          <strong>{this.props.errorMessage}</strong>
        </div>
      );
    }
    return null;
  }
  render() {
    return (
      <AuthBody>
        <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
          <h3>Sign In</h3>
          <div className="form-group has-danger">
            <div>
              <Field
                name="email"
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
                name="password"
                component={renderInput}
                type="password"
                className="form-control"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Sign In</button>
          <Link className="btn btn-danger" to="/posts">Cancel</Link>
          {this.renderAlert()}
        </form>
      </AuthBody>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

const Form = reduxForm({
  form: 'UserForm',
})(Signin);

export default connect(mapStateToProps, { signin })(Form);
