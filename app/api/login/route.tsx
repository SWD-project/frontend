import { setAccessToken } from '@lib/handler/user-cookie'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest): Promise<NextResponse> {
  const body: any = await req.json()
  try {
    // const res = await login({
    //     email: body.email,
    //     password: body.password
    // })
    // const accessToken : string = res.body.data.customerLogin.accessToken
    // setAccessToken(accessToken, cookies())
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
