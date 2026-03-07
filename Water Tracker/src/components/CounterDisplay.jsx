import React from "react";

const CounterDisplay = React.memo(({ count, goal }) => {
  console.log("CounterDisplay rendered");

  return (
    <div>
      <h3>{count} / {goal} glasses completed</h3>
    </div>
  );
});

export default CounterDisplay;