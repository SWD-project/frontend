import { updateCourse } from '@lib/course/update-course'
import { UpdateCourseRequest } from '@lib/model/course/update-course'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body: UpdateCourseRequest = await req.json()
    const res = await updateCourse(body)
    return NextResponse.json(res)
  } catch (error: any) {
    console.log(error)
    return NextResponse.json({ error })
  }
}
