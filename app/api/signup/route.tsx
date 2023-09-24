import { createCustomer } from '@lib/customer/create-customer'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body: any = await req.json()
    const res = await createCustomer(body)
    return NextResponse.json({
      res
    })
  } catch (error: any) {
    console.log(error)
    return NextResponse.json({ error })
  }
}
