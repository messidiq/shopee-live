async function addToCart() {
    const url = 'https://shopee.co.id/api/v4/product/get_purchase_quantities_for_selected_model?quantity=1&itemId=9842618280&modelId=44880395253&shopId=72109688';
  
    const headers = {
      "accept": "*/*",
      "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
      "af-ac-enc-sz-token": "pjMZHoMKTgpYaVv45AceDA==|0gaOHeKILGncQmeO8IZmRQP+w/C9RTD+yjx19DgORvPDF+s2yLB5wJ0knrnUOC48d+/vF05UgL2IlA==|lSHceBAOL+07RNA6|08|3",
      "cache-control": "no-cache",
      "if-none-match-": "55b03-7404008ec63e78568f7cc4f6f8a5ecc9",
      "pragma": "no-cache",
      "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-api-source": "pc",
      "x-requested-with": "XMLHttpRequest",
      "x-sap-ri": "6770916511d607102b623f3d0301cc3f9daaef1978af4520430f",
      "x-sap-sec": "WEt+pAE2HLELELELeGEMEL/LeGELEL/LELE0ELELtLILE//2ELE3ELELvdwTjtvLELEUEGEL5LILE0tie6GdozBj0CVa4xULtUwHCyZQEpYv0d2BYe8+Y3b2Rir/yt0lUInZ+3mZ7N1qlewpasz7SSGqn6n20HZUttVkFDnPWxqWrP1TOtMq/3RjuJ4qT7uLSaAWRRzVxkoEza0vFYxyF9iU3rOTrGcU9VBNXdhT35XWVajrHU10lyK3hugb5PCfQ3LDH2AVu3K1R+XsDQmPnhWjfSffnvgkwL+NPEEB8kqiCHMfdyq7IeK/nmTlJOQ1kOx+y2OBl7zXSAVl1o75yA8reQRYTMJGpznI+Jbvzhw3wNRLYnXYFuVnt6YS1Ky1FFTZ7VvLUTxoQKw2NWCCA0vGj0AzmKrWsc0JY/USPisaQ2SdY9mqkSJ2ngpTSxjYj1SyPyDmNQ9VDzgJJOFl1hK5eAKdbHl0TNhZ/4TgpTqAISzDG7xEYlXWEnv4Tk7FMXY8VFwbmR36b19ePRXgWBigZJWKwfDeYkB7BxeeGabSmRSE+b0rWJFuF/l4GTiPs/zbJHOiSVBbrRxd27BY7XBHyqwG6DtwK9RHMTp2ilJX4h3Yo3mLe1yWynzJiV63cbSuxX5Xd8CYusQi3gdsgWzjXPe2OzsbyycG1SOWXF23ym46VngC0A/JKRCRZru0AJMIIHTOz8i0ziqV744X6n3mv/JuY/xKIU393nWSK/vZ8MPqPgB5yKA3BEEpRty6guGq8OEHZZM/LtH4li4S2w7F7UZzMC2jfiaaa77PeNuIC7NuQ/nMELELQqLbQHcCQqnLELELbdjTjtvLELEJELELhLELE2eWfnGqqTiYKd2nOqZkdKUVmUfjSLELE0s1QbKvQo/8ELELELvLHLEMEL/LSLELELvLELEJELELhLELE/Cv86Ey9k3j0yOgfkPaHKYovgToSLELE0cwk03ZkovWELELEK==",
      "x-shopee-language": "id",
      "cookie": "G_AUTHUSER_H=0; _gcl_au=1.1.1703206796.1696857220; _fbp=fb.2.1696857221664.1830425768; csrftoken=bhM789IjxKQTb9Do5CeJepu272ltFJ8N; SPC_CLIENTID=dHh2MUpkM1pSTzF6ajfaqafhkrirqlcy; SPC_IA=1; REC_T_ID=493a7ded-a3ac-11ee-9d59-02f0db6fc892; SPC_SI=KmyBZQAAAAB4YVJtT3RYbAE8VgAAAAAAS1NRQjdlUEQ=; SPC_F=3R9uU1aSEmlpPpNJx7r70oDV8oBickK5; _gid=GA1.3.592374346.1703567093; SPC_U=31429246; SPC_T_ID=oY6cl4gho8Qv/ZQqczq2seh+UeEyVPBIJWKxPnB/fbwj6sUBCyl5TnaBMCJUMrFwiRTXNtoIAkOb551H3yDAgPRJLNpFfkrfZiTCBgKUS0CDcgKzGJaqFXvkdgszshTIq27dFzA4Ca9FawahtVUyVAGbHBvZqoD1drl1ZC9UwpU=; SPC_T_IV=eUV4d3VHanNvOTMzMVo5Mw==; SPC_R_T_ID=oY6cl4gho8Qv/ZQqczq2seh+UeEyVPBIJWKxPnB/fbwj6sUBCyl5TnaBMCJUMrFwiRTXNtoIAkOb551H3yDAgPRJLNpFfkrfZiTCBgKUS0CDcgKzGJaqFXvkdgszshTIq27dFzA4Ca9FawahtVUyVAGbHBvZqoD1drl1ZC9UwpU=; SPC_R_T_IV=eUV4d3VHanNvOTMzMVo5Mw==; SPC_SC_TK=943685b600da3c95f67e8dbde8dc9bf5; SPC_SC_UD=31429246; SPC_STK=fPN0QmyJdXNLkb5ddN2nTmmDhTGhKevcQhrObqz+DhRjuRs57aRh5sgBDZPNmBSNzmgJbTYjVGDwerDSSJFgoM3/pcZki+SgYu0MGx1hiDZgBEqSb2D6zDa2EmT5tks8RtiuMdADZiHrQvBXYwyS48/LREm/v8CiFS2cmGADYiYjRzKtdYF2znhgIAuvY1pT; SC_DFP=EWOXRmHMjdHcOsOBgLFMzLdURGnZhqOt; _ga_QMX630BLLS=GS1.1.1703567540.1.1.1703567991.60.0.0; SPC_MTOKEN=; TMP_UID=31429246; SPC_ST=.UE05RjhGMlZQYTVZM3pHQWjBY1b1Dt1Z1csSarbUVpRFSIqr0+XC45QMSeZlBgsUEHPfUon+Xb2yBgB1DbmnqK8JwpjAlbRz0Dmtq3LvfzPJ42OpeSaIjufDy8NEVPBq3oEFg5k5oW4yrLJUvjuk1epUK35CGTE0DTvA009u2Nqo0IACifN4GqrwhrMH61hPCzYrEKtAZMohDYou7fEjjBKGhXSJ2FavdE/ZvxanAlk=; SPC_EC=.UE05RjhGMlZQYTVZM3pHQWjBY1b1Dt1Z1csSarbUVpRFSIqr0+XC45QMSeZlBgsUEHPfUon+Xb2yBgB1DbmnqK8JwpjAlbRz0Dmtq3LvfzPJ42OpeSaIjufDy8NEVPBq3oEFg5k5oW4yrLJUvjuk1epUK35CGTE0DTvA009u2Nqo0IACifN4GqrwhrMH61hPCzYrEKtAZMohDYou7fEjjBKGhXSJ2FavdE/ZvxanAlk=; _ga_8TJ45E514C=GS1.1.1703655007.2.0.1703655007.60.0.0; _ga_SW6D8G0HXK=deleted; CTOKEN=D7xzk6VNEe6SZuIxfX7UYg%3D%3D; _sapid=810d3e73e08cb0165269e556f9923c9eeebf7b7216758e45fd92cc86; SPC_SEC_SI=v1-aUh6WmJzZUJzT01rQzVzMcJpOQzCedrWzXBaA3Juwwv/86WwiZ5wBBLiBlqTKz6apKQLnnCkP7Ql1NPhFsfB093G4sxFrrcn0m4/8Nkqdr8=; REC7iLP4Q=1b622be4-6d75-428d-8a2a-a70836f4b9ef; _QPWSDCXHZQA=14bf289c-d41f-4832-a156-00b0f96a3dd0; AMP_TOKEN=%24NOT_FOUND; __stripe_mid=25c150d7-10c7-42f1-8884-0941ba5a2179ebdaeb; __stripe_sid=38002249-07ab-4230-a0ff-d73d06f83389d0529c; ds=db9e7da4ae4b0895c7f32a91630e7358; _ga=GA1.3.825616447.1696857221; shopee_webUnique_ccd=v5uutGl9GnnSXuB9x1j%2FoA%3D%3D%7C0waOHeKILGncQmeO8IZmRQP%2Bw%2FC9RTD%2Byjx19PQtRvPDF%2Bs2yLB5wJ0knrnUOC48d%2B%2FvF05UgL2IlA%3D%3D%7ClSHceBAOL%2B07RNA6%7C08%7C3; _dc_gtm_UA-61904553-8=1; _ga_SW6D8G0HXK=GS1.1.1704029876.34.1.1704030301.24.0.0",
      "Referer": "https://shopee.co.id/checkout",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    };
  
    const body = null
  
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: headers,
        body: body,
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error.message || error);
    }
  }
  
  // Call the function
  addToCart();

