import factory from './factory';

// These are the safe first characters for css identifiers
const defaultCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

// All following chars can also contain these
const defaultCharactersExtra = defaultCharacters + '0123456789-_';

// Create a default encoder
const shortString = factory(defaultCharacters, defaultCharactersExtra);

export default shortString;
