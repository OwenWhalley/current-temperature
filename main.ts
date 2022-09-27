let Current_Temperature = 0
// Created by: Owen Whalley
// Created on date: 2022/09/27
// 
// Finding current temperature and refreshes every second.
basic.forever(function () {
    Current_Temperature = input.temperature()
    basic.showNumber(Current_Temperature)
    basic.pause(1000)
    basic.clearScreen()
})
