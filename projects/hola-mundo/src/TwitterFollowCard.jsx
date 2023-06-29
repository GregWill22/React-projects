import './App.css'
import { useState } from 'react';
export function TwitterFollowCard({userName,  children, formatUserName, initialIsFollowing}) {

    const [isFollowing, setFollowing] =  useState(initialIsFollowing);


    const text = isFollowing ? "Siguiendo" : "Seguir";

    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following'
    : "tw-followCard-button"

    const handleClick = ()=> {
        setFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header '>
                <img 
                className='tw-followCard-avatar '
                alt = "El perfil" 
                src= {`https://unavatar.io/instagram/${userName}`}></img>
                <div className='tw-followCard-info '> 
                    <span className='tw-followCard-text'>{children}</span>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                <span className='tw-followCard-text'>{text}</span>
                <span className='tw-followCard-stopFollow'>Dejar de seguir</span>               
                 </button>
                
            </aside>
        </article>
    )
}