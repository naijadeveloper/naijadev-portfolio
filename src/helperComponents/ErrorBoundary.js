import { Component } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ErrorBoundary({children}) {
  const location = useLocation();
  const navigate = useNavigate();

  function navigateBack() {
    navigate(location.pathname);
  }

  return (
    <ErrorBoundaryInner 
      location={location}
      navigateBack={navigateBack}
    >
      {children}
    </ErrorBoundaryInner>
  );
}

class ErrorBoundaryInner extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-view">
          <span>😢😭</span>
          <span>I am so sorry.</span>
          <span>Something went super wrong.</span>
          <button onClick={() => {
            this.setState({hasError: false});
            this.props.navigateBack();
          }}>Go Back</button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;