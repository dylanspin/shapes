let randomId = 0
let timer = 0
let timeSwitch = 10
basic.forever(function () {
    if (timer <= timeSwitch) {
        timer = timer + 1
    } else {
        timer = 0
        randomId = randint(0, 5)
        if (randomId == 0) {
            basic.showIcon(IconNames.Heart)
        } else if (randomId == 1) {
            basic.showIcon(IconNames.SmallHeart)
        } else if (randomId == 2) {
            basic.showIcon(IconNames.Happy)
        } else if (randomId == 3) {
            basic.showIcon(IconNames.Ghost)
        } else if (randomId == 4) {
            basic.showIcon(IconNames.EigthNote)
        } else if (randomId == 5) {
            basic.showIcon(IconNames.Rollerskate)
        } else {
            basic.showIcon(IconNames.Heart)
        }
    }
})
