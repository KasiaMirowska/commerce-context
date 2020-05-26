import {createContext} from 'react';
import SHOP_DATA from './shop.data'
const CollectionsContext = createContext(SHOP_DATA)//shop_data is initial value

export default CollectionsContext;