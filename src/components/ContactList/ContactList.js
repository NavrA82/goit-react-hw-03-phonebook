import PropTypes from 'prop-types';

import { ContactsListStyle, DelButton, WrapperLi } from './ContactListStyled';

export const ContactsList = ({ filteredContacts, onDelete }) => {
  return (
    <>
      <ContactsListStyle>
        {filteredContacts.map(contact => (
          <WrapperLi key={contact.id}>
            <p>{contact.name}:</p>
            <p>{contact.number}</p>
            <DelButton onClick={() => onDelete(contact.id)}>Del</DelButton>
          </WrapperLi>
        ))}
      </ContactsListStyle>
    </>
  );
};

ContactsList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  filteredContacts: PropTypes.array.isRequired,
};
