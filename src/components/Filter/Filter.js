import PropTypes from 'prop-types';

import { InputLabelFilter } from './FilterStyled';

export const Filter = ({ handleFilterChange }) => {
  return (
    <>
      <InputLabelFilter>
        Find contacts by name
        <br />
        <input
          style={{
            color: '#08aa31c2',
            fontWeight: '700',
            outline: 'none',
            padding: '8px',
            borderRadius: '8px',
            border: '2px solid #eceae254',
            transition: 'background 0.3s ease-in-out',
            background: '#f6c218',
            WebkitBoxShadow: '0 0 0 1000px #f6c218 inset',
            WebkitTextFillColor: '#08aa31c2',
          }}
          onFocus={e => {
            e.target.style.border = '2px solid #00bb31';
          }}
          onBlur={e => {
            e.target.style.border = '2px solid #eceae254';
          }}
          id="find_name"
          type="text"
          name="find_name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Jane Coll"
          required
          onChange={handleFilterChange}
        />
      </InputLabelFilter>
    </>
  );
};

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};
