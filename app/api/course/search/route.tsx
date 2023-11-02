import { searchCourseByName } from '@lib/course/search-course-by-name'
import { SearchCourseRequest } from '@lib/model/course/search-course'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body: SearchCourseRequest = await req.json()
    const res = await searchCourseByName(body)
    return NextResponse.json(res)
  } catch (error: any) {
    console.log(error)
    return NextResponse.json({ error })
  }
}
