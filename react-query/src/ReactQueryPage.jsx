
import React from 'react'

import { usePostQuery } from './Hooks/usePost'

const ReactQueryPage = () => {

    const {data, isError, isLoading, error, refetch} = usePostQuery()

    if(isLoading) {
        return <h1>로딩중....</h1>
    }

    if(isError) {
        return <h1>{error.message}</h1>
    }

    return (
        <div>{data.map((item)=>(
            <div>{item.title}</div>
        ))}
        
        <button onClick={refetch}>다시 가져오기</button>
        </div>
    )
}

export default ReactQueryPage