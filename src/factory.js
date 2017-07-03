// Export a factory method that allows passing the alphabets to use
export default function factory(characters, charactersExtra) {
    // The encoding function we use currently requires that the expanded character range
    // starts with the alphabet of the first character.
    if(charactersExtra.indexOf(characters) !== 0) {
        throw new Error("charactersExtra must extend characters");
    }

    // Create a new cache object to lookup reoccurring numbers
    const cache = {};

    // The recursive implementation
    return function shortString(num) {
        // short names are easy
        if(num < characters.length) {
            return characters[num];
        }
        
        // Check the cache for this value
        // This helps to keep the recursion fast, because shortString
        // should always be called with incrementing numbers.
        if(cache[num]) {
            return cache[num];
        }

        // Get the encoding for num - 1
        // This should always be cached
        let short = shortString(num - 1).split('');

        // Find the first character we can increase
        for(let i = short.length - 1; i >= 0; i--) {
            const current = short[i];
            const index = charactersExtra.indexOf(current);

            // Check if we can increase this character
            if((index < characters.length - 1) || (index < charactersExtra.length - 1 && i > 0)) {
                short[i] = charactersExtra[index + 1];
                break;
            } 
            
            // Reset all characters up to the one being incremented
            short[i] = charactersExtra[0];
            
            // if we are at the end we have to prepend a new one
            if(i === 0) {
                short = [charactersExtra[0], ...short];
            }
        }

        // Add to cache and return
        return (cache[num] = short.join(''));
    }
}
