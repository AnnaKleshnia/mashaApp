import React, { useState, useEffect } from 'react';

export const Comments = ({ journal }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getComments();
    //eslint-disable-next-line
  }, []);

  const getComments = async id => {
    setLoading(true);
    const res = await fetch(`/comments`);
    const data = await res.json();

    setComments(data);
    setLoading(false);
  };

  return (
    <div>
      <ul>
        {!loading && comments.length === 0 ? (
          <p>No comments to show...</p>
        ) : (
          comments.map(comment => <li>{comment.journalId}</li>)
        )}
        {/* {comments.map(comment =>
          journal.id === comment.journalId ? (
            <li>{comment.text}</li>
          ) : (
            <p>No comments to show...</p>
          )
        )} */}
      </ul>
    </div>
  );
};

export default Comments;
