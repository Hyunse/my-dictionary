import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';

interface IOwnProps {}

interface IStateProps {
  auth: boolean;
}

interface IDispatchProps {}

type IProps = IStateProps & IDispatchProps & IOwnProps & RouteComponentProps;

const requireAuth = (ChildComponent) => {
  class ComposedComponent extends Component<IProps> {
    public componentDidMount() {
      this.shouldNavigateAway();
    }

    public componentDidUpdate() {
      this.shouldNavigateAway();
    }

    public shouldNavigateAway() {
      if (!this.props.auth && this.props.history) {
        this.props.history.push('/login');
      }
    }

    public render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      auth: state.auth.authenticated
    };
  }

  return withRouter(connect(mapStateToProps)(ComposedComponent));
};

export default requireAuth;
