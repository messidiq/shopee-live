const product = async (session) => {
    const shopeeApiUrl = "https://live.shopee.co.id/webapi/v1/session/"+session+"/host/items?visible=true&offset=0&limit=100";

    const headers = {
      "accept": "application/json, text/plain, */*",
      "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
      "cache-control": "no-cache",
      "client-info": "platform=9",
      "pragma": "no-cache",
      "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-livestreaming-auth": "ls_web_v1_30001_1703913345_689sxsu9d7c17ztcod41irbutvl0l27px7sa|uZWMaUuB+Q7KkavBk/WLds13IiUFRtXArD1etho3Ihk=",
      "x-ls-sz-token": "BMIqUmOIWgYuv7CliiaCTA==|tw5h8pEnnFb9uYiPM4FPR3drLZEq7glBXahEbg96N/lsJhwVHT6zST6pRHl5vkiHW8Ku76KGO9w=|0zrfDOsO7/htuXJd|08|3",
      "cookie": "G_AUTHUSER_H=0; _gcl_au=1.1.1703206796.1696857220; _fbp=fb.2.1696857221664.1830425768; SPC_CLIENTID=dHh2MUpkM1pSTzF6ajfaqafhkrirqlcy; REC_T_ID=493a7ded-a3ac-11ee-9d59-02f0db6fc892; SPC_SI=KmyBZQAAAAB4YVJtT3RYbAE8VgAAAAAAS1NRQjdlUEQ=; SPC_F=3R9uU1aSEmlpPpNJx7r70oDV8oBickK5; _gid=GA1.3.592374346.1703567093; SPC_U=31429246; SPC_T_ID=oY6cl4gho8Qv/ZQqczq2seh+UeEyVPBIJWKxPnB/fbwj6sUBCyl5TnaBMCJUMrFwiRTXNtoIAkOb551H3yDAgPRJLNpFfkrfZiTCBgKUS0CDcgKzGJaqFXvkdgszshTIq27dFzA4Ca9FawahtVUyVAGbHBvZqoD1drl1ZC9UwpU=; SPC_T_IV=eUV4d3VHanNvOTMzMVo5Mw==; SPC_R_T_ID=oY6cl4gho8Qv/ZQqczq2seh+UeEyVPBIJWKxPnB/fbwj6sUBCyl5TnaBMCJUMrFwiRTXNtoIAkOb551H3yDAgPRJLNpFfkrfZiTCBgKUS0CDcgKzGJaqFXvkdgszshTIq27dFzA4Ca9FawahtVUyVAGbHBvZqoD1drl1ZC9UwpU=; SPC_R_T_IV=eUV4d3VHanNvOTMzMVo5Mw==; SPC_SC_TK=943685b600da3c95f67e8dbde8dc9bf5; SPC_SC_UD=31429246; SPC_STK=fPN0QmyJdXNLkb5ddN2nTmmDhTGhKevcQhrObqz+DhRjuRs57aRh5sgBDZPNmBSNzmgJbTYjVGDwerDSSJFgoM3/pcZki+SgYu0MGx1hiDZgBEqSb2D6zDa2EmT5tks8RtiuMdADZiHrQvBXYwyS48/LREm/v8CiFS2cmGADYiYjRzKtdYF2znhgIAuvY1pT; SC_DFP=EWOXRmHMjdHcOsOBgLFMzLdURGnZhqOt; LIVE_STREAMING_UUID_KEY=y6hMwY4kQ7AdXY0SBrDwquqSHxSvBn6M; _QPWSDCXHZQA=bb2eb2ce-40af-48ee-c583-654a0c8ab7ea; _ga_QMX630BLLS=GS1.1.1703567540.1.1.1703567991.60.0.0; SPC_MTOKEN=; TMP_UID=31429246; SPC_ST=.UE05RjhGMlZQYTVZM3pHQWjBY1b1Dt1Z1csSarbUVpRFSIqr0+XC45QMSeZlBgsUEHPfUon+Xb2yBgB1DbmnqK8JwpjAlbRz0Dmtq3LvfzPJ42OpeSaIjufDy8NEVPBq3oEFg5k5oW4yrLJUvjuk1epUK35CGTE0DTvA009u2Nqo0IACifN4GqrwhrMH61hPCzYrEKtAZMohDYou7fEjjBKGhXSJ2FavdE/ZvxanAlk=; SPC_EC=.UE05RjhGMlZQYTVZM3pHQWjBY1b1Dt1Z1csSarbUVpRFSIqr0+XC45QMSeZlBgsUEHPfUon+Xb2yBgB1DbmnqK8JwpjAlbRz0Dmtq3LvfzPJ42OpeSaIjufDy8NEVPBq3oEFg5k5oW4yrLJUvjuk1epUK35CGTE0DTvA009u2Nqo0IACifN4GqrwhrMH61hPCzYrEKtAZMohDYou7fEjjBKGhXSJ2FavdE/ZvxanAlk=; _ga_8TJ45E514C=GS1.1.1703655007.2.0.1703655007.60.0.0; CTOKEN=D7xzk6VNEe6SZuIxfX7UYg%3D%3D; _med=refer; _med=refer; REC7iLP4Q=c3aa163a-fec5-464a-9445-6934cec9a7b1; ds=f40f8b78fdae91f59e3c90ae052fb6c9; _ga=GA1.3.825616447.1696857221; _ga_SW6D8G0HXK=GS1.1.1703908394.26.1.1703908868.60.0.0; shopee_webUnique_ccd=BMIqUmOIWgYuv7CliiaCTA%3D%3D%7Ctw5h8pEnnFb9uYiPM4FPR3drLZEq7glBXahEbg96N%2FlsJhwVHT6zST6pRHl5vkiHW8Ku76KGO9w%3D%7C0zrfDOsO7%2FhtuXJd%7C08%7C3",
      "Referer": "https://live.shopee.co.id/pc/live?session="+session,
      "Referrer-Policy": "strict-origin-when-cross-origin"
    };

  try {
    const response = await fetch(shopeeApiUrl, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData.data.items
    console.log(); // Handle the API response here
  } catch (error) {
    console.error("Error during fetch:", error);
  }
};

const show = async (session,product) => {
    const shopeeApiUrl = "https://live.shopee.co.id/webapi/v1/session/"+session+"/show";

    const headers = {
        "accept": "application/json, text/plain, */*",
        "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
        "cache-control": "no-cache",
        "client-info": "platform=9",
        "content-type": "application/json",
        "pragma": "no-cache",
        "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-livestreaming-auth": "ls_web_v1_30001_1703916651_rr8d1uws6foxzigfal1yitudt9djvdpnyagw|gb8YmmCdTVojk3qGSY7NorJTaHT+TVa3HsiIEERV22o=",
        "x-ls-sz-token": "BMIqUmOIWgYuv7CliiaCTA==|tw5h8pEnnFb9uYiPM4FPR3drLZEq7glBXahEbg96N/lsJhwVHT6zST6pRHl5vkiHW8Ku76KGO9w=|0zrfDOsO7/htuXJd|08|3",
        "cookie": "G_AUTHUSER_H=0; _gcl_au=1.1.1703206796.1696857220; _fbp=fb.2.1696857221664.1830425768; SPC_CLIENTID=dHh2MUpkM1pSTzF6ajfaqafhkrirqlcy; REC_T_ID=493a7ded-a3ac-11ee-9d59-02f0db6fc892; SPC_SI=KmyBZQAAAAB4YVJtT3RYbAE8VgAAAAAAS1NRQjdlUEQ=; SPC_F=3R9uU1aSEmlpPpNJx7r70oDV8oBickK5; _gid=GA1.3.592374346.1703567093; SPC_U=31429246; SPC_T_ID=oY6cl4gho8Qv/ZQqczq2seh+UeEyVPBIJWKxPnB/fbwj6sUBCyl5TnaBMCJUMrFwiRTXNtoIAkOb551H3yDAgPRJLNpFfkrfZiTCBgKUS0CDcgKzGJaqFXvkdgszshTIq27dFzA4Ca9FawahtVUyVAGbHBvZqoD1drl1ZC9UwpU=; SPC_T_IV=eUV4d3VHanNvOTMzMVo5Mw==; SPC_R_T_ID=oY6cl4gho8Qv/ZQqczq2seh+UeEyVPBIJWKxPnB/fbwj6sUBCyl5TnaBMCJUMrFwiRTXNtoIAkOb551H3yDAgPRJLNpFfkrfZiTCBgKUS0CDcgKzGJaqFXvkdgszshTIq27dFzA4Ca9FawahtVUyVAGbHBvZqoD1drl1ZC9UwpU=; SPC_R_T_IV=eUV4d3VHanNvOTMzMVo5Mw==; SPC_SC_TK=943685b600da3c95f67e8dbde8dc9bf5; SPC_SC_UD=31429246; SPC_STK=fPN0QmyJdXNLkb5ddN2nTmmDhTGhKevcQhrObqz+DhRjuRs57aRh5sgBDZPNmBSNzmgJbTYjVGDwerDSSJFgoM3/pcZki+SgYu0MGx1hiDZgBEqSb2D6zDa2EmT5tks8RtiuMdADZiHrQvBXYwyS48/LREm/v8CiFS2cmGADYiYjRzKtdYF2znhgIAuvY1pT; SC_DFP=EWOXRmHMjdHcOsOBgLFMzLdURGnZhqOt; LIVE_STREAMING_UUID_KEY=y6hMwY4kQ7AdXY0SBrDwquqSHxSvBn6M; _QPWSDCXHZQA=bb2eb2ce-40af-48ee-c583-654a0c8ab7ea; _ga_QMX630BLLS=GS1.1.1703567540.1.1.1703567991.60.0.0; SPC_MTOKEN=; TMP_UID=31429246; SPC_ST=.UE05RjhGMlZQYTVZM3pHQWjBY1b1Dt1Z1csSarbUVpRFSIqr0+XC45QMSeZlBgsUEHPfUon+Xb2yBgB1DbmnqK8JwpjAlbRz0Dmtq3LvfzPJ42OpeSaIjufDy8NEVPBq3oEFg5k5oW4yrLJUvjuk1epUK35CGTE0DTvA009u2Nqo0IACifN4GqrwhrMH61hPCzYrEKtAZMohDYou7fEjjBKGhXSJ2FavdE/ZvxanAlk=; SPC_EC=.UE05RjhGMlZQYTVZM3pHQWjBY1b1Dt1Z1csSarbUVpRFSIqr0+XC45QMSeZlBgsUEHPfUon+Xb2yBgB1DbmnqK8JwpjAlbRz0Dmtq3LvfzPJ42OpeSaIjufDy8NEVPBq3oEFg5k5oW4yrLJUvjuk1epUK35CGTE0DTvA009u2Nqo0IACifN4GqrwhrMH61hPCzYrEKtAZMohDYou7fEjjBKGhXSJ2FavdE/ZvxanAlk=; _ga_8TJ45E514C=GS1.1.1703655007.2.0.1703655007.60.0.0; CTOKEN=D7xzk6VNEe6SZuIxfX7UYg%3D%3D; _med=refer; _med=refer; REC7iLP4Q=c3aa163a-fec5-464a-9445-6934cec9a7b1; ds=f40f8b78fdae91f59e3c90ae052fb6c9; _ga=GA1.3.825616447.1696857221; _ga_SW6D8G0HXK=GS1.1.1703908394.26.1.1703908868.60.0.0; shopee_webUnique_ccd=BMIqUmOIWgYuv7CliiaCTA%3D%3D%7Ctw5h8pEnnFb9uYiPM4FPR3drLZEq7glBXahEbg96N%2FlsJhwVHT6zST6pRHl5vkiHW8Ku76KGO9w%3D%7C0zrfDOsO7%2FhtuXJd%7C08%7C3",
        "Referer": "https://live.shopee.co.id/pc/live?session="+session,
        "Referrer-Policy": "strict-origin-when-cross-origin"
      };

    const body = JSON.stringify({item:JSON.stringify(product)});

    try {
        const response = await fetch(shopeeApiUrl, {
          method: "POST",
          headers: headers,
          body: body
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const responseData = await response.json();
        console.log(responseData); // Handle the API response here
    } catch (error) {
        console.error("Error during fetch:", error);
    }

    // console.log(jsonString);
};

const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

async function main(){
    
    // console.log(data);
    

    const session = 54135878;
    const data = await product(session)

    const i =Math.floor(Math.random() * 3);

    show(session,data[i])

    const waktu = [180000,60000,360000,600000]
    const a =Math.floor(Math.random() * 4);
    const w =waktu[a];
    console.log(`waktu delay ~> ${(w/1000)/60} menit`);
    await delay(w)
    main()
}

main()




