import { nanoid } from 'nanoid';

import { Formik, Field, Form } from 'formik';

import { InputLabel, OnSubmitFormButton } from './ContactFormStyled';

export const ContactForm = ({ addUserNameAndNumber }) => {
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          id: '',
          number: '',
        }}
        onSubmit={(values, action) => {
          addUserNameAndNumber({
            id: nanoid(),
            name: values.name,
            number: values.number,
          });

          action.resetForm();
        }}
      >
        <Form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <InputLabel>
            Name
            <br />
            <Field
              style={{
                color: '#08aa31c2',
                fontWeight: '700',
                outline: 'none',
                padding: '8px',
                borderRadius: '8px',
                border: '2px solid #eceae254',
                transition: 'border 0.3s ease-in-out',
                background: '#f6c218',
                WebkitBoxShadow: '0 0 0 1000px #f6c218 inset',
                WebkitTextFillColor: '#08aa31c2',
              }}
              onFocus={e => {
                e.target.style.border = '2px solid #00bb31';
              }}
              onBlur={e => {
                e.target.style.border = '2px solid #f6c218';
              }}
              id="name"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Jane Coll"
              required
            />
          </InputLabel>
          <InputLabel>
            Number
            <br />
            <Field
              style={{
                color: '#08aa31c2',
                fontWeight: '700',
                outline: 'none',
                padding: '8px',
                borderRadius: '8px',
                border: '2px solid #eceae254',
                transition: 'border 0.3s ease-in-out',
                background: '#f6c218',
                WebkitBoxShadow: '0 0 0 1000px #f6c218 inset',
                webkitTextFillColor: '#08aa31c2',
                webkitTextFillBorderColor: 'red',
              }}
              onFocus={e => {
                e.target.style.border = '2px solid #00bb31';
              }}
              onBlur={e => {
                e.target.style.border = '2px solid #f6c218';
              }}
              id="number"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              placeholder="+38"
              required
            />
          </InputLabel>

          <OnSubmitFormButton type="submit">ADD CONTACT</OnSubmitFormButton>
        </Form>
      </Formik>
    </>
  );
};

// import * as yup from 'yup';
// const userSchema = yup.object().shape({
//   name: yup
//     .string()
//     .min(4, 'Too Short!')
//     .max(20, 'Too Long!')
//     .trim()
//     .required('Required'),
//   number: yup
//     .string()
//     .min(8, 'Too Short!')
//     .max(20, 'Too Long!')
//     .required('Required'),
// });
// validationSchema={userSchema}
