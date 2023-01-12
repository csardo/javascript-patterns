Enforce separation of concerns by separating the view from the application logic.

Con/Pres = container/presentational pattern.
1. Presentational component = how data is shown
2. Container component = what data is shown

Ex: container component fetches data and presentational component renders it.
```
import React from "react";
import { LoadingListings, Listing, ListingsGrid } from "../components";

function ListingsContainerComponent() {
  const [listings, setListings] = React.useState([]);

  React.useEffect(() => {
    fetch("https://my.cms.com/listings")
      .then((res) => res.json())
      .then((res) => setListings(res.listings));
  }, []);

  return <Listings listings={listings} />;
}

function ListingsPresentationalComponent(props) {
  if (props.listings.length === 0) {
    return <LoadingListings />;
  }

  return (
    <ListingsGrid>
      {listings.map((listing) => (
        <Listing listing={listing} />
      ))}
    </ListingsGrid>
  );
}
```

Pros:
 - Separation of Concerns
 - reusability (for rendering)
 - flexibility (you can alter one without understanding the other)
 - testing (presentation components are usually pure functions - easy testing)

Cons:
 - not necessary with hooks
```
import React from "react";
import useSWR from "swr";
import { LoadingListings, Listing, ListingsGrid } from "../components";

function Listings(props) {
  const {
    data: listings,
    loading,
    error,
  } = useSWR("https://my.cms.com/listings", (url) =>
    fetch(url).then((r) => r.json())
  );

  if (loading) {
    return <LoadingListings />;
  }

  return (
    <ListingsGrid>
      {listings.map((listing) => (
        <Listing listing={listing} />
      ))}
    </ListingsGrid>
  );
}
```