import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadComments, selectAllComs } from "../../features/Comments/CommentsSlice";
import Comment from "../Comment/Comment";
import './CommentsList.css'

export default function CommentsList ({permalink, id}) {
    const dispatch = useDispatch();
    const allComs = useSelector(selectAllComs);

    dispatch(loadComments)
    useEffect(() => {
        dispatch(loadComments([permalink, id]))
    }, [dispatch])

    return (
        <div>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </div>
    )
}