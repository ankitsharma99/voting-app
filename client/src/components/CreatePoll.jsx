import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { createPoll } from "../store/actions";

class CreatePoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      options: [""],
    };

    this.handleChange = this.handleChange.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addAnswer() {
    this.setState({ options: [...this.state.options, ""] });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleAnswer(e, index) {
    const options = [...this.state.options];
    options[index] = e.target.value;
    this.setState({ options });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPoll(this.state);
  }

  render() {
    const options = this.state.options.map((options, i) => (
      <Fragment key={i}>
        
        <label className='form-label'>option</label>
        <input
          placeholder='Click Add options to create a new option'
          className='form-input'
          type='text'
          value={options}
          onChange={(e) => this.handleAnswer(e, i)}
        />
      </Fragment>
    ));
    return (
      <div>
        <div className='createPollTitle'>
          Create a Poll here, You can add as many options as you want!
        </div>
        <form className='form' onSubmit={this.handleSubmit}>
          <label className='form-label' htmlFor='question'>
            Question
          </label>
          <input
            placeholder='Enter your question here'
            className='form-input'
            type='text'
            name='question'
            value={this.state.question}
            onChange={this.handleChange}
          />
          {options}
          <div className='button_center'>
            <button className='button' type='button' onClick={this.addAnswer}>
              Add options
            </button>
            <button className='button' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(() => ({}), { createPoll })(CreatePoll);
