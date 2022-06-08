import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { areComsLoading, loadComments, selectAllComs } from "../../features/Comments/CommentsSlice";
import { checkForKeyInArrayOfObjects, FilterComsById } from "../../util/helpers";
import Comment from "../Comment/Comment";
import CommentsAreLoading from "../Comment/CommentsAreLoading";
import './CommentsList.css'

export default function CommentsList ({permalink, id}) {
    const dispatch = useDispatch();
    let allComs = useSelector(selectAllComs);
    const isLoading = useSelector(areComsLoading);
    //const [alreadyLoaded, setAlreadyLoaded] = useState(false);

    useEffect(() => {    
                dispatch(loadComments([permalink, id]))
                //setAlreadyLoaded(true);
   
    }, [dispatch, id, permalink])

    /*
    if (alreadyLoaded) {
        allComs = FilterComsById(allComs, id)
        console.log(id)
        console.log(allComs)
    }
    */

    if (isLoading) {
        return (<div>
            <CommentsAreLoading />
            <CommentsAreLoading />
            <CommentsAreLoading />
        </div>)
    }

    else if (allComs.length === 0){
        return (<div>No comment yet.</div>)
    }

    return (
        <div>
            {
                allComs[id]?.map((comment) => {
                    return <Comment key={comment.id} comment={comment}/>
                })
            }
        </div>
    )
}