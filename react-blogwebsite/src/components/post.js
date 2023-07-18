import React from 'react'
import { Link } from  'react-router-dom';

function Post({img}) {
  return (
    <div className='post'> 
      <img className='postImg' src={img} alt='' />
    <div className='postInfo'>

      <div className='PostCast'>
      <span className='postCast'><Link>Music</Link></span>
      <span className='postCast'><Link>Life</Link></span>
    </div>
    <div>
      <span className='postTitle'><Link> Music is shorthand of emotion</Link></span>
   <hr />
   <span className='postDate'> 1 hour ago</span>
    </div>
    </div>
    <p>Music has the power to unite people, make us feel at peace, make us feel understood; it is something to dance to, bond over,
      and even listen to when alone. Music is not just sound, it is its own language and it communicates so much; it is a beautiful thing.</p>
</div>
  )
}

export default Post;
