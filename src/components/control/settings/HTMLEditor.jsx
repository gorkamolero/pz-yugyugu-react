import React from 'react'
import { FormControl, FormLabel } from '@material-ui/core'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'


function Editor({
  onChange,
  value,
  title
}) {
  const editorconfig = {
    toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList']
  }


  return (
    <div style={{ margin: '16px 0 8px' }}>
      <FormControl component="fieldset">
        <FormLabel style={{ marginBottom: 8 }}>{title}</FormLabel>
        <CKEditor
          editor={ClassicEditor}
          data={value}
          config={editorconfig}
          onChange={(event, editor) => onChange(editor.getData())}
        />
      </FormControl>
    </div>
  )
}

export default Editor