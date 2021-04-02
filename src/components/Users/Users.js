import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/img/user.jpg'
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {props.unfollow(u.id)}}>
                                UNfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {props.follow(u.id)}}>
                                follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>name : {u.name}</div>
                        <div>id'шка : {u.id}</div>
                        <div>{ u.status ? <>статус : &sub; {u.status} &sup;</> : <></> }</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users