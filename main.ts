function SetLed (Led: string, OnOff: number) {
    radio.sendValue(Led, OnOff)
    serial.writeValue(Led, OnOff)
}
radio.setGroup(223)
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        for (let index2 = 0; index2 <= 4; index2++) {
            led.plot(index2, index)
            while (!(input.buttonIsPressed(Button.A))) {
                if (input.buttonIsPressed(Button.B)) {
                    SetLed("" + index2 + index, 1)
                }
                if (input.logoIsPressed()) {
                    SetLed("" + index2 + index, 0)
                }
                basic.pause(100)
            }
            basic.pause(100)
            led.unplot(index2, index)
        }
    }
})
