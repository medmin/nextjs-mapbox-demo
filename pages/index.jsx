import React from 'react';
import dynamic from 'next/dynamic';

const LazyMap = dynamic(() => import('src/map'),
  {
    loading: () => <p>Loading...</p>,
    ssr: false
  }
);

const IndexPage = () => {
  return (
    <LazyMap />
  );
}

export default IndexPage;