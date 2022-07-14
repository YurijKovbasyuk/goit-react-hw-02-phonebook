import { Component, Fragment } from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

class Filter extends Component {
  static propTypes = {
    onFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
  };

  render() {
    const { filter } = this.props.filter;
    return (
      <Fragment>
        <p className={css.p}>Find contacts by name</p>
        <input
          className={css.input}
          type="text"
          value={filter}
          onChange={e => {
            this.props.onFilter(e);
          }}
        />
      </Fragment>
    );
  }
}

export default Filter;
