/**
 * Cutebot Receiver
 * 
 * This program receives Joystick message from the Joystick transmitter and
 * 
 * controls the robot.
 */
// Send BotStatus with giraffe+middle C on A, cow+A440 on B (local device only)
input.onButtonPressed(Button.A, function () {
    radiop.sendBotStateTone(4, 10, BeatFraction.Whole)
    radiop.sendBotStateImage(IconNames.Happy)
})
radiop.onReceiveJoystickMessage(function (payload) {
    if (radiop.buttonPressed(payload, radiop.JoystickButton.C)) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
    } else if (radiop.buttonPressed(payload, radiop.JoystickButton.D)) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ff00)
    } else if (radiop.buttonPressed(payload, radiop.JoystickButton.E)) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffff00)
    } else if (radiop.buttonPressed(payload, radiop.JoystickButton.F)) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x0000ff)
    } else if (radiop.buttonPressed(payload, radiop.JoystickButton.Logo)) {
        cuteBot.flashUniqueHeadlights()
    } else {
        cuteBot.setUniqueHeadlights()
        radiop.sendBotStateImage(IconNames.Pitchfork)
    }
    cuteBot.controlMotors(payload)
    radiop.sendBotStateSonar(cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters))
})
input.onButtonPressed(Button.B, function () {
    radiop.sendBotStateTone(4, 10, BeatFraction.Whole)
    radiop.sendBotStateImage(IconNames.Sad)
})
serial.writeLine("== Cutebot Main ==")
cuteBot.setUniqueHeadlights()
cuteBot.setUniqueRunningLights()
cuteBot.init()
