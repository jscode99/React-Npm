import React,{forwardRef} from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

const ColoredComp = () => {
    return <span style={{ color: 'wheat' }} >Hello World</span>
};

const CustomChild = forwardRef((props, ref) => {
    return (
        <div ref={ref} >
            <div>Hello World</div>
            <div>Come on baby</div>
        </div>
    )
})

function ToolTip() {
    return (
      <div>
        <div style={{paddingBottom: "20px"}}>
          <Tippy arrow={false} content="Hello tools">
            <button>Hover</button>
          </Tippy>
        </div>
        <div style={{paddingBottom: "20px"}}>
          <Tippy placement='left' content={<span style={{color: "orange"}}>Colored</span>}>
            <button>Hover</button>
          </Tippy>
        </div>
        <div style={{paddingBottom: "20px"}}>
          <Tippy placement='right' content={<ColoredComp />}>
            <button>Hover</button>
          </Tippy>
        </div>
        <div style={{paddingBottom: "20px"}}>
          <Tippy placement='bottom' content={<ColoredComp />}>
            <CustomChild/>
          </Tippy>
        </div>
      </div>
    );
}

export default ToolTip
