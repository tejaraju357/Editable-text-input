import {useState} from 'react'
import './index.css'
const EditableTextInput = () => {
  const [text, setText] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  const handleButtonClick = () => {
    setIsEditing(!isEditing)
  }

  const handleChange = event => {
    setText(event.target.value)
  }

  return (
    <div className="main-container">
      <div className="card-container">
        <h1>Editable Text Input</h1>
        <div>
          {isEditing ? (
            <input type="text" value={text} onChange={handleChange} />
          ) : (
            <p>{text || 'Click Edit to add text'}</p>
          )}
          <button type="button" onClick={handleButtonClick} className="button">
            {isEditing ? 'Save' : 'Edit'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditableTextInput
