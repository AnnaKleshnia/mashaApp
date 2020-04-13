import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CommentItem from '../comments/CommentItem';
import { getComments } from '../../actions/commentActions';





const JournalItem = ({journal, comment:{comments, loading}, getComments}) => {
  // const [comments, setComments] = useState([]);
  // const [loading, setLoading] = useState(false);


  // useEffect(() => {
  //   setTimeout(() => { getComments(journal.id) },500)
    
  //   //eslint-disable-next-line
  // }, [journal]);

  // useEffect(() => {
  //  getComments(journal.id)
  //   //eslint-disable-next-line
  // }, []);

 

  // const getComments = async id => {
  //   setLoading(true);
  //   const res = await fetch(`journal/${id}/comments`);
  //   const data = await res.json();

  //   setComments(data);
  //   setLoading(false);
  // };
  

  //  if(loading || comments === null) {
  //    return(<h4>Loading...</h4>)   
  //  }

  return (
   <li>
    <h3 onClick={() =>getComments(journal.id)}>{journal.title}</h3> 
   </li>
    // <li>
    // <h3>{journal.title}</h3>
    //   <ul>
    //     <li>
    //       {!loading && comments.length === 0 ? (
    //         <p>No comments to show...</p>
    //       ) : (
    //         comments.map(comment =>
    //         <CommentItem  comment={comment}/>
    //         )
    //       )}
    //     </li>
    //   </ul>
    // </li>
  );
};

const mapStateToProps = state => ({
  comment: state.comment
})

export default connect(mapStateToProps, { getComments })(JournalItem);