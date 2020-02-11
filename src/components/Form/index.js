import React from "react";
import { StyledForm } from "./styles";
import Field from "../Field";
import VCard from "../VCard";
import testPerson from "../Person/person.json";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        firstName: "",
        lastName: "",
        title: "",
        email: "",
        mobile: "",
        direct: "",
        location: ""
      },
      formFilled: false,
      formPartiallyFilled: false,
      infoDisplay: false
    };
    this.vCardRef = React.createRef();
    this.handleFormFilled = this.handleFormFilled.bind(this);
    this.handleValue = this.handleValue.bind(this);
    this.handleTestFill = this.handleTestFill.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handlePaste = this.handlePaste.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  scrollToBottom() {
    window.scroll({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  }
  handleTestFill(e) {
    e.preventDefault();
    if (!this.state.formPartiallyFilled) {
      this.setState(prevState => ({
        ...prevState,
        formFilled: true,
        formPartiallyFilled: true,
        person: testPerson
      }));
    }
  }
  handleClearForm(e) {
    e.preventDefault();
    if (this.state.formPartiallyFilled) {
      this.setState(
        prevState => ({
          ...prevState,
          formFilled: false,
          formPartiallyFilled: false,
          infoDisplay: false,
          person: {
            firstName: "",
            lastName: "",
            title: "",
            email: "",
            mobile: "",
            direct: "",
            location: ""
          }
        }),
        () => {
          this.vCardRef.current.updateEmployee();
          this.vCardRef.current.animToBack();
        }
      );
    }
  }
  handleClear(e) {
    const fieldId = e.target.parentNode.firstChild.id;
    this.setState(
      prevState => ({
        ...prevState,
        infoDisplay: false,
        person: {
          ...prevState.person,
          [fieldId]: ""
        }
      }),
      () => {
        this.handleFormFilled();
      }
    );
    e.target.parentNode.firstChild.focus();
  }
  handleFormFilled() {
    this.state.person.firstName ||
    this.state.person.lastName ||
    this.state.person.title ||
    this.state.person.email ||
    this.state.person.mobile ||
    this.state.person.direct ||
    this.state.person.location
      ? this.setState({ formPartiallyFilled: true })
      : this.setState({ formPartiallyFilled: false });

    this.state.person.firstName &&
    this.state.person.lastName &&
    this.state.person.title &&
    this.state.person.email &&
    this.state.person.mobile &&
    this.state.person.direct &&
    this.state.person.location
      ? this.setState({ formFilled: true })
      : this.setState({ formFilled: false });
  }
  handlePaste(e) {
    e.preventDefault();
    e.persist();
    let validatedData = "";
    switch (e.target.type) {
      case "tel":
        if (e.clipboardData.types.indexOf("text/plain") > -1) {
          let oldData = e.clipboardData.getData("text/plain");
          validatedData = oldData.replace(/\D/g, "");
          e.target.value = validatedData;
          this.handleValue(e);
        }
        break;
      case "text":
        if (e.clipboardData.types.indexOf("text/plain") > -1) {
          let oldData = e.clipboardData.getData("text/plain");
          validatedData = oldData.replace(/[^a-zA-Z]/g, "");
          e.target.value = validatedData;
          this.handleValue(e);
        }
        break;
      default:
        break;
    }
  }
  handleValue(e) {
    let validatedValue = "";
    switch (e.target.type) {
      case "tel":
        let num = e.target.value.replace(/[^\d]/, "");
        validatedValue = num;
        if (num.length > 10) {
          validatedValue = num.replace(/\D/g, "");
        }
        if (num.length === 10) {
          const parts = num.match(/^\(?(\d{3})\D*(\d{3})\D*(\d{4})$/);
          validatedValue = `(${parts[1]}) ${parts[2]}-${parts[3]}`;
        }
        break;
      case "text":
        validatedValue = e.target.value.replace(/[^\D]/, "");
        break;
      default:
        validatedValue = e.target.value;
        break;
    }
    const fieldId = e.target.id;
    this.setState(
      prevState => ({
        ...prevState,
        person: {
          ...prevState.person,
          [fieldId]: validatedValue
        }
      }),
      () => {
        this.handleFormFilled();
      }
    );
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      infoDisplay: true
    });
    this.vCardRef.current.updateEmployee();
    this.scrollToBottom();
  }
  render() {
    const fieldProps = [
      {
        id: "firstName",
        type: "text",
        icon: "person",
        label: "First Name",
        maxLength: "20",
        value: this.state.person.firstName
      },
      {
        id: "lastName",
        type: "text",
        icon: "person",
        label: "Last Name",
        maxLength: "25",
        value: this.state.person.lastName
      },
      {
        id: "title",
        type: "text",
        icon: "work",
        label: "Title",
        maxLength: "30",
        value: this.state.person.title
      },
      {
        id: "email",
        type: "email",
        icon: "mail_outline",
        label: "email",
        maxLength: "50",
        value: this.state.person.email
      },
      {
        id: "mobile",
        type: "tel",
        icon: "phone_iphone",
        label: "Mobile",
        maxLength: "10",
        value: this.state.person.mobile
      },
      {
        id: "direct",
        type: "tel",
        icon: "phone",
        label: "Direct",
        maxLength: "10",
        value: this.state.person.direct
      },
      {
        id: "location",
        type: "text",
        icon: "place",
        label: "Location",
        maxLength: "30",
        value: this.state.person.location
      }
    ];
    const fieldArray = [];
    fieldProps.forEach(field => {
      fieldArray.push(
        <Field
          key={field.id}
          id={field.id}
          type={field.type}
          icon={field.icon}
          label={field.label}
          maxLength={field.maxLength}
          value={field.value}
          handleValue={this.handleValue}
          handleClear={this.handleClear}
          handlePaste={this.handlePaste}
        />
      );
    });
    return (
      <div>
        <StyledForm onSubmit={this.handleSubmit} autoComplete="off">
          {fieldArray}
          <div className="button-field">
            <button className={this.state.formFilled ? "active" : "inactive"}>
              Submit
            </button>
            <button
              className={this.state.formPartiallyFilled ? "active" : "inactive"}
              onClick={this.handleClearForm}
            >
              Clear
            </button>
            <button
              className={this.state.formPartiallyFilled ? "inactive" : "active"}
              onClick={this.handleTestFill}
            >
              Test Fill
            </button>
          </div>
        </StyledForm>
        <VCard
          employee={this.state.person}
          display={this.state.infoDisplay}
          ref={this.vCardRef}
        />
        {/* {this.state.formFilled && this.state.infoDisplay ? ( */}
      </div>
    );
  }
}

export default Form;
