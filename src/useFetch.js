import { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(null)
    const [data, setData] = useState(null)

    useEffect(() => {
        //console.log('okay')

        fetch(url)
            .then(res => {
                //console.log(res)
                if (res.ok !== true) {
                    throw Error('Failed to get any data from resource')
                }

                return res.json()
            })
            .then(data => {
                setData(data)
                setIsLoading(false)
                setIsError(false)
            })

            .catch(err => {

                console.log(err.message)
                setIsError(err.message)
                setIsLoading(false)

            })

    }, [url])

    return { data, isLoading, isError }
}

export default useFetch;