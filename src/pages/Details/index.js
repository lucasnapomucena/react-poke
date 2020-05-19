import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../services/api';
import { Container } from './styles';

export default class Details extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        person: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    person: [],
  };

  async componentDidMount() {
    const { match } = this.props;
    const personId = decodeURIComponent(match.params.person);

    const response = await api.get(`/pokemon/${personId}`);

    const data = {
      ...response.data,
    };

    this.setState({
      person: [data],
    });
  }

  render() {
    const { person } = this.state;

    return (
      <Container>
        {person.map((p) => (
          <div className="row" key={p.id}>
            <figure>
              <img
                src={`https://pokeres.bastionbot.org/images/pokemon/${p.id}.png`}
                alt={p.name}
                width="150"
                height="150"
              />
            </figure>
            <div>
              <span>
                <strong>Nome</strong>
                {p.name}
              </span>
              <span>
                <strong>ID</strong>
                {p.id}
              </span>
              <span>
                <strong>Experiência</strong> {p.base_experience}
              </span>
              <span>
                <strong>Tamanho</strong>
                {p.height}
              </span>
              <span>
                <strong>Peso</strong>
                {p.weight}
              </span>
              <span>
                <Link to="/">Voltar</Link>
              </span>
            </div>
          </div>
        ))}
      </Container>
    );
  }
}
