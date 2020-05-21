import React, { Component } from 'react';
import { MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container, Form, List } from './styles';
import api from '../../services/api';

export default class Home extends Component {
  state = {
    person: [],
    newPerson: '',
  };

  handleInputChange = (e) => {
    this.setState({
      newPerson: e.target.value,
    });
  };

  handleAddPerson = async (e) => {
    e.preventDefault();

    const { newPerson } = this.state;

    if (newPerson === '') {
      return;
    }
    const response = await api.get(`/pokemon/${newPerson}`);

    const data = {
      ...response.data,
    };

    this.setState({
      newPerson: '',
      person: [data],
    });
  };

  render() {
    const { person, newPerson } = this.state;
    return (
      <Container>
        <Form onSubmit={this.handleAddPerson}>
          <span>Digite o número do Pokémon</span>
          <div>
            <input
              type="text"
              placeholder="Adicionar Pokémon"
              value={newPerson}
              onChange={this.handleInputChange}
            />
            <button type="submit">
              <MdSearch color="#000" size="20" /> Buscar
            </button>
          </div>
        </Form>
        <List />
        <List>
          {person.map((p) => (
            <li key={p.id}>
              <figure>
                <Link to="/">
                  <img
                    src={`https://pokeres.bastionbot.org/images/pokemon/${p.id}.png`}
                    alt={p.name}
                    width="150"
                    height="150"
                  />
                </Link>
              </figure>
              <div>
                <span>
                  <strong>Nome:</strong>
                  {p.name}
                </span>
                <span>
                  <strong>Id:</strong> {p.id}
                </span>
                <span>
                  <strong>Peso:</strong>
                  {p.weight}
                </span>
                <Link to={`/details/${p.id}`}>Detalhes</Link>
              </div>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
