// // tạo biến mqtt sử dụng các chức năng của module mqtt
// var mqtt = require('mqtt')
// // tạo biến client sử dụng thuộc tính connect để kết nối đến broket MQTT với hostname mqtt://iot.eclipse.org
// var client = mqtt.connect('mqtt://iot.eclipse.org')
// // function có chức năng subscribe 1 topic nếu đã kết nối thành công đến broker
// client.on('connect', function() {
// console.log('Client B connected')
// // client subcribe topic /client-b/sub
// client.subscribe('/client-b/sub')
// // publish gói tin 'Hello from client B' đến topic /client-a/sub
// client.publish('/client-a/sub', 'Hello from client B')
// })
// client.on('message', function(topic, message) {
// // in ra màn hình console 1 message ở định dạng string
// console.log(message.toString())
// // đóng kết nối của client
// client.end()
// })
// console.log('Client B started')
var mqtt = require('mqtt');
var options = {
    port: 10769,
    host: 'mqtt://m12.cloudmqtt.com',
    clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
    username: 'aaabhffz',
    password: 'EqeHDNIXNgXz',
    keepalive: 60,
    reconnectPeriod: 1000,
    protocolId: 'MQIsdp',
    protocolVersion: 3,
    clean: true,
    encoding: 'utf8'
};
var client = mqtt.connect('mqtt://m12.cloudmqtt.com', options);
// client.on('connect', function() { // When connected
//     // console.log('connected');
//     console.log('Client A connected');
//     // subscribe to a topic
//     client.subscribe('/client-b/sub', function() {
//         // when a message arrives, do something with it
//         client.on('message', function(topic, message, packet) {
//             console.log("Received '" + message + "' on '" + topic + "'");
//         });
//     });

//     // publish a message to a topic
//     client.publish('/client-a/sub', 'Hello from client B', function() {
//         console.log("Message is published");
//         client.end(); // Close the connection when published
//     });
// });
// console.log('Client B started')

client.on('connect', function() {
    console.log('Client B connected')
    // client subcribe topic /client-b/sub
    client.subscribe('/client-b/sub')
    // publish gói tin 'Hello from client B' đến topic /client-a/sub
    client.publish('/client-a/sub', 'Hello from client B')
})
client.on('message', function(topic, message) {
    // in ra màn hình console 1 message ở định dạng string
    console.log(message.toString())
    // đóng kết nối của client
    client.end()
})
console.log('Client B started')