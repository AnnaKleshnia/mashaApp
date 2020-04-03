import React, { useState, useEffect } from 'react';
import JournalItem from './JournalItem';

const Journals = () => {
  const [journals, setJournals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getJournals();
    //eslint-disable-next-line
  }, []);

  const getJournals = async () => {
    setLoading(true);
    const res = await fetch('/journals');
    const data = await res.json();

    setJournals(data);
    setLoading(false);
  };
  return (
    <div>
      <ul>
        {!loading && journals.length === 0 ? (
          <p>No journals to show...</p>
        ) : (
          journals.map(journal => (
            <JournalItem journal={journal} key={journal.id} />
          ))
        )}
      </ul>
    </div>
  );
};

export default Journals;
