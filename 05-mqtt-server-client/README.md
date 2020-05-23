# Sample MQTT

Playing with publish/subscribe paradigm

## Dependencies

- npm
- nodejs
- command line (bash)
- [mqtt.js](https://github.com/mqttjs/MQTT.js)
- [aedes](https://github.com/mcollina/aedes)

## How to run this

Enter server folder, open terminal and:

```bash
npm install
npm run dev
```
OR
```bash
npm install
nodemon index.js
```

On client folder, open two terminals and:

```bash
npm install
npm run pub
```
OR
```bash
npm install
nodemon publish.js
```

```bash
npm install
npm run sub
```
OR
```bash
npm install
nodemon subscribe.js
```

ESP8266:
Open ArduinoIDE and flash
Check output in terminal

You can open as much clients, either pub or sub as you wish. as long as the
broker remains running the subscribers will get the message.

## Other noteworthy libraries

[mqtt-connection](https://github.com/mqttjs/mqtt-connection)
[mqtt-server](https://github.com/mqttjs/mqtt-server)
[mosca](https://github.com/mcollina/mosca)
