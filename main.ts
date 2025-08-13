/**
 * Cutebot Receiver
 * 
 * This program receives Joystick message from the Joystick transmitter and controls the robot.
 */
radiop.onReceiveJoystickMessage(function (payload) {
    if (radiop.buttonPressed(radiop.JoystickButton.C)) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
    } else if (radiop.buttonPressed(radiop.JoystickButton.D)) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ff00)
        cuteBot.openGripper()
    } else if (radiop.buttonPressed(radiop.JoystickButton.E)) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffff00)
        cuteBot.closeGripper()
    } else if (radiop.buttonPressed(radiop.JoystickButton.F)) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x0000ff)
    } else if (radiop.buttonPressed(radiop.JoystickButton.Logo)) {
        cuteBot.flashUniqueHeadlights()
    } else {
        cuteBot.setUniqueHeadlights()
    }
    cuteBot.controlMotors(payload)
})
cuteBot.setUniqueHeadlights()
cuteBot.setUniqueRunningLights()
cuteBot.init()
