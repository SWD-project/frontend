import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest): Promise<NextResponse> {
  const body: any = await req.json()
  try {
    // const res = await signup({
    //     email: body.email,
    //     firstName: body.firstName,
    //     lastName: body.lastName,
    //     password: body.password,
    //     redirectTo: body.redirectTo
    // })
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
