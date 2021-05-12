import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { findCharactersById } from '../services/avatarApi';

export default class CharacterDetails extends Component {
  state = {
    CharacterObject: {},
    loading: true,
  };

  async componentDidMount() {
    const character = await findCharactersById(this.props.match.params.id);
    this.setState({
      characterObject: character,
      loading: false.valueOf,
    });
  }

  render() {
    const { name, photoUrl, affiliation, allies, enemies } =
      this.state.characterObject;

    return (
      <main className="characterDetails">
        <label>{name}</label>
        <img src={photoUrl} alt={name} />
        <ul>
          <li>{affiliation}</li>
          <li>{allies}</li>
          <li>{enemies}</li>
        </ul>
        <Link to="/">Back to List</Link>
      </main>
    );
  }
}
