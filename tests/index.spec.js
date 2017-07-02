/* eslint-env node, mocha */
import { expect } from 'chai';
import factory from '../src/factory';
import defaultShortString from '../src/index';

const shortString = factory('ab', 'abc');

const tests = [
    'a', 'b',
    
    'aa', 'ab', 'ac',
    'ba', 'bb', 'bc',
    
    'aaa', 'aab', 'aac',
    'aba', 'abb', 'abc',
    'aca', 'acb', 'acc',
    'baa', 'bab', 'bac',
    'bba', 'bbb', 'bbc',
    'bca', 'bcb', 'bcc',

    'aaaa', 'aaab', 'aaac',
    'aaba', 'aabb', 'aabc',
    'aaca', 'aacb', 'aacc',
    'abaa', 'abab', 'abac',
    'abba', 'abbb', 'abbc',
    'abca', 'abcb', 'abcc',
    'acaa', 'acab', 'acac',
    'acba', 'acbb', 'acbc',
    'acca', 'accb', 'accc',
    'baaa', 'baab', 'baac',
    'baba', 'babb', 'babc',
    'baca', 'bacb', 'bacc',
    'bbaa', 'bbab', 'bbac',
    'bbba', 'bbbb', 'bbbc',
    'bbca', 'bbcb', 'bbcc',
    'bcaa', 'bcab', 'bcac',
    'bcba', 'bcbb', 'bcbc',
    'bcca', 'bccb', 'bccc',

    'aaaaa'
];

describe('factory', () => {
    it('should create a encoder for valid alphabets', () => {
        expect(factory('ab', 'abc')).to.be.a('function');
    });

    it('should only allow valid alphabets', () => {
        expect(() => factory()).to.throw();
        expect(() => factory('a')).to.throw();
        expect(() => factory(null)).to.throw();
        expect(() => factory('4', 42)).to.throw();
        expect(() => factory('a', 'b')).to.throw();
    });
})

describe('shortString', () => {
    it('should work', () => {
        tests.forEach((output, input) => {
            expect(shortString(input)).to.equal(output, `Encoding ${input} should return ${output}.`);
        });
    });

    it('should work with default characters', () => {
        expect(defaultShortString(0)).to.equal('a');
        expect(defaultShortString(1234)).to.equal('sE');
    });
})
