import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const CommentBox = async()=>{
   const comments = await prisma.comment.findMany();
   console.log(comments)
    return(
        <div>
           {comments.map(row =>{
            return(
                <div key={row.id} className="text-white">
                    <p>{row.comment}</p>     
                </div>
            )
           })}
            
          
        </div>
    )
}

export default CommentBox