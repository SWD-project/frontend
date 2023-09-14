import { FetcherProps, fetcher } from "@lib/fetcher"

export const useLogout = async() => {
    const fetcherProps : FetcherProps = {
        method: "POST"
    } 
    const res = await fetcher("/api/logout", fetcherProps)
    return res
}