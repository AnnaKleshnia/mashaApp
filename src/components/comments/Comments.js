import React from 'react';
// import Moment from 'react-moment';
// import commentItem from 'react';
import CommentItem from './CommentItem'

const Comments = ( journal ) => {
  return (
    <li>      
     <CommentItem journal={journal} key={journal.id} />
    </li>
  )
};
export default Comments;

