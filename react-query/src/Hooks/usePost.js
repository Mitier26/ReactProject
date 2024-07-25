import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const fetchPost = () => {
    // queryData는 queryFn 에는 자동으로 전달한다
    // const id = queryData.queryKey[1]
    // 아래있는 queryKey의 매개변수의 1번째 것

    // 함수는 작동하고자하는 api 호출 명령을 넣는다.
    return axios.get(`http://localhost:5000/posts/`)
}

export const usePostQuery = () => {
    return useQuery({
        queryKey: ['posts'], // 키는 캐싱을 위해 사용한다
        // api 호출에 이름을 지정한다.
        // 이름을 이용해 데이터를 가지고 온다..
        // 이름은 유일한 이름이어야 한다.
        queryFn: () => fetchPost(),
        retry: 1,
        select: (data) => {
            return data.data;
        },
        enabled: true, // 초기에 api를 호출할지 선택한다 false는 초기에 호출하지 않는다
        staleTime: 5000, // 신선한 상태를 유지하는 시간, stale 되기 전 시간
        gcTime: 5000, // 기본값 5분
        refetchOnMount: true, // 다시 접속시 api 호출 할지 안 할지 정한다
        refetchOnWindowFocus: true // 윈도우 창을을 돌아 오면 api를 호출한다
    })
}

