import { useState } from 'react';
 
 function LikeButton() {
   const [liked,setLiked] = useState(false);
 
   return (
     <div>
       {/* <p>Count: {count}</p> */}
       <button onClick={() => setLiked(!liked)}>{liked ? "❤️ Liked" : "♡ Like"} </button>
     </div>
   );
 }

 export default LikeButton