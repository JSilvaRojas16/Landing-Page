import React from 'react'
import { BlogCard } from './BlogCard'
import blog1 from '../../../img/gal_1.jpg'
import blog2 from '../../../img/gal_2.jpg'
import blog3 from '../../../img/gal_3.jpg'
import blog4 from '../../../img/gal_4.jpg'

// import '../../css/body/Blog/Blog.css'
import '../../../css/body/Blog/Blog.css'

export const Blog = () => {
  const blogs = [
    {id: 1,img: blog1},
    {id: 2,img: blog2},
    {id: 3,img: blog3},
    {id: 4,img: blog4}
  ]

  return (
    <section className='container-blog' id='Blog'>
       <div className="header-blog">
        <p>BLOG</p>
        <h2>Blog Posts</h2>
      </div>

        <div className="blogs-wrap">
           {blogs.map((e) => {
            return <BlogCard key={e.id} img={e.img}></BlogCard>
          })}
        </div>
    </section>
  )
}
