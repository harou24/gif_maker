import { FileInput } from 'grommet';
import React from 'react'

const InputFile = () => {
  return (
    <FileInput
        name="file"
        onChange={event => {
            const fileList = event.target.files;
            for (let i = 0; i < fileList.length; i += 1) {
              const file = fileList[i];
              console.log("FILE=>", file)
            }
        }}
    />
  )
}

export default InputFile