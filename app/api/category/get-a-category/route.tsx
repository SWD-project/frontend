import { getACategory } from '@lib/category/get-a-category'
import { GetCategoryCourseRequest } from '@lib/model/category/get-category-course'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body: GetCategoryCourseRequest = await req.json()
    const res = await getACategory(body)
    return NextResponse.json(res)
  } catch (error: any) {
    console.log(error)
    return NextResponse.json({ error })
  }
}
