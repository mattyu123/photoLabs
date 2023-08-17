import React from "react";

import "../styles/TopicList.scss";
import "../styles/TopicListItem.scss"
import TopicListItem from "./TopicListItem";
import topics from "mocks/topics";

const TopicList = () => {
  const topicList = topics.map((topic) => 
    <TopicListItem 
      key={topic.id}
      sampleTitle={topic}
    />
  )
  
  return (
    <div className="top-nav-bar__topic-list">
      {topicList}
    </div>
  );
};

export default TopicList;
