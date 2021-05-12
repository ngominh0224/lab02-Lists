import React, { Component } from 'react';
import CharacterList from '../components/avatars/AvatarsList.jsx';
import { findCharacters } from '../services/avatarApi';

export default class AvatarsContainer extends Component {
  state = {
    loading: true,
    characters: [],
  };

  async componentDidMount() {
    const characters = await findCharacters();
    this.setState({
      characters,
      loading: false,
    });
  }

  render() {
    const { loading, characters } = this.state;
    if (loading) return <p>Woops!</p>;
    return <CharacterList characters={characters} />;
  }
}
