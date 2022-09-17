import { FileInput } from 'grommet';
import React from 'react'
import { useDispatch } from 'react-redux';
import { setFileToProcess } from '../../store/slices';

const InputFile = () => {
  const dispatch = useDispatch()
  return (
    <FileInput
        name="file"
        onChange={event => {
            const fileList = event.target.files;
            for (let i = 0; i < fileList.length; i += 1) {
              const file = fileList[i];
              console.log("FILE=>", file)
            }
            dispatch(setFileToProcess(fileList[0]))
        }}
    />
  )
}

export default InputFile