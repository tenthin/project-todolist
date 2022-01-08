import React, { useState} from 'react'


const SongList = () => {
    const [songs,setsongs] = useState ([
        {title:'almost home', id:1},
        {title:'memory gostep', id:2},
        {title:'this wild darkness', id:3},
    ]);
    const addSong = () => {
        setsongs([...songs, {title:'new songs', id:4}])
    }
    return ( 
        <div className='song-list'>
            <ul>
                {songs.map(song => {
                    return ( <li key={song.id}>{song.title}</li>)
                })}             
            </ul>
            <button onClick={addSong}>Add a song</button>
        </div>
     );
}
 
export default SongList
