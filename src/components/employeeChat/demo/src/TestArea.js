import React, { Component } from "react";
import "../assets/styles/";

class TestArea extends Component {
  render() {
    return (
      <div className="demo-test-area--wrapper">
        <div className="demo-test-area--title">
          <div
            style={{ marginTop: "100px" }}
            className="demo-test-area--title-main"
          >
            Emergency Client Incident Response / Intervention d'urgence des
            clients en cas d'incident
          </div>
          <div className="demo-test-area--title-sub">
            You are chatting live with a client / Vous discutez en direct avec
            un client
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
            placeholder="Enter Message / Entrer un message"
          />
          <button className="demo-test-area--button"> Send / Envoyer </button>
        </form>
      </div>
    );
  }
}

export default TestArea;
