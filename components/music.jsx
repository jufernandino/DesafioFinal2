import React from 'react'
import PropTypes from 'prop-types'
import './music.css'

const Music = ({ music, remove, favorite }) => {
    return (
        <div className="music"> 
            {/*AREA #TITULO*/}
            <div className="TITLE">
                <p>{music.id}&emsp;</p>
                <div id='container-id'>
                    <p>{music.title}</p>
                    <p>{music.artist}</p>
                </div>
            </div>
            {/*AREA ALBUM*/}
            <div className="ALBUM">
                <p>{music.album}</p>
            </div>
            {/*AREA COM INTERAÇÕES*/}
            <div className="ITERACTIONS">
                <button className='favorite-button' 
                onClick={() => favorite(music.id)}
                style ={{ color: music.favorite? "#3FE168" : ""}}
                >
                <span className="material-symbols-outlined"> favorite </span>
                </button>
                <button className='delete-button' onClick={() => remove(music.id)}>
                <span className="material-symbols-outlined"> delete </span>
                </button>
            </div>
        </div>
    )
} 
Music.propTypes = {
    music: PropTypes.string.isRequired,
    remove: PropTypes.string.isRequired,
    favorite: PropTypes.string.isRequired
}
export default Music;