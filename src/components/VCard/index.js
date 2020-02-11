import React from "react";
import VCardFileCreator from "../VCardFileCreator";
import Logo from "../Logo";
import { StyledContainer, StyledVCardFront, StyledVCardBack } from "./styles";

class VCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: props.employee,
      isFrontSide: false,
      showTooltip: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.animToBack = this.animToBack.bind(this);
    this.vcardFCRef = React.createRef();
  }
  updateEmployee = () => {
    this.setState({
      employee: this.props.employee
    });
    this.vcardFCRef.current.updateEmployee();
  };

  handleClick() {
    this.setState(
      {
        isFrontSide: !this.state.isFrontSide
      },
      () => {
        setTimeout(
          () => {
            this.setState({
              showTooltip: this.state.isFrontSide
            });
          },
          this.state.isFrontSide ? 800 : 0
        );
      }
    );
  }
  animToBack() {
    if (this.state.isFrontSide) {
      this.handleClick();
    }
  }
  render() {
    return (
      <StyledContainer
        style={{
          opacity: this.props.display ? 1 : 0,
          pointerEvents: this.props.display ? "initial" : "none",
          transition: "opacity 400ms ease-in-out"
        }}
      >
        <StyledVCardFront
          className={[
            this.state.isFrontSide ? "" : "rotate-front",
            this.state.showTooltip ? "animTooltip" : ""
          ].join(" ")}
        >
          <div className="left-half">
            <VCardFileCreator
              employee={this.props.employee}
              className="name"
              ref={this.vcardFCRef}
            />
            <div className="tooltip">Download VCard</div>
            <h2>{this.state.employee.title}</h2>
            <h3>
              email:{" "}
              <a href={`mailto:${this.state.employee.email}`}>
                {this.state.employee.email}
              </a>
            </h3>
            <h3>
              direct:{" "}
              <a href={`tel:+1${this.state.employee.direct}`}>
                {this.state.employee.direct}
              </a>
            </h3>
            <h3>
              mobile:{" "}
              <a href={`tel:+1${this.state.employee.mobile}`}>
                {this.state.employee.mobile}
              </a>
            </h3>
            <div className="logo">
              <Logo width={"220"} />
            </div>
          </div>
          <div className="right-half" onClick={this.handleClick}>
            <div className="vrule-1" />
            <div className="vrule-2" />
            <div className="sm-logo">
              <Logo width={"50"} viewBox={"0 0 137 90"} />
            </div>
          </div>
        </StyledVCardFront>
        <StyledVCardBack
          onClick={this.handleClick}
          className={[
            "back",
            this.props.display ? "card-showing" : "",
            this.state.isFrontSide ? "" : "rotate-back"
          ].join(" ")}
        >
          <Logo width={"80%"} fill={"#EEE"} />
        </StyledVCardBack>
      </StyledContainer>
    );
  }
}

export default VCard;
