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

const requireAuthHOC = (ChildComponent) => {
  class ComposedComponent extends Component<IProps> {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth && this.props.history) {
        this.props.history.push('/');
      }
    }

    render() {
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

export default requireAuthHOC;
