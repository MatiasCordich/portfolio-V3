import React from 'react'
import { StackContainer, StackItem, StackList, StackTitle } from './StackElements'

const Stack = ({title, stacks}) => {
  return (
    <StackContainer>
        <StackTitle>{title}</StackTitle>
        <StackList>
        {stacks.map((stack, index) => (
          <StackItem key={index}>{stack}</StackItem>
        ))}
        </StackList>
    </StackContainer>
  )
}

export default Stack