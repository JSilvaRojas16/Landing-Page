import React from 'react'
// import '../../css/body/Blog/BlogCard.css'
import '../../../css/body/Blog/BlogCard.css'

export const BlogCard = ({img}) => {
  return (
    <div className='blog-container'>
      <img src={img} />
      <div className="blog-text">
        <p className='date-blog'>May 14, 2020</p>
        <h3>Far far away, behind the word mountains</h3>
        <p className='description-blog'>Vokalia and Consonantia, there live the blind texts. Separated they live.</p>
      </div>

      <div className="footer-blog">
        <p className='read-more'>Read More</p>
        <span className="material-symbols-outlined">arrow_forward_ios</span>
      </div>
    </div>
  )
}
