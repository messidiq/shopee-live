// ?WebIdLastTime=1698815624&aid=1988&app_language=id-ID&app_name=tiktok_web&browser_language=id-ID&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F120.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&count=20&device_id=7296357488290448898&device_platform=web_pc&device_type=web_h265&focus_state=true&from_page=search&history_len=6&is_fullscreen=false&is_page_visible=true&keyword=baju&offset=0&os=windows&priority_region=ID&referer=https%3A%2F%2Fwww.tiktok.com%2F&region=ID&root_referer=https%3A%2F%2Fwww.tiktok.com%2F&screen_height=1029&screen_width=1646&tz_name=Asia%2FJakarta&verifyFp=verify_lidulldg_e9RvzGs0_H1Ty_4rrk_AnGs_4iEuosMsgJh6&web_search_code=%7B%22tiktok%22%3A%7B%22client_params_x%22%3A%7B%22search_engine%22%3A%7B%22ies_mt_user_live_video_card_use_libra%22%3A1%2C%22mt_search_general_user_live_card%22%3A1%7D%7D%2C%22search_server%22%3A%7B%7D%7D%7D&webcast_language=id-ID
// fetch("https://www.tiktok.com/api/search/live/full/?WebIdLastTime=1698815624&aid=1988&app_language", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
//     "cache-control": "no-cache",
//     "pragma": "no-cache",
//     "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"Windows\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "cookie": "",
//     "Referer": "https://www.tiktok.com/search/live?lang=id-ID&q=baju&t=1703747659301",
//     "Referrer-Policy": "strict-origin-when-cross-origin"
//   },
//   "body": null,
//   "method": "GET"
// });

const axios = require('axios');
const fs = require('fs');
const { exec } = require('child_process');




function convertCookie(cookies) {
    try {
        return JSON.parse(cookies).map(x => `${x.name}=${x.value}`).join('; ')
    } catch (error) {
        return cookies
    }
}

const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

async function fetchData(word) {
  let cookieString = fs.readFileSync('cookie', 'utf-8')
  let cookie = convertCookie(cookieString)
  let keyword = encodeURIComponent(word)
  const url = 'https://www.tiktok.com/api/search/live/full/?WebIdLastTime=1698815624&aid=1988&app_language=id-ID&app_name=tiktok_web&browser_language=id-ID&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F120.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&count=20&device_id=7296357488290448898&device_platform=web_pc&device_type=web_h265&focus_state=true&from_page=search&history_len=6&is_fullscreen=false&is_page_visible=true&keyword='+keyword+'&offset=0&os=windows&priority_region=ID&referer=https%3A%2F%2Fwww.tiktok.com%2F&region=ID&root_referer=https%3A%2F%2Fwww.tiktok.com%2F&screen_height=1029&screen_width=1646&tz_name=Asia%2FJakarta&verifyFp=verify_lidulldg_e9RvzGs0_H1Ty_4rrk_AnGs_4iEuosMsgJh6&web_search_code=%7B%22tiktok%22%3A%7B%22client_params_x%22%3A%7B%22search_engine%22%3A%7B%22ies_mt_user_live_video_card_use_libra%22%3A1%2C%22mt_search_general_user_live_card%22%3A1%7D%7D%2C%22search_server%22%3A%7B%7D%7D%7D&webcast_language=id-ID';

  const headers = {
    'accept': '*/*',
    'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'cookie': cookie,
    'Referer': 'https://www.tiktok.com/search/live?lang=id-ID&q=baju&t=1703747659301',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  };

  try {
    const response = await axios.get(url, { headers });
    const data = response.data.data
    let i =0
    for (const d of data) {
        let live = JSON.parse(d.live_info.raw_data)
        console.log(`Target ~> ${live.owner.display_id}`);
        runNpmStartCommand(live.owner.display_id);
        await delay(5000)
    }
    // console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

function runNpmStartCommand(user) {
    return new Promise((resolve, reject) => {
        const command = `start cmd /K npm start ${user}`;

        const child = exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                reject(error);
                return;
            }
            if (stderr) {
                console.error(`Stderr: ${stderr}`);
                reject(new Error(stderr));
                return;
            }
            console.log(`Output: ${stdout}`);
            resolve(stdout);
        });

        // Menangani kejadian ketika child process selesai
        child.on('exit', (code) => {
            console.log(`Child process selesai dengan kode: ${code} - username ${user}`);
        });
    });
}
  
// runNpmStartCommand();

fetchData('#gamis100k3pcs');


