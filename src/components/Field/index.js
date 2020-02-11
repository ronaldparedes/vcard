import React from "react";
import StyledField from "./styles";

class Field extends React.Component {
  render() {
    return (
      <StyledField>
        <input
          id={this.props.id}
          type={this.props.type}
          minLength="1"
          required
          onChange={this.props.handleValue}
          maxLength={this.props.maxLength}
          onBlur={this.props.handleInput}
          value={this.props.value}
          onPaste={this.props.handlePaste}
        />
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <div className="icon">{this.props.icon}</div>
        <div className="clear" onClick={this.props.handleClear}>
          clear
        </div>
      </StyledField>
    );
  }
}

export default Field;
