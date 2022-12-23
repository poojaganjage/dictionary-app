import React from 'react';
import './Definition.css';

function Definition({meanings, word}) {
//   const definitions = meanings.map((meaning) => {
//     return meaning.meanings;
//   });
//   console.log(definitions);
//   definitions.map((def) => {
//     def.map((d) => {
//         d.definitions.map((a, index) => {
//             console.log(a.definition);
//             return <p>{a.definition}</p>
//             // return <h6 key={index} style={{color: 'black'}}>{a.definition}</h6>
//         });
//     });
//   })
  return (
    <div className='meanings'>
        {/* audio-------------------- */}
        {meanings[0] && word && (
            <audio 
                style={{backgroundColor: '#fff', borderRadius: 10}} 
                src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio} 
                controls 
            >
                Your browser does not support the audio element.
            </audio>
        )}
        {/* audio-------------------- */}
        
        {word === ' ' ? (
            <span className='subTitle'>Start by typing a word in search</span>
        ) : 
            meanings.map((mean) => 
                mean.meanings.map((item) => 
                    item.definitions.map((def, index) => {
                        console.log(def);
                        return (
                                <div key={index} className='singleMean'>
                                    <b>{def.definition}</b>
                                    <hr style={{backgroundColor: 'black', width: '100%'}} />
                                    {def.example && (
                                        <span><b>Example: </b>{def.example}</span>
                                    )}
                                    {def.synonyms && (
                                        <span><b>Synonyms: </b>{def.synonyms.map((s) => `${s}, `)}</span>
                                    )}
                                </div>
                            )
                    })
                )
            )
        }
    </div>
  );
}
export default Definition;
