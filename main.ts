input.onButtonPressed(Button.A, function () {
    DLPLmatrix.definitionMatrix(nrMatrix.zentral, HWMatrix.m1, 1)
    DLPLmatrix.schreibeText(
    nrMatrix.zentral,
    "1+3=4",
    0x00ff00,
    false
    )
    lauf = 0
})
input.onButtonPressed(Button.AB, function () {
    lauf = 0
    DLPLmatrix.loescheMatrix(nrMatrix.zentral)
    DLPLmatrix.loescheMatrix(nrMatrix.links)
    basic.showIcon(IconNames.Heart)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString.includes("AB")) {
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_BUTTON_AB,
        EventBusValue.MICROBIT_BUTTON_EVT_CLICK
        )
    } else {
        if (receivedString.includes("A")) {
            control.raiseEvent(
            EventBusSource.MICROBIT_ID_BUTTON_A,
            EventBusValue.MICROBIT_BUTTON_EVT_CLICK
            )
        } else {
            if (receivedString.includes("B")) {
                control.raiseEvent(
                EventBusSource.MICROBIT_ID_BUTTON_B,
                EventBusValue.MICROBIT_BUTTON_EVT_CLICK
                )
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    lauf = 1
})
let lauf = 0
basic.showString("DLPL")
lauf = 0
basic.showIcon(IconNames.Diamond)
radio.setGroup(54)
DLPLmatrix.definitionMatrix(nrMatrix.zentral, HWMatrix.m1, 1)
DLPLmatrix.schreibeText(
nrMatrix.zentral,
"DLPL",
0xff0000,
false
)
basic.forever(function () {
    if (lauf == 1) {
        DLPLmatrix.definitionMatrix(nrMatrix.links, HWMatrix.m2, 2)
        DLPLmatrix.schreibeText(
        nrMatrix.links,
        "Herzlich willkommen in DLPL.",
        0x0000ff,
        true
        )
        basic.pause(3000)
    }
})
