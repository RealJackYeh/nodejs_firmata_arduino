var Board = require('firmata')

Board.requestPort(function(error, port){
	if(error) {
		console.log(error)
		return
	}
	var board = new Board(port.comName)
	board.on("ready", function(){
		var ledOn = true
		board.pinMode(10, board.MODES.OUTPUT)
		setInterval(function() {
			if (ledOn) {
				console.log('ON')
				board.digitalWrite(10, board.HIGH)
			} else {
				console.log("OFF")
				board.digitalWrite(10, board.LOW)
			}
			ledOn = !ledOn
		}, 500)
	})
})
