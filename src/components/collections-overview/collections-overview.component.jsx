import React, { useContext } from 'react';
import CollectionsContext from '../../context/collections.context';

import CollectionPreview from '../collection-preview/collection-preview.component';
import './collections-overview.styles.scss';

const CollectionsOverview = () => {
  const collections_data = useContext(CollectionsContext);
  const collections = Object.keys(collections_data).map(key => collections_data[key]
  );

  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
};


export default CollectionsOverview;
