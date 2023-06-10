import { Profile } from './profile'
import { PersonName } from './name'
import { Job } from './job'
import { Text } from './text'
import { NextPrevious } from './next-previous'
import { Button } from './button'
import { jobPosts } from '../data'
import { useState } from 'react'

export function Review() {
  const [postIndex, setPostIndex] = useState(0)
  const post = jobPosts[postIndex]

  function disableButton(buttonId) {
    document.getElementById(buttonId).disabled = true
  }

  function enableButton(buttonId) {
    document.getElementById(buttonId).disabled = false
  }

  function handleNextClick() {
    const newIndex = postIndex + 1

    if (newIndex >= jobPosts.length) {
      disableButton('next')
      setPostIndex(postIndex)
    } else {
      enableButton('next')
      setPostIndex(newIndex)
    }
  }

  function handlePreviousClick() {
    console.log("i've been clicked")
    const newIndex = postIndex - 1

    if (newIndex < 0) {
      disableButton('previous')
      setPostIndex(postIndex)
    } else {
      enableButton('previous')
      setPostIndex(newIndex)
    }
  }

  function handleRandom() {
    const randomNumber = Math.floor(Math.random() * 3)
    setPostIndex(randomNumber)
  }
  const { id, imageSrc, name, job, description } = post
  return (
    <div id="review-container">
      <Profile imageSrc={imageSrc} />
      <PersonName name={name} />
      <Job job={job} />
      <Text description={description} />
      <NextPrevious
        handleNext={handleNextClick}
        handlePrevious={handlePreviousClick}
      />
      <Button handleClick={handleRandom} />
    </div>
  )
}
