import React, { useState, useEffect } from 'react';
import Journals from './Journals';
// import Comments from '../comments/Comments';

const JournalItem = ({ journal }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getComments(journal.id);
    //eslint-disable-next-line
  }, []);

  const getComments = async id => {
    setLoading(true);
    const res = await fetch(`journal/${id}/comments`);
    const data = await res.json();

    setComments(data);
    setLoading(false);
  };

  return (
    <li>
      <h3>{journal.title}</h3>
      <ul>
        <li>
          {!loading && comments.length === 0 ? (
            <p>No comments to show...</p>
          ) : (
            comments.map(comment => <li>{comment.text}</li>)
          )}
        </li>
      </ul>
    </li>
  );
};

export default JournalItem;
