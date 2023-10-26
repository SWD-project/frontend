import { updateCourseStatus } from '@lib/course/update-course-status'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest): Promise<NextResponse> {
  const body = await req.json()
  try {
    const res = await updateCourseStatus(body)
    return NextResponse.json(res)
  } catch (error: any) {
    console.log(error)
    return NextResponse.json({ error })
  }
}
