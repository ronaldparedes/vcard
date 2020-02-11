import React from "react";
import FileSaver from "file-saver";

class VCardFileCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.employee.firstName,
      lastName: props.employee.lastName,
      title: props.employee.title,
      email: props.employee.email,
      mobile: props.employee.mobile,
      work: props.employee.direct,
      location: props.employee.location
    };
    this.handleClick = this.handleClick.bind(this);
  }

  updateEmployee = () => {
    this.setState({ ...this.props.employee });
  };

  handleClick(e) {
    e.preventDefault();
    var file = new Blob(
      [
        `BEGIN:VCARD
VERSION:3.0
N:${this.state.lastName};${this.state.firstName};;;
FN:${this.state.firstName} ${this.state.lastName}
TITLE:${this.state.title};
EMAIL;type=INTERNET;type=pref:${this.state.email}
TEL;type=MAIN:${this.state.work}
TEL;type=CELL;type=VOICE;type=pref:${this.state.mobile}
ADR;type=WORK;type=pref:;;;${this.state.location};;;
END:VCARD
`
      ],
      { type: "text/vcard;charset=utf-8" }
    );
    let a = document.createElement("a");
    a.download = `${this.state.firstName}${this.state.lastName}.vcf`;
    a.href = URL.createObjectURL(file);
    var reader = new FileReader();
    if (navigator.userAgent.match("CriOS")) {
      reader.onloadend = e => {
        window.open(reader.result);
      };
      reader.readAsDataURL(file);
    } else if (navigator.userAgent.match(/iPad|iPhone|Android/i)) {
      reader.onload = e => {
        window.location.href = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      FileSaver.saveAs(
        file,
        `${this.state.firstName}${this.state.lastName}.vcf`,
        true
      );
    }
  }
  render() {
    return (
      <div onClick={this.handleClick} className={this.props.className}>
        {this.state.firstName} {this.state.lastName}
      </div>
      // <a href="" onClick={this.handleClick} className={this.props.className}>
      //   {this.state.firstName} {this.state.lastName}
      // </a>
    );
  }
}

export default VCardFileCreator;
