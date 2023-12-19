const React = require("react");
const imgsize = {
  width: "50px",
  height: "50px",
};
const pokenum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>Create New Pokemon</h1>
        <form action="/pokemon" method="post">
          Name:
          <input type="text" name="name" />
          <br />
          Select photo:
          <br />
          {pokenum.map((num, index) => {
            return (
              <label key={index}>
                <input
                  type="checkbox"
                  name="img"
                  value={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                    pokenum[num - 1]
                  }.png`}
                />
                <img
                  key={index}
                  style={imgsize}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                    pokenum[num - 1]
                  }.png`}
                />
              </label>
            );
          })}
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

module.exports = New;