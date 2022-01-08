import React, { useState} from 'react'
import { v1 as uuidv1 } from 'uuid';
import NewSongForm from './NewSongForm';
uuidv1();

const SongList = () => {
    const [songs,setsongs] = useState ([
        {title:'almost home', id:1},
        {title:'memory gostep', id:2},
        {title:'this wild darkness', id:3},
    ]);
    const addSong = (title) => {
        setsongs([...songs, {title, id:uuidv1() }])
    }
    return ( 
        <div className='song-list'>
            <ul>
                {songs.map(song => {
                    return ( <li key={song.id}>{song.title}</li>)
                })}             
            </ul>
           <NewSongForm addSong={addSong}/>
        </div>
     );
}
 
export default SongList
