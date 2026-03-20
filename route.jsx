import  prisma  from '../../../../lib/prisma'
import { NextResponse } from 'next/server';

export async function GET() {

    const userData = await prisma.users.findMany();

     return NextResponse.json({
        status : 200 ,
        message : "get successfully" ,
        payload : userData 
     });
}
export async function POST(request) {

    const body = await request.json();
    const datauser = await prisma.users.create({
        data : {
            name : body.name ,
            email : body.email
        }
    });
    return NextResponse.json({
        status : 201,
        message : "Create successfully" ,
        payload : datauser 
    })
}






