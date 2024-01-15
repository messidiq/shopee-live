//install "npm i uuid axios@^1.6.4 readline-sync ws"

const axios = require("axios");
const { v4: uuidv4 } = require('uuid');
const readlineSync = require('readline-sync');
const WebSocket = require("ws");

const activeConnections = [];

const sleep = (ms) => {
    var stop = new Date().getTime();
    while (new Date().getTime() < stop + ms) { }
};

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const connectWebSocket = (link, index) => {
    const ws = new WebSocket(link);

    ws.on('open', () => {
        console.log(`WebSocket ${index + 1} connected`);
        activeConnections.push(ws);
    });

    ws.on('error', (error) => {
        console.error(`WebSocket ${index + 1} encountered an error, attempting to reconnect...`);
        setTimeout(() => connectWebSocket(link, index), 1000);
    });
}

const connectRandomWebSockets = async (websocketList) => {
    const numberOfConnections = getRandomInt(1, websocketList.length);

    const randomIndexes = [];
    while (randomIndexes.length < numberOfConnections) {
        const randomIndex = getRandomInt(0, websocketList.length - 1);
        if (!randomIndexes.includes(randomIndex)) {
            randomIndexes.push(randomIndex);
        }
    }

    randomIndexes.forEach((index) => {
        connectWebSocket(websocketList[index], index);
    });
}

(async () => {
    let connList = [];
    let axiosLive = axios.create({
        baseURL: "https://live.shopee.co.id/api/v1",
        headers: {
            'Host': "live.shopee.co.id",
            'Content-Type': 'application/json',
            'User-Agent': 'ShopeeID/3.15.24 (com.beeasy.shopee.id; build:3.15.24; iOS 16.6.1) Alamofire/5.0.5 language=id app_type=1 Cronet/102.0.5005.61'
        },
    });

    const session = readlineSync.question('[=>] Masukkan Session ID Live : ');
    const count = readlineSync.question('[=>] Masukkan Jumlah Max View : ');

    for (let i = 0; i < count; i++) {
        try {
            let data = { "is_boost": false, "recommendation_extra": "{\"rrkpos\":\"\",\"from_source\":\"share\",\"scene\":\"\",\"ques\":\"\"}", "joinv2_watch_id": "5AF65F15-2479-4DAF-9A06-AB2CDA248B98", "need_follow_session": true, "uuid": "A9C8924D3F3947B6ACE6196CF96C8DAA" };
            await axiosLive
                .post(`/session/${session}/joinv2`, JSON.stringify(data))
                .then((response) => {
                    let usersig = response.data.data.usersig;
                    let session_id = response.data.data.session.session_id;
                    let conn_ts = response.data.data.timestamp;
                    let uid = uuidv4();

                    console.log(`[!] Generate ID : ${uid}`);
                    connList.push(`wss://live.shopee.co.id/im/v1/comet?conn_ts=${conn_ts}&device_id=${uid}&session_id=${session_id}&usersig=${usersig}&version=v2`);
                })
                .catch((error) => {
                    console.log(error.toString());
                });
        } catch (error) {
            console.log(error.toString());
        }
        sleep(500);
    }

    let randomSleep = getRandomInt(60000, 100000); // random 1 - 1.5 minutes, change this if you want in milliseconds

    while (true) {
        await connectRandomWebSockets(connList);
        await new Promise(resolve => setTimeout(resolve, randomSleep))
        console.log('[!] Done sending views, terminating connections...');
        activeConnections.forEach(ws => ws.terminate());
    }
})();