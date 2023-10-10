import { setAccessToken } from '@lib/handler/user-cookie'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    await setAccessToken('', cookies())
    return NextResponse.json({
      res: {
        message: 'success'
      }
    })
  } catch (error: any) {
    console.log(error)
    return NextResponse.json({ error })
  }
}
