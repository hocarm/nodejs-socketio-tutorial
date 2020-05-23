// // tạo biến mqtt sử dụng các chức năng của module mqtt
// var mqtt = require('mqtt')
// // tạo biến client sử dụng thuộc tính connect để kết nối đến broket MQTT với hostname mqtt://iot.eclipse.org
// var client = mqtt.connect('mqtt://m12.cloudmqtt.com')
// // function có chức năng subscribe 1 topic nếu đã kết nối thành công đến broker
// client.on('connect', function() {
// console.log('Client A connected')
// // client subcribe topic /client-a/sub
// client.subscribe('/client-a/sub')
// })
// // function có chức năng gửi 1 gói tin đễn đến topic đã đăng kí
// client.on('message', function(topic, message) {
// // in ra màn hình console 1 message ở định dạng string
// console.log(message.toString())
// // publish gói tin 'Hello from client A' đến topic /client-b/sub
// client.publish('/client-b/sub', 'Hello from client A')
// // đóng kết nối của client
// client.end()
// })
// console.log('Client A started')
//-----------------
// tạo biến mqtt sử dụng các chức năng của module mqtt
var mqtt = require('mqtt');
// tạo option sử dụng thuộc tính connect để kết nối đến broket MQTT 
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
//     client.subscribe('/client-a/sub', function() {
//         // when a message arrives, do something with it
//         client.on('message', function(topic, message, packet) {
//             console.log("Received '" + message + "' on '" + topic + "'");
//         });
//     });
// function có chức năng subscribe 1 topic nếu đã kết nối thành công đến broker
client.on('connect', function() {
    console.log('Client A connected')
    // client subcribe topic /client-a/sub
    client.subscribe('/client-a/sub')
})
// function có chức năng gửi 1 gói tin đễn đến topic đã đăng kí
client.on('message', function(topic, message) {
    // in ra màn hình console 1 message ở định dạng string
    console.log(message.toString())
    // publish gói tin 'Hello from client A' đến topic /client-b/sub
    client.publish('/client-b/sub', 'Hello from client A')
    // đóng kết nối của client
    client.end()
})
console.log('Client A started')