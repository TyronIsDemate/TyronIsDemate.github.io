var client;

var btnPublish = $("#publish-btn")

client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")

client.on("connect", function () {
    console.log("succesfully Connected");
    $('#btn-connect').on('click', function () {
        $("#status").text("The Device is currently Turned ON...")
        $("#status").css("color", "green")
        $("#status").css("font-style", "italic")
        $("#status").css("font-weight", "bold")
        // $("#status").removeClass("alert-warning")
        // $("#status").addClass("alert-success")
        var topic = "tyron/fan/status";
        var message = "turnedOn " + moment().format('MMMM Do YYYY, h:mm:ss a');
        console.log("ON")
        console.log("Published Topic: " + topic + " Message: " + message)
        client.publish(topic, message);
    }); // end connect
    $(".btn-disconnect").click(function () {
        var topic = "tyron/fan/status";
        var message = "turned Off " + moment().format('MMMM Do YYYY, h:mm:ss a');
        client.publish(topic, message);
        $("#status").text("The device is currently turned OFF...")
        $("#status").css("color", "red")
        console.log("OFF")
    })
    $(".btn-1").click(function () {
        var topic = "tyron/fan/status";
        var message = "turned 1 " + moment().format('MMMM Do YYYY, h:mm:ss a');
        client.publish(topic, message);
        $("#status").text("The device is currently turned 1...")
        $("#status").css("color", "blue")
        console.log("1")
    })
    $(".btn-2").click(function () {
        var topic = "tyron/fan/status";
        var message = "turned 2 " + moment().format('MMMM Do YYYY, h:mm:ss a');
        client.publish(topic, message);
        $("#status").text("The device is currently turned 2...")
        $("#status").css("color", "blue")
        console.log("2")
    })
    $(".btn-3").click(function () {
        var topic = "tyr0n/fan/status";
        var message = "turned 3 " + moment().format('MMMM Do YYYY, h:mm:ss a');
        client.publish(topic, message);
        $("#status").text("The device is currently turned 3...")
        $("#status").css("color", "blue")
        console.log("3")
    })


})





