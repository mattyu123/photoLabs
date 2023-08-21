import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavIcon from './FavIcon';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {  
  let displayAlert;

  props.likedPhotos.length >= 1 ? displayAlert = true : displayAlert = false;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
        <div className='top-nav-bar'>
          <TopicList />
          <FavBadge 
          isFavPhotoExist = {displayAlert}
          />
        </div>
    </div>
  )
}

export default TopNavigation;