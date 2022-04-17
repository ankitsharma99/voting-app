import React from "react";
import { connect } from "react-redux";
import { Pie } from "react-chartjs-2";
import { vote } from "../store/actions";

const color = () => {
  return "#" + Math.random().toString(16).slice(2, 8);
};

const Poll = ({ poll, auth, vote }) => {
  const answers =
    poll.options &&
    poll.options.map((option) => (
      <button
        className='button'
        onClick={() => vote(poll._id, { answer: option.option })}
        key={option._id}
      >
        {option.option}
      </button>
    ));
  const data = poll.options && {
    labels: poll.options.map((option) => option.option),
    datasets: [
      {
        label: poll.question,
        backgroundColor: poll.options.map((option) => color()),
        borderColor: "#323643",
        data: poll.options.map((option) => option.votes),
      },
    ],
  };

  let found = false;
  if (auth.isAuthenticated) {
    let { id } = auth.user; // find this id in the voted array
    const voted = poll.voted; // voted array
    for (let v in voted) {
      if (id === voted[v]) {
        found = true;
      }
    }
  }

  if (auth.isAuthenticated && auth.user.username === "admin") {
    return (
      <div>
        <h3 className='poll-title'>{poll.question}</h3>
        <div className='button_center'>{answers}</div>
        {poll.options && <Pie data={data} />}
      </div>
    );
  } else {
    if (!auth.isAuthenticated) {
      return <div className='auth_vote'>Please login to vote!</div>;
    }
    if (found) {
      return <div className='found'>Already voted, You cannot vote more than once!</div>;
    }
    return (
      <div>
        <div className='found'>
          Please Vote by selecting an option
        </div>
        <h3 className='poll-title'>{poll.question}</h3>
        <div className='button_center'>{answers}</div>
      </div>
    );
  }
};

export default connect(
  (store) => ({
    poll: store.currentPoll,
    auth: store.auth,
  }),
  { vote }
)(Poll);
