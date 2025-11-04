import { gotScraping } from "got-scraping";
import { CookieJar } from "tough-cookie";
import * as cheerio from "cheerio";

const REGISTER_URL = "https://goraclk.vip/#/register?ref=159424";

// 📧 Gmail list
const emails = [
  "ahmedali@gmail.com",
  "mohammadali@gmail.com",
  "ahsanraza@gmail.com",
  "abdullahkhan@gmail.com",
  "hassankhalid@gmail.com",
  "umairrauf@gmail.com",
  "usmanahmad@gmail.com",
  "abdulrehman@gmail.com",
  "farazahmed@gmail.com",
  "hariskhan@gmail.com",
  "ahmedraza@gmail.com",
  "mohsinkhalid@gmail.com",
  "aliusman@gmail.com",
  "saqibahmad@gmail.com",
  "tayyabfaraz@gmail.com",
  "bilalahmed@gmail.com",
  "hamzafarooq@gmail.com",
  "arifhassan@gmail.com",
  "azfarali@gmail.com",
  "imranraza@gmail.com",
  "ahmedworks@gmail.com",
  "aliofficial@gmail.com",
  "farazmedia@gmail.com",
  "hassanpro@gmail.com",
  "umairtech@gmail.com",
  "abdullahzone@gmail.com",
  "mohsinworld@gmail.com",
  "usmanvibes@gmail.com",
  "ahsanonline@gmail.com",
  "khalidnetwork@gmail.com",
  "abdulmalik@gmail.com",
  "ahmedmurtaza@gmail.com",
  "alihaider@gmail.com",
  "umairawan@gmail.com",
  "hassanrauf@gmail.com",
  "abdulwahid@gmail.com",
  "farazzaidi@gmail.com",
  "mohsinkhan@gmail.com",
  "harisawan@gmail.com",
  "ahmadbilal@gmail.com",
  "ahmedvibes@gmail.com",
  "aliupdates@gmail.com",
  "farazclips@gmail.com",
  "hassanofficial@gmail.com",
  "umairstudio@gmail.com",
  "abdullahvlogs@gmail.com",
  "ahmeddaily@gmail.com",
  "aliworld@gmail.com",
  "hassanbuzz@gmail.com",
  "farazmediax@gmail.com",
  "ahmedelite@gmail.com",
  "aliimpact@gmail.com",
  "hassanprime@gmail.com",
  "farazmaster@gmail.com",
  "umairlegend@gmail.com",
  "abdullahzonex@gmail.com",
  "ahmedinspire@gmail.com",
  "aliinnovate@gmail.com"
];

const PASSWORD = "aass1122";

async function autoRegister(email) {
  try {
    const cookieJar = new CookieJar();

    // اگر API فارم کا endpoint دستیاب ہو، یہاں فارم کے POST URL کا استعمال کریں
    const response = await gotScraping.post(REGISTER_URL, {
      cookieJar,
      form: {
        email: email,
        password: PASSWORD,
        confirm_password: PASSWORD,
        agree_terms: "1"
      }
    });

    console.log(`✅ Registered: ${email}`);
  } catch (err) {
    console.log(`❌ Failed: ${email} | Error: ${err.message}`);
  }
}

async function start() {
  console.log(`🚀 Starting Auto Registration for ${emails.length} emails...\n`);
  for (const email of emails) {
    await autoRegister(email);
  }
  console.log("\n🎉 Process Completed!");
}

start();
