basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        . # # # .
        . # # # .
        . . # . .
        `)
    basic.showIcon(IconNames.TShirt)
    music.playMelody("C5 G B A F A C5 B ", 120)
})
