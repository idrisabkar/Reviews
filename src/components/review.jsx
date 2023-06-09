import { Profile } from './profile'
import { PersonName } from './name'
import { Job } from './job'
import { Text } from './text'
import { NextPrevious } from './next-previous'
import { Button } from './button'

export function Review() {
  return (
    <div id="review-container">
      <Profile />
      <PersonName />
      <Job />
      <Text />
      <NextPrevious />
      <Button />
    </div>
  )
}
