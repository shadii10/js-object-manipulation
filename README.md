# js-object-manipulation

# Sculpture List Lengths

This project processes a list of sculptures and creates an object containing the length of each string property for every sculpture.

## Output Structure

The `sculptureListLengths` object contains the length of each string property for every sculpture in the list. Here's an example of the first sculpture's data:

```javascript
{
  name: 26,        // Length of "Homenaje a la Neurocirugía"
  artist: 20,      // Length of "Marta Colvin Andrade"
  description: 198, // Length of the description string
  url: 31,         // Length of the URL string
  alt: 90          // Length of the alt text string
}
```

## Complete Example Output

Here's what the complete `sculptureListLengths` object looks like:

```javascript
{
  0: {
    name: 26,
    artist: 20,
    description: 198,
    url: 31,
    alt: 90
  },
  1: {
    name: 17,
    artist: 17,
    description: 168,
    url: 33,
    alt: 98
  },
  2: {
    name: 16,
    artist: 21,
    description: 286,
    url: 31,
    alt: 82
  },
  3: {
    name: 4,
    artist: 14,
    description: 151,
    url: 33,
    alt: 89
  },
  4: {
    name: 9,
    artist: 21,
    description: 189,
    url: 33,
    alt: 95
  },
  5: {
    name: 13,
    artist: 16,
    description: 249,
    url: 33,
    alt: 89
  },
  6: {
    name: 9,
    artist: 23,
    description: 95,
    url: 33,
    alt: 86
  },
  7: {
    name: 11,
    artist: 20,
    description: 264,
    url: 33,
    alt: 85
  },
  8: {
    name: 14,
    artist: 14,
    description: 221,
    url: 31,
    alt: 89
  },
  9: {
    name: 15,
    artist: 16,
    description: 307,
    url: 33,
    alt: 85
  },
  10: {
    name: 7,
    artist: 15,
    description: 285,
    url: 33,
    alt: 89
  },
  11: {
    name: 6,
    artist: 10,
    description: 89,
    url: 31,
    alt: 85
  }
}
```

## How to Run

1. Make sure you have Node.js installed
2. Run the script using:
   ```bash
   node sculptureScript.js
   ```

## Data Structure

The script processes the `sculptureList` array from `data.js` and creates a new object where:
- Each sculpture is stored at its index position
- Each property (name, artist, description, url, alt) contains the length of its string value
- The structure maintains the same keys as the original data but with length values instead of strings
