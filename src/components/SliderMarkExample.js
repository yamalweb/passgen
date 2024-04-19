import {
    Slider,
    SliderMark,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
} from '@chakra-ui/react'

import { useState } from 'react'

function SliderMarkExample({ onChangeSlider }) {
    const [sliderValue, setSliderValue] = useState(8)

    return (
        <div style={{ margin: 40 }}>
            <Slider
                aria-label="slider-ex-6"
                onChange={(val) => {
                    setSliderValue(val)
                    onChangeSlider(val)
                }}
                defaultValue={8}
                min={6}
                max={16}
            >
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
            </Slider>
        </div>
    )
}

export default SliderMarkExample
