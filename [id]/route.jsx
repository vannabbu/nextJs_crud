import prisma from "../../../../../lib/prisma"
import { NextResponse } from 'next/server';


export async function PUT( req , {params}) {
    const {id } = await params ;
    const body = await req.json();

    const data = await prisma.users.update({
        where : {
            id : +id 
        } ,
        data : {
            name : body.name ,
            email : body.email ,
        }
    })

    return NextResponse.json({
        status : 200 ,
        message : "update successfully" ,
        payload : data 
    }) 
}

export async function DELETE(_, { params }) {

    const { id } = await params ;
  
    const data = await prisma.users.delete({
            where : {
                id :+id
            }
        })
        return NextResponse.json({
            status : 200 ,
            message : "delete successfully" ,
    })
}

export async function GET(_, {params}) {
    const { id} = await params ;
    const data = await prisma.users.findUnique({
        where : {
            id : +id 
        }
    })

    return NextResponse.json({
        status : 200 ,
        message : `Get by id ${id} successfully`  ,
        payload : data
    })
    
}