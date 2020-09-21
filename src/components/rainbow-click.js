import React, { useState } from "react";

function RainbowClick() {
  // Array destructuring demo:
  // const fruit = ["kiwi", "apple", "banana"];
  // const [fruit1, fruit2, fruit3] = fruit;
  // console.log(fruit1, fruit2, fruit3);

  const [numClicks, setNumClicks] = useState(0);
  const [playerName, setPlayerName] = useState("Default Name");
  // const [playerInventory, setPlayerInventory] = useState([]);
  // const [playerStats, setPlayerStats] = useState({
  //   age: 18,
  //   score: 0,
  // });

  const onButtonClick = (event) => {
    console.log(event.target.innerHTML);
    setNumClicks(numClicks + 1);

    // Don't try to mutate the state directly, use the setter:
    // numClicks += 1;
  };

  const onNameInputChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setPlayerName(value);
  };

  const hue = numClicks * 15;
  const textStyle = {
    backgroundColor: `hsl(${hue}, 100%, 30%)`,
    color: "white",
    padding: "1rem",
  };

  return (
    <main>
      <h1>Clicky State Demo</h1>
      <div>
        <input type="text" value={playerName} onChange={onNameInputChange} />
      </div>
      <div>
        {/* Applying style this way is useful for dynamic styles, e.g.
            styles that change with the state */}
        <p style={textStyle}>
          {playerName}, you've clicked {numClicks} number of times.
        </p>
        <button onClick={onButtonClick}>Click Me 👆🏽</button>
      </div>
    </main>
  );
}

export default RainbowClick;
