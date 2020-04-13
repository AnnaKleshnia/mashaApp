import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import JournalItem from './JournalItem';
import Preloader from '../layout/Preloader';
import { getJournals } from '../../actions/journalActions';


const Journals = ({ journal: {journals, loading}, getJournals }) => {
  // const [journals, setJournals] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    getJournals();
    //eslint-disable-next-line
  }, []);

  // const getJournals = async () => {
  //   setLoading(true);
  //   const res = await fetch('/journals');
  //   const data = await res.json();

  //   setJournals(data);
  //   setLoading(false);
  // };

  if(loading || journals === null) {
     return <Preloader />
   }
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

const mapStateToProps = state => ({
  journal: state.journal
})

export default connect(mapStateToProps, { getJournals})(Journals);