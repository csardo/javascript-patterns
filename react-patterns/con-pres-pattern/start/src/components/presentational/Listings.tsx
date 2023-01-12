import React from 'react';
import { Listing } from './Listing';
import { ListingsGrid } from './ListingsGrid';

export default function Listings() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('https://house-lydiahallie.vercel.app/api/listings')
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  if (!data) return null;

  return (
    <ListingsGrid>
      {data.listings.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}
