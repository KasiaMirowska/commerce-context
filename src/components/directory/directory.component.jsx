import React, {useContext} from 'react';
import DirectoryContext from '../../context/directory.context';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';


const Directory = () => {
  const directory = useContext(DirectoryContext)
  console.log(directory, directory.sections,  '?????')
  return (
  <div className='directory-menu'>
    {directory.sections.length > 0 ? 
    directory.sections.map(({id, ...otherProps}) => (
      <MenuItem key={id} {...otherProps} />
    ))
    :
    null
  }
  </div>
)};



export default Directory;
