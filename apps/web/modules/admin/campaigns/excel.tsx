"use client";
import React from "react";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

const ExcelExport = () => {
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet([
      {
        id: "1",
        first_name: "Dru",
        last_name: "Todaro",
        email: "dtodaro0@nih.gov",
        gender: "Female",
        ip_address: "67.166.153.148",
      },
      {
        id: "2",
        first_name: "Currie",
        last_name: "Vango",
        email: "cvango1@furl.net",
        gender: "Male",
        ip_address: "18.158.63.68",
      },
      {
        id: "3",
        first_name: "Les",
        last_name: "Tewkesberrie",
        email: "ltewkesberrie2@auda.org.au",
        gender: "Male",
        ip_address: "8.253.188.174",
      },
      {
        id: "4",
        first_name: "Lois",
        last_name: "Royans",
        email: "lroyans3@imageshack.us",
        gender: "Female",
        ip_address: "223.26.157.92",
      },
      {
        id: "5",
        first_name: "Sylvia",
        last_name: "Dourin",
        email: "sdourin4@yahoo.co.jp",
        gender: "Female",
        ip_address: "126.104.218.155",
      },
      {
        id: "6",
        first_name: "Augustin",
        last_name: "Milius",
        email: "amilius5@springer.com",
        gender: "Male",
        ip_address: "192.160.179.179",
      },
      {
        id: "7",
        first_name: "Blanche",
        last_name: "Fenby",
        email: "bfenby6@phpbb.com",
        gender: "Genderqueer",
        ip_address: "27.45.188.92",
      },
      {
        id: "8",
        first_name: "Griffin",
        last_name: "Biesterfeld",
        email: "gbiesterfeld7@macromedia.com",
        gender: "Male",
        ip_address: "95.132.170.211",
      },
      {
        id: "9",
        first_name: "Georgeanne",
        last_name: "Vasiliev",
        email: "gvasiliev8@weebly.com",
        gender: "Female",
        ip_address: "166.69.96.202",
      },
      {
        id: "10",
        first_name: "Gerry",
        last_name: "Britnell",
        email: "gbritnell9@bigcartel.com",
        gender: "Male",
        ip_address: "133.240.27.109",
      },
      {
        id: "11",
        first_name: "Marta",
        last_name: "Bea",
        email: "mbeaa@admin.ch",
        gender: "Bigender",
        ip_address: "150.142.242.144",
      },
      {
        id: "12",
        first_name: "Ad",
        last_name: "Sprowle",
        email: "asprowleb@php.net",
        gender: "Male",
        ip_address: "185.11.185.10",
      },
      {
        id: "13",
        first_name: "Tyrone",
        last_name: "Jarry",
        email: "tjarryc@redcross.org",
        gender: "Male",
        ip_address: "55.65.56.109",
      },
      {
        id: "14",
        first_name: "Malorie",
        last_name: "Mendus",
        email: "mmendusd@nsw.gov.au",
        gender: "Female",
        ip_address: "63.69.241.55",
      },
      {
        id: "15",
        first_name: "Corny",
        last_name: "Tabord",
        email: "ctaborde@photobucket.com",
        gender: "Female",
        ip_address: "117.160.117.101",
      },
      {
        id: "16",
        first_name: "Layton",
        last_name: "Gallally",
        email: "lgallallyf@furl.net",
        gender: "Genderqueer",
        ip_address: "20.54.67.139",
      },
      {
        id: "17",
        first_name: "Garrett",
        last_name: "Girard",
        email: "ggirardg@gravatar.com",
        gender: "Male",
        ip_address: "246.70.180.140",
      },
      {
        id: "18",
        first_name: "Stevie",
        last_name: "Downton",
        email: "sdowntonh@google.cn",
        gender: "Male",
        ip_address: "238.74.167.185",
      },
      {
        id: "19",
        first_name: "Audi",
        last_name: "Binnion",
        email: "abinnioni@nih.gov",
        gender: "Female",
        ip_address: "133.175.136.219",
      },
      {
        id: "20",
        first_name: "Rodolph",
        last_name: "Margetts",
        email: "rmargettsj@twitpic.com",
        gender: "Male",
        ip_address: "122.63.233.188",
      },
      {
        id: "21",
        first_name: "Catarina",
        last_name: "Twiname",
        email: "ctwinamek@auda.org.au",
        gender: "Female",
        ip_address: "195.206.52.7",
      },
      {
        id: "22",
        first_name: "Ansel",
        last_name: "Cork",
        email: "acorkl@tripod.com",
        gender: "Male",
        ip_address: "212.210.182.81",
      },
      {
        id: "23",
        first_name: "Danya",
        last_name: "Biglin",
        email: "dbiglinm@microsoft.com",
        gender: "Male",
        ip_address: "37.118.38.214",
      },
      {
        id: "24",
        first_name: "Klarrisa",
        last_name: "Dumbrill",
        email: "kdumbrilln@t.co",
        gender: "Female",
        ip_address: "17.77.3.234",
      },
      {
        id: "25",
        first_name: "Erika",
        last_name: "Lacheze",
        email: "elachezeo@qq.com",
        gender: "Female",
        ip_address: "175.108.125.123",
      },
      {
        id: "26",
        first_name: "Nina",
        last_name: "Dregan",
        email: "ndreganp@mapquest.com",
        gender: "Female",
        ip_address: "240.0.68.15",
      },
      {
        id: "27",
        first_name: "Jonell",
        last_name: "Burree",
        email: "jburreeq@about.me",
        gender: "Female",
        ip_address: "82.109.196.49",
      },
      {
        id: "28",
        first_name: "Levey",
        last_name: "Row",
        email: "lrowr@meetup.com",
        gender: "Male",
        ip_address: "88.111.146.191",
      },
      {
        id: "29",
        first_name: "Kermie",
        last_name: "Gilpin",
        email: "kgilpins@msu.edu",
        gender: "Male",
        ip_address: "93.117.11.254",
      },
      {
        id: "30",
        first_name: "Montague",
        last_name: "Holsall",
        email: "mholsallt@toplist.cz",
        gender: "Male",
        ip_address: "242.189.58.252",
      },
      {
        id: "31",
        first_name: "Horst",
        last_name: "Thorndale",
        email: "hthorndaleu@cnbc.com",
        gender: "Male",
        ip_address: "222.133.88.131",
      },
      {
        id: "32",
        first_name: "Tommy",
        last_name: "Salliere",
        email: "tsallierev@parallels.com",
        gender: "Female",
        ip_address: "150.238.218.34",
      },
      {
        id: "33",
        first_name: "Sal",
        last_name: "Cuerdale",
        email: "scuerdalew@mediafire.com",
        gender: "Male",
        ip_address: "103.67.228.18",
      },
      {
        id: "34",
        first_name: "Lalo",
        last_name: "Lowrey",
        email: "llowreyx@virginia.edu",
        gender: "Male",
        ip_address: "99.228.79.84",
      },
      {
        id: "35",
        first_name: "Rice",
        last_name: "Davidowsky",
        email: "rdavidowskyy@wix.com",
        gender: "Male",
        ip_address: "222.223.188.250",
      },
      {
        id: "36",
        first_name: "Cointon",
        last_name: "Marston",
        email: "cmarstonz@soundcloud.com",
        gender: "Male",
        ip_address: "116.88.90.88",
      },
      {
        id: "37",
        first_name: "Zelig",
        last_name: "Barter",
        email: "zbarter10@domainmarket.com",
        gender: "Male",
        ip_address: "24.77.0.72",
      },
      {
        id: "38",
        first_name: "Glen",
        last_name: "Anthon",
        email: "ganthon11@wikimedia.org",
        gender: "Male",
        ip_address: "139.105.117.3",
      },
      {
        id: "39",
        first_name: "Gino",
        last_name: "Woodrough",
        email: "gwoodrough12@sciencedirect.com",
        gender: "Male",
        ip_address: "53.251.227.140",
      },
      {
        id: "40",
        first_name: "Vikki",
        last_name: "Amiable",
        email: "vamiable13@npr.org",
        gender: "Female",
        ip_address: "81.142.82.255",
      },
      {
        id: "41",
        first_name: "Ysabel",
        last_name: "Tommasi",
        email: "ytommasi14@plala.or.jp",
        gender: "Female",
        ip_address: "91.166.20.22",
      },
      {
        id: "42",
        first_name: "Wallace",
        last_name: "Waterdrinker",
        email: "wwaterdrinker15@princeton.edu",
        gender: "Male",
        ip_address: "144.155.223.172",
      },
      {
        id: "43",
        first_name: "Stuart",
        last_name: "Mulkerrins",
        email: "smulkerrins16@vinaora.com",
        gender: "Male",
        ip_address: "203.212.61.174",
      },
      {
        id: "44",
        first_name: "Crystie",
        last_name: "Sheilds",
        email: "csheilds17@yelp.com",
        gender: "Female",
        ip_address: "125.193.153.120",
      },
      {
        id: "45",
        first_name: "Xylia",
        last_name: "Sturgis",
        email: "xsturgis18@gnu.org",
        gender: "Female",
        ip_address: "35.161.48.249",
      },
      {
        id: "46",
        first_name: "Loreen",
        last_name: "Smiths",
        email: "lsmiths19@barnesandnoble.com",
        gender: "Female",
        ip_address: "103.231.86.166",
      },
      {
        id: "47",
        first_name: "Isahella",
        last_name: "Blanchet",
        email: "iblanchet1a@hatena.ne.jp",
        gender: "Female",
        ip_address: "109.140.17.178",
      },
      {
        id: "48",
        first_name: "Vickie",
        last_name: "Boatwright",
        email: "vboatwright1b@usgs.gov",
        gender: "Female",
        ip_address: "65.144.57.19",
      },
      {
        id: "49",
        first_name: "Harli",
        last_name: "Schmidt",
        email: "hschmidt1c@w3.org",
        gender: "Female",
        ip_address: "244.150.80.180",
      },
      {
        id: "50",
        first_name: "Emilie",
        last_name: "Northbridge",
        email: "enorthbridge1d@ted.com",
        gender: "Female",
        ip_address: "104.163.6.136",
      },
      {
        id: "51",
        first_name: "Francois",
        last_name: "Smurfitt",
        email: "fsmurfitt1e@hubpages.com",
        gender: "Male",
        ip_address: "95.59.192.16",
      },
      {
        id: "52",
        first_name: "Dix",
        last_name: "Winchcomb",
        email: "dwinchcomb1f@wufoo.com",
        gender: "Female",
        ip_address: "114.68.169.154",
      },
      {
        id: "53",
        first_name: "Estele",
        last_name: "Tearle",
        email: "etearle1g@arstechnica.com",
        gender: "Female",
        ip_address: "155.93.77.199",
      },
      {
        id: "54",
        first_name: "Catha",
        last_name: "Pluck",
        email: "cpluck1h@apache.org",
        gender: "Female",
        ip_address: "189.130.109.106",
      },
      {
        id: "55",
        first_name: "Rosene",
        last_name: "Treece",
        email: "rtreece1i@cpanel.net",
        gender: "Female",
        ip_address: "241.185.201.151",
      },
      {
        id: "56",
        first_name: "Garald",
        last_name: "Kenny",
        email: "gkenny1j@hc360.com",
        gender: "Male",
        ip_address: "167.148.1.228",
      },
      {
        id: "57",
        first_name: "Aidan",
        last_name: "Jurkiewicz",
        email: "ajurkiewicz1k@odnoklassniki.ru",
        gender: "Female",
        ip_address: "176.219.149.33",
      },
      {
        id: "58",
        first_name: "Rebeca",
        last_name: "Ventura",
        email: "rventura1l@dell.com",
        gender: "Female",
        ip_address: "131.116.110.232",
      },
      {
        id: "59",
        first_name: "Temp",
        last_name: "Iverson",
        email: "tiverson1m@accuweather.com",
        gender: "Male",
        ip_address: "134.23.38.193",
      },
      {
        id: "60",
        first_name: "Valentijn",
        last_name: "Presnall",
        email: "vpresnall1n@360.cn",
        gender: "Male",
        ip_address: "234.163.89.167",
      },
      {
        id: "61",
        first_name: "Nolan",
        last_name: "Fratczak",
        email: "nfratczak1o@huffingtonpost.com",
        gender: "Male",
        ip_address: "37.220.163.137",
      },
      {
        id: "62",
        first_name: "Malina",
        last_name: "Gittoes",
        email: "mgittoes1p@webnode.com",
        gender: "Female",
        ip_address: "59.29.203.38",
      },
      {
        id: "63",
        first_name: "Niel",
        last_name: "Greensall",
        email: "ngreensall1q@qq.com",
        gender: "Male",
        ip_address: "141.123.130.218",
      },
      {
        id: "64",
        first_name: "Sutton",
        last_name: "Brickwood",
        email: "sbrickwood1r@blogs.com",
        gender: "Male",
        ip_address: "126.34.20.223",
      },
      {
        id: "65",
        first_name: "Torie",
        last_name: "Garrity",
        email: "tgarrity1s@nih.gov",
        gender: "Female",
        ip_address: "24.6.191.2",
      },
      {
        id: "66",
        first_name: "Pattie",
        last_name: "Stiggles",
        email: "pstiggles1t@nytimes.com",
        gender: "Female",
        ip_address: "86.54.242.158",
      },
      {
        id: "67",
        first_name: "Elie",
        last_name: "Moneypenny",
        email: "emoneypenny1u@oakley.com",
        gender: "Female",
        ip_address: "77.246.41.220",
      },
      {
        id: "68",
        first_name: "Annissa",
        last_name: "Billingham",
        email: "abillingham1v@hc360.com",
        gender: "Bigender",
        ip_address: "249.36.88.172",
      },
      {
        id: "69",
        first_name: "Denis",
        last_name: "Grandison",
        email: "dgrandison1w@t-online.de",
        gender: "Male",
        ip_address: "168.94.237.28",
      },
      {
        id: "70",
        first_name: "Eadie",
        last_name: "Haydon",
        email: "ehaydon1x@cdbaby.com",
        gender: "Female",
        ip_address: "207.186.211.89",
      },
      {
        id: "71",
        first_name: "Flinn",
        last_name: "Perazzo",
        email: "fperazzo1y@soup.io",
        gender: "Male",
        ip_address: "251.248.219.76",
      },
      {
        id: "72",
        first_name: "Mohandis",
        last_name: "Robertelli",
        email: "mrobertelli1z@illinois.edu",
        gender: "Male",
        ip_address: "120.253.240.119",
      },
      {
        id: "73",
        first_name: "Siffre",
        last_name: "Marquet",
        email: "smarquet20@bizjournals.com",
        gender: "Non-binary",
        ip_address: "248.168.174.254",
      },
      {
        id: "74",
        first_name: "Currie",
        last_name: "Shilito",
        email: "cshilito21@about.me",
        gender: "Male",
        ip_address: "49.58.239.107",
      },
      {
        id: "75",
        first_name: "Art",
        last_name: "Brailsford",
        email: "abrailsford22@japanpost.jp",
        gender: "Male",
        ip_address: "156.237.133.30",
      },
      {
        id: "76",
        first_name: "Mildrid",
        last_name: "Rosborough",
        email: "mrosborough23@nyu.edu",
        gender: "Non-binary",
        ip_address: "209.193.89.97",
      },
      {
        id: "77",
        first_name: "Rochester",
        last_name: "Lindeboom",
        email: "rlindeboom24@histats.com",
        gender: "Male",
        ip_address: "232.224.4.53",
      },
      {
        id: "78",
        first_name: "Laurice",
        last_name: "Crane",
        email: "lcrane25@rediff.com",
        gender: "Female",
        ip_address: "38.18.104.237",
      },
      {
        id: "79",
        first_name: "Domenic",
        last_name: "Davidesco",
        email: "ddavidesco26@craigslist.org",
        gender: "Genderqueer",
        ip_address: "48.76.108.118",
      },
      {
        id: "80",
        first_name: "Gery",
        last_name: "Alvarado",
        email: "galvarado27@epa.gov",
        gender: "Male",
        ip_address: "222.195.54.142",
      },
      {
        id: "81",
        first_name: "Bertrand",
        last_name: "Conahy",
        email: "bconahy28@sourceforge.net",
        gender: "Male",
        ip_address: "12.77.54.12",
      },
      {
        id: "82",
        first_name: "Nappie",
        last_name: "Davidow",
        email: "ndavidow29@washington.edu",
        gender: "Male",
        ip_address: "99.127.89.105",
      },
      {
        id: "83",
        first_name: "Maxi",
        last_name: "Fruish",
        email: "mfruish2a@foxnews.com",
        gender: "Female",
        ip_address: "156.255.207.228",
      },
      {
        id: "84",
        first_name: "Blondelle",
        last_name: "Flanagan",
        email: "bflanagan2b@artisteer.com",
        gender: "Female",
        ip_address: "8.33.223.232",
      },
      {
        id: "85",
        first_name: "Maurice",
        last_name: "Schubert",
        email: "mschubert2c@opera.com",
        gender: "Male",
        ip_address: "1.180.216.118",
      },
      {
        id: "86",
        first_name: "Carilyn",
        last_name: "Gatecliffe",
        email: "cgatecliffe2d@tiny.cc",
        gender: "Female",
        ip_address: "232.89.49.199",
      },
      {
        id: "87",
        first_name: "Cody",
        last_name: "Newberry",
        email: "cnewberry2e@salon.com",
        gender: "Male",
        ip_address: "199.229.176.241",
      },
      {
        id: "88",
        first_name: "Mycah",
        last_name: "Possek",
        email: "mpossek2f@opensource.org",
        gender: "Male",
        ip_address: "46.92.126.149",
      },
      {
        id: "89",
        first_name: "Joellyn",
        last_name: "Gabbatt",
        email: "jgabbatt2g@hexun.com",
        gender: "Female",
        ip_address: "94.212.57.1",
      },
      {
        id: "90",
        first_name: "Eduard",
        last_name: "Formie",
        email: "eformie2h@google.cn",
        gender: "Male",
        ip_address: "144.132.90.96",
      },
      {
        id: "91",
        first_name: "Marleen",
        last_name: "MacKessock",
        email: "mmackessock2i@t.co",
        gender: "Female",
        ip_address: "130.218.192.161",
      },
      {
        id: "92",
        first_name: "Pietra",
        last_name: "Castagnone",
        email: "pcastagnone2j@yellowpages.com",
        gender: "Female",
        ip_address: "142.254.110.34",
      },
      {
        id: "93",
        first_name: "Dalston",
        last_name: "McCadden",
        email: "dmccadden2k@usa.gov",
        gender: "Male",
        ip_address: "40.155.24.21",
      },
      {
        id: "94",
        first_name: "Christos",
        last_name: "Neath",
        email: "cneath2l@virginia.edu",
        gender: "Male",
        ip_address: "228.80.89.44",
      },
      {
        id: "95",
        first_name: "Osbourn",
        last_name: "Burnip",
        email: "oburnip2m@infoseek.co.jp",
        gender: "Male",
        ip_address: "109.127.139.237",
      },
      {
        id: "96",
        first_name: "Antonina",
        last_name: "Draycott",
        email: "adraycott2n@comsenz.com",
        gender: "Female",
        ip_address: "122.43.107.163",
      },
      {
        id: "97",
        first_name: "Marvin",
        last_name: "Bourges",
        email: "mbourges2o@fda.gov",
        gender: "Male",
        ip_address: "133.250.225.240",
      },
      {
        id: "98",
        first_name: "Sela",
        last_name: "Courtes",
        email: "scourtes2p@tripadvisor.com",
        gender: "Female",
        ip_address: "219.196.92.35",
      },
      {
        id: "99",
        first_name: "Madella",
        last_name: "Pedracci",
        email: "mpedracci2q@xrea.com",
        gender: "Female",
        ip_address: "162.233.0.177",
      },
      {
        id: "100",
        first_name: "Ruth",
        last_name: "Albrighton",
        email: "ralbrighton2r@ibm.com",
        gender: "Female",
        ip_address: "51.124.137.8",
      },
    ]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, `Filesave.xlsx`);
  };

  return <button onClick={exportToExcel}>Export to Excel</button>;
};

export default ExcelExport;
