import { createNewCourse } from '@lib/course/create-course'
import { getAccessToken } from '@lib/handler/user-cookie'
import { CreateCourseRequest } from '@lib/model/course/create-course'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body: CreateCourseRequest = await req.json()
    const accessToken = getAccessToken(cookies())
    const res = await createNewCourse(accessToken, body)
    return NextResponse.json(res)
  } catch (error: any) {
    console.log(error)
    return NextResponse.json({ error })
  }
}
