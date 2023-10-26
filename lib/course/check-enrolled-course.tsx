import { FetcherProps, fetcher } from '@lib/fetcher'
import { ResponseBody, errorResponse } from '@lib/model'
import { CheckEnrolledRequest, CheckEnrolledResponse } from '@lib/model/enrolledCourse/check-enrolled'

export const CheckEnrolledCourse = async (
  accessToken: string,
  request: CheckEnrolledRequest
): Promise<ResponseBody<CheckEnrolledResponse>> => {
  try {
    const fetcherProps: FetcherProps = {
      method: 'POST',
      headers: {
        Authorization: accessToken,
      },
      body: request
    }
    const res = await fetcher(`${process.env.BACKEND}/enrolled-course/get-by-course`, fetcherProps)
    return res
  } catch (error: any) {
    console.log(error)
    return errorResponse(error.message)
  }
}