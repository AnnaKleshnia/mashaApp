import React from 'react';
import Comments from '../comments/Comments'


 
const JournalItem = ({ journal }) => {

  return (
      <li>
      <h4>{journal.title}</h4>
      <ul>
        {journal.comments.map(comment => <Comments key={comment.id} comment={comment}  />) }
      </ul>
      </li>
  )
};
export default JournalItem;