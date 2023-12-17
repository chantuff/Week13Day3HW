const React = require('react');
class Show extends React.Component {
    render () {
        const pokemon = this.props.pokemon;

        return (
            <div>
                <h1>Show Page</h1>
                <p>The {pokemon.name} is {pokemon.color}</p>
                {pokemon.readyToEat ? 'It is ready to eat' : "NOT READY!"}
            </div>

        )
    }
}

module.exports = Show;