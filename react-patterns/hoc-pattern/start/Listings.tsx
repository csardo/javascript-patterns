import React from 'react';
import { Listing } from './Listing';
import { ListingsGrid } from './ListingsGrid';

export function Listings() {
  const [listings, setListings] = React.useState([]);

  React.useEffect(() => {
    fetch('https://house-lydiahallie.vercel.app/api/listings')
      .then((res) => res.json())
      .then((res) => setListings(res.listings));
  }, []);

  if (!listings.length) return null;

  return (
    <ListingsGrid>
      {listings.map((listing) => (
        <Listing listing={listing} />
      ))}
    </ListingsGrid>
  );
}

export default Listings;
