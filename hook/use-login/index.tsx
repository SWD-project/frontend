import { FetcherProps, fetcher } from "@lib/fetcher"

export const useLogin = async (email: string, password: string) => {
    const fetcherProps: FetcherProps = {
        method: "POST",
        body: {
            email,
            password
        },
    }
    const data = await fetcher("/api/login", fetcherProps)
    return data
}