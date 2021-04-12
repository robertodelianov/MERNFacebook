import PassportJwt from 'passport-jwt';
import mongoose from 'mongoose';

import keys from './config.js';

const opts = {};
opts.jwtFromRequest = PassportJwt.ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;
const User = mongoose.model("users");

export default (passport) => {
  passport.use(new PassportJwt.Strategy(opts, (jwt_payload, done) => {
    User.findById(jwt_payload.id)
      .then( (user) => {
        if(user){
          return done(null, user);
        }
        return done(null, false);
      })
      .catch( (err) => console.log(err));
    })
  )
};
