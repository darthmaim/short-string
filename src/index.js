import factory from './factory';

// Re-export the factory
export { factory };

// These are the safe first characters for css identifiers
export const DEFAULT_CHARACTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

// All following chars can also contain these
export const DEFAULT_CHARACTERS_EXTRA = DEFAULT_CHARACTERS + '0123456789-_';

// Create a default encoder
const shortString = factory(DEFAULT_CHARACTERS, DEFAULT_CHARACTERS_EXTRA);

// Export default shortString function
export default shortString;
