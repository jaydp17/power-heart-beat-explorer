import { h, Component } from 'preact';

/**
 * This component can be used to change the body color
 */
export default class BodyColor extends Component {
  static defaultProps = {
    isDark: false,
    lightColor: '#FAFAFA',
    darkColor: '#25394C',
  };

  componentDidMount() {
    document.body.style.backgroundColor = this.props.isDark ? this.props.darkColor : this.props.lightColor;
  }

  componentWillReceiveProps(nextProps) {
    document.body.style.backgroundColor = nextProps.isDark ? nextProps.darkColor : nextProps.lightColor;
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = this.props.lightColor;
  }

  render({ children }) {
    return { children };
  }
}
