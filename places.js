//var places = getKumamoto();
var places = getOsaka();
var markers = getTabelogOsaka();

function getKumamoto() {
    return [{
        "address": "熊本城",
        "title": "熊本城",
        //            "icon": "https://img.icons8.com/nolan/64/000000/castle.png",
        "icon": "blue-dot",
        "description": "日本三名城のひとつといわれる熊本城は、加藤清正（かとうきよまさ）が慶長6年(1601年)から7年の歳月をかけ築城した天下の名城です。",
        "url": "https://kumamoto-guide.jp/kumamoto-castle/",
    },
    {
        "address": "水前寺成趣園",
        "title": "水前寺成趣園",
        //            "icon": "https://img.icons8.com/nolan/64/000000/leaf.png",
        "icon": "pink-dot",
        "description": "通称は水前寺公園。豊富な阿蘇伏流水が湧出して作った池を中心にした桃山式回遊庭園で、築山や浮石、芝生、松などの植木で東海道五十三次の景勝を模したといわれる。",
        "url": "http://www.suizenji.or.jp/",
    },
    {
        "address": "北岡自然公園",
        "title": "北岡自然公園",
        //            "icon": "https://img.icons8.com/nolan/64/000000/leaf.png",
        "icon": "orange-dot",
        "description": "花岡山の麓、細川家の菩提寺・妙解寺跡にある公園。明治4年の廃藩置県後には細川藩主家の本邸（北岡邸）が置かれた。熊本県の重要文化財に指定されている細川家の霊廟があり、文豪・森鴎外の小説のモデルとなった阿部一族の墓もある。園内には、枯山水庭園やバラ園があり市民の憩いの場として親しまれている。",
        "url": "https://kumamoto-guide.jp/spots/detail/66",
    },
    {
        "address": "熊本市役所",
        "title": "熊本市役所",
        //            "icon": "https://img.icons8.com/nolan/64/000000/organization.png",
        "icon": "purple-dot",
        "description": "花岡山の麓、細川家の菩提寺・妙解寺跡にある公園。明治4年の廃藩置県後には細川藩主家の本邸（北岡邸）が置かれた。熊本県の重要文化財に指定されている細川家の霊廟があり、文豪・森鴎外の小説のモデルとなった阿部一族の墓もある。園内には、枯山水庭園やバラ園があり市民の憩いの場として親しまれている。",
        "url": "http://www.city.kumamoto.jp/",
    }
    ];
}

