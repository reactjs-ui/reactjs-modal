import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ControllableCustomRadio extends Component {
  static propTypes = {
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    name: PropTypes.string,
    children: PropTypes.array
  };

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue
    };
  }

  handleChange = (event) => {
    if (this.props.onChange) {
      this.props.onChange(event);
    }
    this.setState({
      value: event.target.value
    });
  };

  render() {
    const value = this.props.value || this.state.value;
    const children = React.Children.map(this.props.children, (child, i) => {
      return (
        <label style={{marginRight: '10px'}} key={i}>
          <input type="radio" name={this.props.name} value={child.props.value} checked={child.props.value === value}
                 onChange={this.handleChange}/>
          {child.props.children}
        </label>
      );
    });

    return (
      <div>{children}</div>
    );
  }
}

export default ControllableCustomRadio;
