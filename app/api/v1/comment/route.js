import prisma from "@/src/libs/comment"

export async function POST(request){
   const { comment }= await request.json()
   const data = {comment}

   console.log(data)
   const create = await prisma.Comment.create({ data })
   if(!create) return Response.json({status:400, isCreated : false})
   return Response.json({status:200, isCreated : true})
}