function getOsaka() {
    return [{
        "address": "大阪駅",
        "title": "大阪駅",
        //"icon": "https://img.icons8.com/nolan/64/000000/train.png",
        "icon": "yellow-dot",
        "description": "JR大阪駅構内をご案内します。大阪駅は、1階、中2階、2階、3階で、<br>1階は改札口が「中央口・桜橋口・御堂筋口・御堂筋南口」の4箇所。<br>また、1階の駅出入口は「中央南口・桜橋口・御堂筋北口・御堂筋南口」の4箇所。<br>中2階は2階、1階への連絡通路、<br>2階はホームで1番線から11番線まで。駅出入口の「中央北口」があります。<br>3階には改札口「連絡橋口」が設置されています。",
        "url": "http://osakadesign.com/shinosaka/osaka_konai/index.html"
    },
    {
        "address": "大阪市役所",
        "title": "大阪市役所",
        //"icon": "https://img.icons8.com/nolan/64/000000/home.png",
        "icon": "blue-dot",
        "description": "本庁の入居する大阪市庁舎は、大阪市の中心部、中之島に位置する。御堂筋の東側に位置し、正面には日本銀行大阪支店が位置する。市役所の東側には中之島図書館や大阪市中央公会堂、東洋陶磁美術館がある。",
        "url": "https://www.city.osaka.lg.jp/"
    },
    {
        "address": "通天閣",
        "title": "通天閣",
        //"icon": "https://img.icons8.com/nolan/64/000000/radio-tower.png",
        "icon": "pink-dot",
        "description": "大阪府大阪市浪速区の新世界中心部に建つ展望塔である。2007年5月15日に、国の登録有形文化財となった[1]。公式キャラクターは「ビリケン」。大阪の観光名所として知られる。",
        "url": "https://www.tsutenkaku.co.jp/"
    },
    {
        "address": "道頓堀",
        "title": "道頓堀",
        // "icon": "https://img.icons8.com/nolan/64/000000/rope-bridge.png",
        "icon": "water",
        "description": "松竹座にカニ道楽、そしてグリコの看板などによって象徴される道頓堀は、大阪・ミナミの代表的な繁華街。道頓堀の名は、慶長17年（1612）に私財をなげうって川を開削した安井道頓（やすい・どうとん）の名前に由来。",
        "url": "http://www.dotonbori.or.jp/ja/"
    },
    {
        "address": "大阪城",
        "title": "大阪城",
        "description": "大阪城は、安土桃山時代に摂津国東成郡生玉荘大坂に築かれ、江戸時代に修築された日本の城。別称は錦城。「大阪城跡」として国の特別史跡に指定されている。",
        //            "icon": "https://img.icons8.com/nolan/64/000000/castle.png"
        "icon": "blue-pushpin",
    },
    {
        "address": "ユニバーサルスタジオジャパン",
        "title": "ユニバーサルスタジオジャパン",
        "description": "異なる表情を持つさまざまなエリアは、感動がいっぱいの別世界。ハリウッドの超大作映画をテーマにした興奮のライドや人気キャラクターたちのショーなど、子どもから大人まで楽しめる、ワールドクラスのエンターテイメントを集めたテーマパーク。",
        //"icon": "https://img.icons8.com/nolan/64/000000/flash-bang.png",
        "icon": "grn-pushpin",
        "url": "https://www.usj.co.jp/"
    }

    ];
}
function getTabelogOsaka() {
    return [
    {
        "address": "うたげどころ うぉっしゅ",
        "title": "うたげどころ うぉっしゅ",
        "icon": "yellow",
        "description": "北新地、西梅田、渡辺橋/居酒屋、魚介料理・海鮮料理、日本酒バー",
        "url": "https://tabelog.com/osaka/A2701/A270101/27088669/"
    },
    {
        "address": "魚屋スタンドふじ子",
        "title": "魚屋スタンドふじ子",
        "icon": "blue-dot",
        "description": "海鮮が安いだけの店",
        "url": "https://tabelog.com/osaka/A2701/A270101/27102312/"
    },
    {
        "address": "晩酌食堂 Hanaco＋",
        "title": "晩酌食堂 Hanaco＋",
        "icon": "green-dot",
        "description": "新福島駅2分◎たっぷりお野菜。美味しいお魚。ときどきお肉。身体にも心にも優しいお料理を。",
        "url": "https://tabelog.com/osaka/A2701/A270108/27098423/"
    },
    {
        "address": "囲炉裏と釜飯 しずる 西梅田",
        "title": "囲炉裏と釜飯 しずる 西梅田",
        "icon": "red-dot",
        "description": "目の前の囲炉裏でライブ感、シズル感を！！五感で味わう囲炉裏焼き",
        "url": "https://tabelog.com/osaka/A2701/A270101/27094767/"
    },
    {
        "address": "ねぎ焼 やまもと 福島ほたるまち店",
        "title": "ねぎ焼 やまもと 福島ほたるまち店",
        "icon": "red-dot",
        "description": "新福島、福島、渡辺橋/お好み焼き、焼きそば",
        "url": "https://tabelog.com/osaka/A2701/A270108/27015889/"
    },
    {
        "address": "カフェテリア スコラ ",
        "title": "カフェテリア スコラ ",
        "icon": "red-dot",
        "description": "中之島、渡辺橋、新福島/洋食、カフェ・喫茶（その他）、バー・お酒（その他）",
        "url": "http://www.onc.osaka-u.ac.jp/"
    },
    {
        "address": "イタリア食堂 タベルナエントラータ 堂島店 ",
        "title": "イタリア食堂 タベルナエントラータ 堂島店 ",
        "icon": "red-dot",
        "description": "西梅田・北新地から徒歩1分■乾杯スパークリングワイン付夏の宴会プラン3980円～♪",
        "url": "https://tabelog.com/osaka/A2701/A270101/27050029/"
    },
    {
        "address": "ラーメン而今 中之島フェスティバルプラザ店",
        "title": "ラーメン而今 中之島フェスティバルプラザ店",
        "icon": "red-dot",
        "description": "渡辺橋、肥後橋、大江橋/ラーメン",
        "url": "https://tabelog.com/osaka/A2701/A270102/27097807/"
    },
    {
        "address": "西梅田 らんぷ",
        "title": "西梅田 らんぷ",
        "icon": "red-dot",
        "description": "福島、西梅田、北新地/ラーメン",
        "url": "https://tabelog.com/osaka/A2701/A270108/27098217/"
    },
    {
        "address": "大阪府大阪市中央区北浜4-3-1 淀屋橋odona B1F",
        "title": "ベトナム料理 インドシナ",
        "icon": "red-dot",
        "description": "淀屋橋駅直結:毎日食べても飽きのこないベトナムのお家ごはんを気軽に味わえるお店◎",
        "url": "https://tabelog.com/osaka/A2701/A270102/27000870/"
    },
    {
        "address": "大阪府大阪市北区芝田1-1-3 阪急三番街 北館 B2",
        "title": "麺や マルショウ",
        "icon": "red-dot",
        "description": "梅田（大阪市営）、大阪、梅田（阪急）/台湾まぜそば、ラーメン",
        "url": "https://tabelog.com/osaka/A2701/A270201/27001670/"
    }
    ];
}