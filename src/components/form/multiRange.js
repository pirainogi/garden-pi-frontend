import React from 'react'

const MultiRange = ({
  min = 0,
  max = 100,
  step = 1,
  minValue,
  minName,
  onMinChange,
  maxValue,
  maxName,
  onMaxChange
}) => {
  const handleMinChange = e => {
    if (e.target.value <= maxValue) {
      onMinChange(e)
    }
  }
  const handleMaxChange = e => {
    if (e.target.value >= minValue) {
      onMaxChange(e)
    }
  }

  return (
    <section className="range-slider">
      <span className="range-slider__label">{minValue}</span>
      <div className="range-slider__sliders">
        {/* <span className="range-slider__min" style={{ left: "10%" }} />
        <span className="range-slider__max" style={{ left: "20%" }} />
        <progress min={min} max={max}></progress> */}
        <input value={minValue} name={minName} onChange={handleMinChange} min={min} max={max} step={step} type="range" />
        <input value={maxValue} name={maxName} onChange={handleMaxChange} min={min} max={max} step={step} type="range" />
      </div>
      <span className="range-slider__label">{maxValue}</span>
    </section>
  )
}

export default MultiRange
