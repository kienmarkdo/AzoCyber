import React, { Component } from "react";
import "../assets/styles/index";

class TestArea extends Component {
  render() {
    return (
      <div className="demo-test-area--wrapper">
        <div className="demo-test-area--title">
          <div
            style={{ marginTop: "100px" }}
            className="demo-test-area--title-main"
          >
            Emergency Client Incident Response
          </div>
          <div className="demo-test-area--title-sub">
            You are chatting live with a client
          </div>
        </div>
        <form
          className="demo-test-area"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onMessage(this.textArea.value);
            this.textArea.value = "";
          }}
        >
          <textarea
            ref={(e) => {
              this.textArea = e;
            }}
            className="demo-test-area--text"
            placeholder="Enter Message"
          />
          <button className="demo-test-area--button"> Send Message </button>
        </form>
      </div>
    );
  }
}

export default TestArea;
