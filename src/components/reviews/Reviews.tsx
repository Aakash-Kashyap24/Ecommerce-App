import React from 'react'
import ReviewCard from './ReviewCard'
import ReviewForm from './ReviewsForm'

const Reviews = () => {
  return (
    <div className='flex flex-col gap-[30px]'>
      <ReviewForm/>
      <br />
      <ReviewCard/>
      <ReviewCard/>
      <ReviewCard/>
      <ReviewCard/>
      <ReviewCard/>
      <ReviewCard/>
      <ReviewCard/>

    </div>
  )
}

export default Reviews