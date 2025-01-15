import React from 'react'
import MarkdownRender from '../../components/MarkdownRender'
import interview from './interview1.md'

const Interview = () => {
  return (
    <>
        <MarkdownRender content={interview}/>
    </>
  )
}

export default Interview