import React,{useState} from 'react'
import {ChromePicker} from 'react-color'

function ColorPickerC() {
    
    const [color, setColor] = useState('#fff');
    const [showColorPicker, setshowColorPicker] = useState(false);

    return (
      <div>
        <button
          onClick={() =>
            setshowColorPicker(showColorPicker => !showColorPicker)
          }
        >
          {showColorPicker ? "Close Color Picker" : "Pick a color"}
        </button>
        {showColorPicker && (
          <ChromePicker
            color={color}
            onChange={updatedColor => setColor(updatedColor.hex)}
          />
        )}
            {
                showColorPicker? <h2>Selected {color}</h2> : null
        }
      </div>
    );
}

export default ColorPickerC
