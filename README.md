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
