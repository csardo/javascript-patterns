import React from 'react';
import { LoadingSpinner } from './LoadingSpinner';

export default function withLoader(Element, url) {
  return (props) => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res));
    }, []);

    // in real life, you'd also want to account for if there's been an error
    if (!data) return <LoadingSpinner />;

    return <Element {...props} data={data} />;
  };
}
