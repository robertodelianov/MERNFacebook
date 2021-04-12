import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { ValidateRegistrationInput } from '../validation/Registration.js';
import { ValidateLoginInput } from '../validation/Login.js';
import User from '../models/User.js';

import keys from '../config.js';

export const createUser = (req, res) => {
  const { errors, isValid } = ValidateRegistrationInput(req.body);

  if(!isValid){
    return res.status(201).json(errors);
  };

  User.findOne({ email: req.body.email })
    .then( (user) => {
      if(user){
        return res.status(201).json({ email: 'Email already exists'});
      }else {
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save()
              .then( (user) => res.json(user))
              .catch( (err) => console.log(err));
          });
        });
      }
    });
};

export const loginUser = (req, res) => {
    const { errors, isValid } = ValidateLoginInput(req.body);

    if(!isValid){
      return res.status(201).json(errors);
    };

    User.findOne({ email: req.body.email })
      .then( (user) => {
        if(!user){
          return res.status(201).json({ email: "User not found !"});
        }
        bcrypt.compare(req.body.password, user.password)
          .then( (isMatch) => {
            if(isMatch){
              const payload = {
                id: user.id,
                username: user.username
              };
              jwt.sign(payload, keys.secretOrKey,{expiresIn: 31556926}, (err, token) => {
                res.json({
                  success:true,
                  token: "Bearer " + token
                });
              });
            }else{
              return res.status(201).json({ password: "Password incorrect !"})
            }
          });
      });
};
