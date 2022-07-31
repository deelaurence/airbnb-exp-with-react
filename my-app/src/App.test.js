// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

const pokemon = ["abu", "shenay", "rill"];
const tagged = pokemon.map((pokes) => {
  return `<p>${pokes}</p>`;
});

console.log(tagged);
