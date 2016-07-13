import React, {Component, PropTypes} from 'react';
import createFragment from 'react-addons-create-fragment';

class ControllableCustomRadio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event);
    }
    this.setState({
      value: event.target.value
    });
  }

  render() {
    let children = {};
    const value = this.props.value || this.state.value;
    React.Children.forEach(this.props.children, (child, i) => {
      const label = (
        <label style={{marginRight: '10px'}} key={i}>
          <input type="radio" name={this.props.name} value={child.props.value} checked={child.props.value === value}
                 onChange={this.handleChange}/>
          {child.props.children}
        </label>
      );
      children[`label${i}`] = label;
    });
    return <div>{createFragment(children)}</div>;
  }
}

ControllableCustomRadio.propTypes = {
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.array
};

export default  ControllableCustomRadio;
