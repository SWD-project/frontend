import { FetcherProps } from "@lib/fetcher";
import { fetcher } from '@lib/fetcher';

export const useSignup = async ({firstName, lastName, email, password, redirectTo} : {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    redirectTo: string
}) => {
    const fetcherProps : FetcherProps = {
        method: "POST",
        body: {
            firstName,
            lastName,
            email,
            password,
            redirectTo
        }
    }
    const data = await fetcher("/api/signup", fetcherProps)
    return data
}