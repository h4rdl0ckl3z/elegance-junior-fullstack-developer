import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prima = new PrismaClient();

// get product
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {      // get by id from params
    const product = await prima.product.findUnique({        // sql select * from product where id
        where: {
            id: Number((await params).id)
        }
    });
    return NextResponse.json(product);  // response json product
}

// update or edit product
export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {      // get by id from params
    const { name, price } = await req.json();       // get name, price request to json
    const product = await prima.product.update({        // sql update name, price from product where id
        where: {
            id: Number((await params).id)
        },
        data: {
            name,
            price
        }
    });
    return NextResponse.json(product);      // response json message
}

// delete product
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {       // get by id from params
    const product = await prima.product.delete({        // sql delete product where id
        where: {
            id: Number((await params).id)
        }
    });
    return NextResponse.json(product);      // response json message
}