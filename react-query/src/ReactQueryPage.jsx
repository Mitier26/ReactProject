import { useQuery } from '@tanstack/react-query'
import React from 'react'
import axios from 'axios'

const ReactQueryPage = () => {

    const fetchPost = () => {
        // 함수는 작동하고자하는 api 호출 명령을 넣는다.
        return axios.get("http://localhost:5000/posts")
    }

    const {isLoading ,data, isError, error} = useQuery({
        queryKey:['posts'],
        // api 호출에 이름을 지정한다.
        // 이름을 이용해 데이터를 가지고 온다..
        // 이름은 유일한 이름이어야 한다.
        queryFn: fetchPost,
        retry: 1,
        select:(data) => {
            return data.data;
        },
        staleTime: 5000, // 신선한 상태를 유지하는 시간, stale 되기 전 시간
        gcTime: 5000, // 기본값 5분
    })

    console.log("data", data);

    if(isLoading) {
        return <h1>로딩중....</h1>
    }

    if(isError) {
        return <h1>{error.message}</h1>
    }

    return (
        <div>{data.map((item)=>(
            <div>{item.title}</div>
        ))}</div>
    )
}

export default ReactQueryPage