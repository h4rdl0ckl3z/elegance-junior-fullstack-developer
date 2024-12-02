import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prima = new PrismaClient();

// get all products
export async function GET() {
    const products = await prima.product.findMany();        // sql select * from product
    return NextResponse.json(products);     // response json all products
}

//  create product
export async function POST(req: NextRequest) {
    const { name, price } = await req.json();       // get name, price request to json
    const addProduct = await prima.product.create({     // sql insert name, price from product
        data: {
            name,
            price
        }
    });
    return NextResponse.json(addProduct);       // response json create product
}