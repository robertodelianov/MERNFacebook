import Validator from 'validator';
import isEmpty from 'is-empty';

export function ValidateRegistrationInput(data) {
  let errors = {};
  data.username = !isEmpty(data.username) ? data.username : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if(Validator.isEmpty(data.username)){
    errors.username = 'Username is required';
  };

  if(Validator.isEmpty(data.email)){
    errors.email = 'Email is required';
  }else if (!Validator.isEmail(data.email)){
    errors.email = 'Email is invalid';
  };

  if(Validator.isEmpty(data.password)){
    errors.password = 'Password is required';
  };

  if(Validator.isEmpty(data.password2)){
    errors.password2 = 'Password confirmation is required';
  };

  if(!Validator.isLength(data.password, { min: 6, max: 24 })){
    errors.password = 'Password must be between 6 and 24 symbols';
  };

  if(!Validator.equals(data.password, data.password2)){
    errors.password2 = 'Passwords must match !';
  };

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
