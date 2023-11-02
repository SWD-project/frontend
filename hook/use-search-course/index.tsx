import { FetcherProps, fetcher } from '@lib/fetcher'
import { ResponseBody } from '@lib/model'
import { SearchCourseRequest, SearchCourseResponse } from '@lib/model/course/search-course'
import { useQuery } from '@tanstack/react-query'

export const useSearchCourse = (variables: SearchCourseRequest): ResponseBody<SearchCourseResponse> => {
  const fetcherProps: FetcherProps = {
    method: 'POST',
    body: variables
  }
  const { data } = useQuery({
    queryKey: [`${JSON.stringify(variables)}`],
    queryFn: () => fetcher('/api/course/search', fetcherProps),
    refetchOnWindowFocus: false
  })
  return data
}


function generateRandomDateTimeString() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = (now.getMonth() + 1).toString().padStart(2, '0'); // Tháng bắt đầu từ 0
  const currentDay = now.getDate().toString().padStart(2, '0');
  const currentHour = now.getHours().toString().padStart(2, '0');
  const currentMinute = now.getMinutes().toString().padStart(2, '0');
  const currentSecond = now.getSeconds().toString().padStart(2, '0');

  const randomString = Math.random().toString(36).substring(2, 8);

  const dateTimeString = `${currentYear}${currentMonth}${currentDay}_${currentHour}${currentMinute}${currentSecond}_${randomString}`;

  return dateTimeString;
}

const randomDateTimeString = generateRandomDateTimeString();
console.log(randomDateTimeString);
