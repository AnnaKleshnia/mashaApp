import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import JournalItem from './JournalItem';
import Preloader from '../layout/Preloader';
import { getJournals } from '../../actions/journalActions';

 const Journals = ({ journal: {journals, loading}, getJournals }) => {
  //  const [journals, setJournals] = useState([]);
  //  const [loading, setLoading] = useState(false);

   useEffect(() => {
     getJournals();
     // eslint-disable-next-line
   }, []);


  //  const getJournals = async () => {
  //    setLoading(true);
  //    const res = await fetch('/journals');
  //    const data = await res.json();

  //    setJournals(data);
  //    setLoading(false);
  //  }

   if(loading || journals === null) {
     return <Preloader />
   }
  return ( 
       <ul>    
              {!loading && journals.length === 0 ? ( <p>No journal with this name...</p>) : (journals.map(journal => <JournalItem journal={journal} key={journal.issn}/>))}         
    </ul>  
     )      
};

const mapStateToProps = state => ({
  journal: state.journal
})

export default connect(mapStateToProps, { getJournals })(Journals);
