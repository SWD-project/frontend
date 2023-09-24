import { FetcherProps, fetcher } from "@lib/fetcher";
import { errorResponse } from "@lib/model";
import { CreateUserRequest } from "@lib/model/user/create-user";

export const createCustomer = async (variables: CreateUserRequest) => {
    try {
        const fetcherProps: FetcherProps = {
          method: 'POST',
          body: variables
        }
        const res = await fetcher(`${process.env.BACKEND}/user/create-user`, fetcherProps)
        console.log(res)
        return res
      } catch (error: any) {
        console.log(error)
        return errorResponse(error.message)
      }
}