import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { areComsLoading, loadComments, selectAllComs } from "../../features/Comments/CommentsSlice";
import Comment from "../Comment/Comment";
import './CommentsList.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function CommentsList ({permalink, id, num_comments}) {
    const dispatch = useDispatch();
    let allComs = useSelector(selectAllComs);
    const isLoading = useSelector(areComsLoading);

    useEffect(() => {    
                dispatch(loadComments([permalink, id]))
   
    }, [dispatch, id, permalink])


    if (!isLoading && allComs.length === 0){
        return (<div>No comments yet.</div>)
    }

    let rows = []

    for (let i = 0; i < num_comments; i++) {
        rows.push(i);
    }

    return (
        <div>
            {   isLoading ?
                rows?.map((row) => {
                    return (
                        <div className="comment">
                            <div className="comment-metadata">
                            <p><Skeleton /></p>
                            </div>
                            <p><Skeleton count={3}/></p>
                        </div>
                    )
                })
                :
                allComs[id]?.map((comment) => {
                    return <Comment key={comment.id} comment={comment}/>
                })
            }
        </div>
    )
}