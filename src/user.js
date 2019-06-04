// so we built a module that imports from
// other modules, including another module
// we created (config.js)
// below we have 3 functions
// User() is defined as the default export
// and the other two functions are simple NAMED exports
//
import slug from 'slug';
import { apiKey } from './config';
import base64 from 'base-64';

export default function User(name, email, website) {
  return {name, email, website}
}

export function createURL(name) {
  return `${apiKey}/users/${slug(name)}`;
}

export function gravatar(email) {
  const hash = base64.encode(email);
  const photoURL = `https://www.gravatar.com/avatar/${hash}`;
  return photoURL;
}