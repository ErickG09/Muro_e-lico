import { PrismaClient } from "@prisma/client";

let prisma;

if (process.env.NODE_ENV === "development") {
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }

    prisma = global.prisma;
}else if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
}else {
    prisma = new PrismaClient();
}



export default prisma;