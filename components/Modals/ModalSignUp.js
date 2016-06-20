import React, { Component } from 'react';
import Formsy from 'formsy-react';
import classNames from 'classnames';
import ModalWrapper from './ModalWrapper';
import ModalTextField from './ModalTextField';
import AuthHOC from '../AuthHOC';

class ModalSignUp extends Component {
  componentDidUpdate(props, state, context) {
    const isOpen = this.context.modals.signUp.isOpen;
    const wasOpen = context.modals.signUp.isOpen;

    if (isOpen !== wasOpen && isOpen) {
      this.trackPageView();
    }
  };

  trackPageView() {
    analytics.page('Website', {
      Page: 'Sign Up'
    });
  };

  render() {
    const { auth, modals } = this.context;
    const { status, message, handlePasswordAuth, handleSocialAuth } = auth;
    const isFormInvalid = status !== 'done' && message;

    const inputClassName = classNames({
      'form__input': true,
      'is-invalid': isFormInvalid
    });

    const renderErrorMessage = (message = 'Oops! That email / password combination is not valid.') => (
      <div className="form__message form__error-message">
        <p>{message}</p>
      </div>
    );

    return (
      <ModalWrapper modalName="signUp">
        <div className="modal-box__content">
          <div className="inner">
            <h2>Sign up and start building</h2>
            <p>Build serverless apps on Syncano for free.<br/>Set up your backend in minutes!</p>

            <div className="modal-box__content_form form">
              <Formsy.Form onValidSubmit={(model) => handlePasswordAuth('register', model)}>
                <ModalTextField
                  className={inputClassName}
                  name="email"
                  validations="isEmail"
                  type="email"
                  placeholder="E-mail address"
                  autofocus
                  required
                />
                <ModalTextField
                  className={inputClassName}
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                {isFormInvalid && renderErrorMessage(auth.message)}
                <button
                  className="button button--large button--featured"
                  disabled={status === 'processing' || status === 'done'}
                >
                  Start Building for Free
                </button>
              </Formsy.Form>
            </div>

            <div className="modal-box__content__login-options">
              <h3 className="modal-box__content__login-options__headline">
                <span>or Sign up with</span>
              </h3>
              <div className="modal-box__content__login-options__buttons">
                <ul>
                  <li>
                  <span
                    className="button"
                    onClick={() => handleSocialAuth('google', true)}
                  >
                    <img
                      src={require('./images/google.svg')}
                      alt="Sign up with Google"
                    />
                    <span>Google</span>
                  </span>
                  </li>
                  <li>
                  <span
                    className="button"
                    onClick={() => handleSocialAuth('github', true)}
                  >
                    <img
                      className="github"
                      src={require('./images/github.svg')}
                      alt="Sign up with GitHub"
                    />
                    <span>GitHub</span>
                  </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <footer className="modal-box__footer">
          <div className="modal-box__footer__column">
          <span onClick={modals.logIn.open}>
            Already have an account? <strong>Log in</strong> to your Dashboard.
          </span>
          </div>
        </footer>
      </ModalWrapper>
    );
  };
};

ModalSignUp.contextTypes = {
  auth: React.PropTypes.object,
  modals: React.PropTypes.object
};

export default AuthHOC(ModalSignUp);
