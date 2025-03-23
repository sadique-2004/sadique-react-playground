import {useEffect, useState} from "react"

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/728424a029e0bd2e1a0ac4cc/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => {
            if (res.conversion_rates) {
                setData(res.conversion_rates)
            } else {
                console.error('Invalid API response', res)
            }
        })
        .catch((error) => {
            console.error('Error fetching currency info:', error)
        })
    }, [currency])
    
    return data
}

export default useCurrencyInfo;