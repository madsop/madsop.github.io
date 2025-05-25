export interface Talk {
  conference: string;
  date: string;
  city: string | null;
  country: string;
  title: string;
  link: string;
  video: string | null;
  cospeaker: string | null;
}

export const talks: Talk[] = [
    {
      "conference": "GeeCon Krakow",
      "date": "2025-05-15",
      "city": "Krakow",
      "country": "Poland",
      "title": "How 15 years in politics have made me a better programmer",
      "link": "https://2025.geecon.org/schedule-day2/",
      "video": "",
      "cospeaker": ""
    },
{
  "conference": "Open Community Experience",
    "date": "2024-10-24",
    "city": "Mainz",
    "country": "Germany",
    "title": "Enterprise Kotlin: Jakarta EE for Kotlin developers",
    "link": "https://www.ocxconf.org/event/2024/websitePage:26bc9d91-446a-49e1-9f08-8fcc4680073e?session=3048107c-2675-427d-bcd7-8826002b6a55&sharelink=true",
    "video": "",
    "cospeaker": ""
},
{
  "conference": "JCON Open Blend Slovenia",
    "date": "2024-05-31",
    "city": "Portoroz",
    "country": "Slovenia",
    "title": "Quarkus Native - from Scratch to Production",
    "link": "https://makeit.si/sessions/#600624",
    "video": "",
    "cospeaker": ""
},
{
  "conference": "JakartaOne",
    "date": "2023-12-03",
    "city": "",
    "country": "Virtual",
    "title": "Enterprise Kotlin: Jakarta EE for Kotlin developers",
    "link": "https://jakartaone.org/2023/speakers/#mads-opheim",
    "video": "https://www.youtube.com/watch?v=gBQxryz10mw&ab_channel=JakartaEE",
    "cospeaker": ""
},
{
  "conference": "Øredev",
    "date": "2023-11-09",
    "city": "Malmö",
    "country": "Sweden",
    "title": "Quarkus Native - from Scratch to Production",
    "link": "https://oredev.org/sessions/quarkus-native-from-scratch-to-production",
    "video": "https://www.youtube.com/watch?v=sKFwvYHYDr8&list=PLOUKmSqExtAH0k42evc9j3fiqfgHu00Cf&index=104&ab_channel=%C3%98redevconference",
    "cospeaker": ""
},
{
  "conference": "Jakarta Tech Talks",
    "date": "2023-10-25",
    "city": "",
    "country": "Virtual",
    "title": "Enterprise Kotlin: Jakarta EE for Kotlin developers",
    "link": "https://www.meetup.com/jakartatechtalks_/events/296489827/",
    "video": "",
    "cospeaker": ""
},
{
  "conference": "Trondheim Developer conference",
    "date": "2023-10-24",
    "city": "Trondheim",
    "country": "Norway",
    "title": "Quarkus Native - from Scratch to Production",
    "link": "https://2023.trondheimdc.no/speakers/mads-opheim/",
    "video": "",
    "cospeaker": ""
},
{
  "conference": "Voxxed Days Cluj",
    "date": "2023-10-12",
    "city": "Cluj",
    "country": "Romania",
    "title": "Modern Java App Development in the Cloud: MicroProfile, Quarkus, and Cloud Run",
    "link": "https://romania.voxxeddays.com/talk/?id=1553",
    "video": "",
    "cospeaker": "Rustam Mehmandarov"
},
{
  "conference": "Jakarta Tech Talks",
    "date": "2023-08-23",
    "city": "",
    "country": "Virtual",
    "title": "Serverless Java Apps in the Cloud: MicroProfile, Quarkus, and Cloud Run",
    "link": "https://www.meetup.com/jakartatechtalks_/events/293843866/",
    "video": "",
    "cospeaker": "Rustam Mehmandarov"
},
{
  "conference": "JCON Europe",
    "date": "2023-06-20",
    "city": "Köln",
    "country": "Germany",
    "title": "Quarkus Native - from Scratch to Production",
    "link": "https://sched.co/1K40N",
    "video": "https://www.youtube.com/watch?v=s7DQa78RkVw&list=PLFeSAZzYdUoeiBZIEDjgPRk3q3AsJlC84&index=21&ab_channel=JAVAPRO",
    "cospeaker": ""
},
{
  "conference": "GDG Bucharest meetup",
    "date": "2023-05-25",
    "city": "Bucharest",
    "country": "Romania",
    "title": "Modern Java App Development in the Cloud: MicroProfile, Quarkus, and Cloud Run",
    "link": "https://www.meetup.com/bucharest-java-user-group/events/293562268",
    "video": "",
    "cospeaker": "Rustam Mehmandarov"
},
{
  "conference": "Voxxed Days Iași",
    "date": "2023-05-24",
    "city": "Iași",
    "country": "Romania",
    "title": "Modern Java App Development in the Cloud: MicroProfile, Quarkus, and Cloud Run",
    "link": "https://romania.voxxeddays.com/talk/?id=2372",
    "video": "https://www.youtube.com/watch?v=KVXTLlQzuoc&list=PLRsbF2sD7JVpiRm7y11iSHIqyhQoq-AC6&index=5&ab_channel=Devoxx",
    "cospeaker": "Rustam Mehmandarov"
},
{
  "conference": "GeeCon Krakow",
    "date": "2023-04-20",
    "city": "Krakow",
    "country": "Poland",
    "title": "Enterprise Kotlin: Jakarta EE for Kotlin developers",
    "link": "https://2023.geecon.org/speakers/info.html?id=773",
    "video": "",
    "cospeaker": ""
},
{
  "conference": "GeeCon Krakow",
    "date": "2023-04-19",
    "city": "Krakow",
    "country": "Poland",
    "title": "Modern Java App Development in the Cloud",
    "link": "https://2023.geecon.org/speakers/info.html?id=773",
    "video": "",
    "cospeaker": "Rustam Mehmandarov"
},
{
  "conference": "Voxxed Days Bucharest",
    "date": "2023-03-23",
    "city": "Bucharest",
    "country": "Romania",
    "title": "Modern Java App Development in the Cloud",
    "link": "https://romania.voxxeddays.com/modern-java-app-development-in-the-cloud-microprofile-quarkus-and-cloud-run/",
    "video": "https://www.youtube.com/watch?v=QWFgrdeB0NI&list=PLRsbF2sD7JVojIeUdvXEX4F4OInswm0Px&index=23&ab_channel=Devoxx",
    "cospeaker": "Rustam Mehmandarov"
},
{
  "conference": "JavaLand",
    "date": "2023-03-22",
    "city": "Brühl",
    "country": "Germany",
    "title": "Modern Java App Development in the Cloud",
    "link": "https://www.javaland.eu/",
    "video": "",
    "cospeaker": "Rustam Mehmandarov"
},
{
  "conference": "J-Fall",
    "date": "2022-11-03",
    "city": "Ede",
    "country": "The Netherlands",
    "title": "Modern Java App Development in the Cloud",
    "link": "https://www.jfall.nl",
    "video": "",
    "cospeaker": "Rustam Mehmandarov"
},
{
  "conference": "EclipseCon",
    "date": "2022-10-26",
    "city": "Ludwigsburg",
    "country": "Germany",
    "title": "Modern Java App Development in the Cloud",
    "link": "https://www.eclipsecon.org/2022/schedule/2022-10-26",
    "video": "https://www.youtube.com/watch?v=3S_oLgqVvE0&list=PLy7t4z5SYNaRoQ4o40i6zfD0ZuoenX7ph&index=101&ab_channel=EclipseFoundation",
    "cospeaker": "Rustam Mehmandarov"
},
{
  "conference": "JavaOne",
    "date": "2022-10-20",
    "city": "Las Vegas",
    "country": "USA",
    "title": "Modern Java App Development in the Cloud",
    "link": "https://reg.rf.oracle.com/flow/oracle/cloudworld/session-catalog/page/catalog/session/1657310280067001Jln5",
    "video": "",
    "cospeaker": "Rustam Mehmandarov"
},
{
  "conference": "Devoxx Ukraine",
    "date": "2022-09-02",
    "city": "Kyiv/Online",
    "country": "Ukraine",
    "title": "Modern Java App Development in the Cloud",
    "link": "https://devoxx.com.ua/#speakers",
    "video": "",
    "cospeaker": "Rustam Mehmandarov"
},
{
  "conference": "Quarkus Unconference",
    "date": "2022-06-06",
    "city": "Coimbra",
    "country": "Portugal",
    "title": "Modern Java App Development in the Cloud: MicroProfile, Quarkus, and Cloud Run",
    "link": "https://twitter.com/holly_cummins/status/1533772638157430785",
    "video": "",
    "cospeaker": "Rustam Mehmandarov"
},
{
  "conference": "Booster",
    "date": "2022-03-23",
    "city": "Bergen",
    "country": "Norway",
    "title": "Modern Java App Development in the Cloud: MicroProfile, Quarkus, and Cloud Run",
    "link": "https://2022.boosterconf.no/talk/69-modern-java-app-development-in-the-cloud-microprofile-quarkus-and-cloud-run/",
    "video": "",
    "cospeaker": "Rustam Mehmandarov"
},
{
  "conference": "TDC Connections",
    "date": "2021-06-10",
    "city": "Brazil / Online",
    "country": "Brazil",
    "title": "Modern Java App Development in the Cloud: MicroProfile, Quarkus, and Cloud Run",
    "link": "https://thedevconf.com/tdc/2021/connections/trilha-stadium-internacional-quinta",
    "video": "",
    "cospeaker": "Rustam Mehmandarov"
},
{
  "conference": "GDG Minsk",
    "date": "2021-04-29",
    "city": "Minsk / Online",
    "country": "Belarus",
    "title": "Serverless Java Apps in the Cloud: MicroProfile, Quarkus, and Cloud Run",
    "link": "https://www.meetup.com/GDG-Minsk/events/277671167/",
    "video": "",
    "cospeaker": "Rustam Mehmandarov"
},
{
  "conference": "GDG Bergen",
    "date": "2021-03-17",
    "city": "Bergen / Online",
    "country": "Norway",
    "title": "Serverless Java Apps in the Cloud: MicroProfile, Quarkus, and Cloud Run",
    "link": "https://www.meetup.com/GDGBergen/events/276744023/",
    "video": "",
    "cospeaker": "Rustam Mehmandarov"
},
{
  "conference": "JCON",
    "date": "2020-10-27",
    "city": "Düsseldorf / Online",
    "country": "Germany",
    "title": "Serverless Java Apps in the Cloud: MicroProfile, Quarkus, and Cloud Run",
    "link": "https://jcon.one/en/",
    "video": "",
    "cospeaker": "Rustam Mehmandarov"
},
{
  "conference": "MakeIT",
    "date": "2020-10-15",
    "city": "Portoroz / Online",
    "country": "Slovenia",
    "title": "Serverless Java Apps in the Cloud: MicroProfile, Quarkus, and Cloud Run",
    "link": "https://makeit.si/index.php/en/agenda/java/item/90-serverless-java-apps-in-the-cloud-microprofile-quarkus-and-cloud-run",
    "video": "",
    "cospeaker": "Rustam Mehmandarov"
},
{
  "conference": "J-Santa",
    "date": "2019-11-30",
    "city": "Lublin",
    "country": "Poland",
    "title": "IoT powered by Microprofile - Microservices in practice",
    "link": "https://j-santa.pl",
    "video": "",
    "cospeaker": "Rustam Mehmandarov"
},
{
  "conference": "JFuture",
    "date": "2019-11-16",
    "city": "Minsk",
    "country": "Belarus",
    "title": "IoT powered by Microprofile – Microservices in practice",
    "link": "https://web.archive.org/web/20191231232042/https://jfuture.dev/",
    "video": "https://www.youtube.com/watch?v=qCSFJSuzKkY&list=PLpVeA1tdgfCDArx2X2VpyR7Hke_GHXuqb",
    "cospeaker": ""
},
{
  "conference": "Virtual DDD",
    "date": "2019-11-12",
    "city": "",
    "country": "Virtual",
    "title": "Make your tests tell the story of your domain",
    "link": "https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/266077606",
    "video": "",
    "cospeaker": "Anne Landro"
},
{
  "conference": "KanDDDinsky",
    "date": "2019-10-18",
    "city": "Berlin",
    "country": "Germany",
    "title": "Make your tests tell the story of your domain",
    "link": "https://kandddinsky.de/",
    "video": "https://www.youtube.com/watch?v=j70OLAvs_-8&",
    "cospeaker": "Anne Landro"
},
{
  "conference": "MakeIT",
    "date": "2019-10-14",
    "city": "Portoroz",
    "country": "Slovenia",
    "title": "IoT powered by Microprofile – Microservices in practice",
    "link": "https://www.makeit.si/index.php/vsebina/java-devops/item/90-iot-powered-by-microprofile-microservices-in-practice/",
    "video": "",
    "cospeaker": "Rustam Mehmandarov"
},
{
  "conference": "Testkonferansen Odin",
    "date": "2019-09-18",
    "city": "Oslo",
    "country": "Norway",
    "title": "Make your tests tell the story of your domain",
    "link": "https://event.dnd.no/odin/make-your-tests-tell-the-story-of-your-domain/",
    "video": "",
    "cospeaker": "Anne Landro"
},
{
  "conference": "JavaZone",
    "date": "2019-09-12",
    "city": "Oslo",
    "country": "Norway",
    "title": "Make your tests tell the story of your domain",
    "link": "https://2019.javazone.no/program/31684fcf-7dc4-4b3d-ae1a-1d4e46e0b9e4",
    "video": "https://vimeo.com/360781128",
    "cospeaker": "Anne Landro"
},
{
  "conference": "NDC TechTown",
    "date": "2019-09-05",
    "city": "Kongsberg",
    "country": "Norway",
    "title": "Make your tests tell the story of your domain",
    "link": "https://ndctechtown.com/talk/make-your-tests-tell-the-story-of-your-domain",
    "video": "https://www.youtube.com/watch?v=IepYRiQ7Flw",
    "cospeaker": "Anne Landro"
},
{
  "conference": "Jakarta Tech Talks",
    "date": "2019-08-20",
    "city": "",
    "country": "Virtual",
    "title": "IoT powered by Microprofile – Microservices in practice",
    "link": "https://www.meetup.com/jakartatechtalks_/events/263423153/",
    "video": "",
    "cospeaker": "Rustam Mehmandarov"
},
{
  "conference": "JUGNsk meetup",
    "date": "2019-06-13",
    "city": "Novosibirsk",
    "country": "Russia",
    "title": "9 ways to test your spaghetti code",
    "link": "https://www.meetup.com/JUGNsk/events/262010051/",
    "video": "",
    "cospeaker": ""
},
{
  "conference": "Riga Dev Days",
    "date": "2019-05-31",
    "city": "Riga",
    "country": "Latvia",
    "title": "IoT powered by Microprofile – Microservices in practice",
    "link": "https://2019.rigadevdays.lv/event-sessions/iot-powered-by-microprofile-microservices-in-practice/",
    "video": "https://www.youtube.com/watch?v=Kp5NRcbDvOk",
    "cospeaker": "Rustam Mehmandarov"
},
{
  "conference": "Nordic Testing Days",
    "date": "2019-05-30",
    "city": "Tallinn",
    "country": "Estonia",
    "title": "9 ways to test your spaghetti code",
    "link": "https://nordictestingdays.eu/events/tracks/9-ways-test-your-spaghetti-code",
    "video": "",
    "cospeaker": ""
},
{
  "conference": "JBCNConf",
    "date": "2019-05-27",
    "city": "Barcelona",
    "country": "Catalonia",
    "title": "IoT powered by Microprofile – Microservices in practice",
    "link": "http://www.jbcnconf.com/2019/infoTalk.html?id=5c44693a9034ae38180b14b2",
    "video": "",
    "cospeaker": "Rustam Mehmandarov"
},
{
  "conference": "DevSum",
    "date": "2019-05-23",
    "city": "Stockholm",
    "country": "Sweden",
    "title": "IoT powered by Microprofile – Microservices in practice",
    "link": "https://www.devsum.se/sessions/iot-powered-by-microprofile-microservices-in-practice/",
    "video": "",
    "cospeaker": "Rustam Mehmandarov"
},
{
  "conference": "GeeCon Krakow",
    "date": "2019-05-17",
    "city": "Krakow",
    "country": "Poland",
    "title": "9 ways to test your spaghetti code",
    "link": "https://2019.geecon.org/speakers/info.html?id=492",
    "video": "",
    "cospeaker": ""
},
{
  "conference": "JavaDay Istanbul",
    "date": "2019-05-16",
    "city": "Istanbul",
    "country": "Turkey",
    "title": "9 ways to test your spaghetti code",
    "link": "https://2019.javaday.istanbul/speaker/mads-opheim",
    "video": "https://www.youtube.com/watch?v=RaPegXzHvhg",
    "cospeaker": ""
},
{
  "conference": "Booster",
    "date": "2019-03-14",
    "city": "Bergen",
    "country": "Norway",
    "title": "Domain driven design in the real world",
    "link": "https://2019.boosterconf.no/talks/1216",
    "video": "",
    "cospeaker": "Anne Landro"
},
{
  "conference": "DDD Europe",
    "date": "2019-01-31",
    "city": "Amsterdam",
    "country": "Netherlands",
    "title": "Make your tests tell the story of your domain",
    "link": "https://dddeurope.com/2019/speakers/mads-opheim/",
    "video": "",
    "cospeaker": "Anne Landro"
},
{
  "conference": "DDD Norway meetup",
    "date": "2019-01-22",
    "city": "Oslo",
    "country": "Norway",
    "title": "Make your tests tell the story of your domain",
    "link": "https://www.meetup.com/dddnorway/events/257968490/",
    "video": "",
    "cospeaker": "Anne Landro"
},
{
  "conference": "javaBin Trondheim meetup",
    "date": "2018-11-28",
    "city": "Trondheim",
    "country": "Norway",
    "title": "IoT powered by MicroProfile - Microservices in practice",
    "link": "https://www.meetup.com/javaBin-Trondheim/events/255193377/",
    "video": "",
    "cospeaker": "Rustam Mehmandarov"
},
{
  "conference": "Devoxx Ukraine",
    "date": "2018-11-24",
    "city": "Kiev",
    "country": "Ukraine",
    "title": "IoT powered by Microprofile – Microservices in practice",
    "link": "https://dvua18.confinabox.com/talk/NBH-1424/IoT_powered_by_Microprofile_%E2%80%93_Microservices_in_practice",
    "video": "https://www.youtube.com/watch?v=r6bhFOr_jNg",
    "cospeaker": "Rustam Mehmandarov"
},
{
  "conference": "Devoxx Ukraine",
    "date": "2018-11-23",
    "city": "Kiev",
    "country": "Ukraine",
    "title": "9 ways to test your spaghetti code",
    "link": "https://dvua18.confinabox.com/talk/XGY-1566/9_ways_to_test_your_spaghetti_code",
    "video": "https://www.youtube.com/watch?v=ZMuI524OP-8",
    "cospeaker": ""
},
{
  "conference": "JCON",
    "date": "2018-10-09",
    "city": "Düsseldorf",
    "country": "Germany",
    "title": "9 ways to test your spaghetti code",
    "link": "http://jcon.one/en",
    "video": "",
    "cospeaker": ""
},
{
  "conference": "javaBin Stavanger meetup",
    "date": "2018-08-22",
    "city": "Stavanger",
    "country": "Norway",
    "title": "IoT powered by MicroProfile - Microservices in practice",
    "link": "https://www.meetup.com/javaBin-Stavanger/events/253537920/",
    "video": "",
    "cospeaker": "Rustam Mehmandarov"
},
{
  "conference": "Voxxed Days Bucharest",
    "date": "2018-03-22",
    "city": "Bucharest",
    "country": "Romania",
    "title": "IoT powered by MicroProfile - Microservices in practice",
    "link": "https://voxxeddays.com/romania/2018/01/16/iot-powered-by-microprofile-microservices-in-practice/",
    "video": "",
    "cospeaker": "Rustam Mehmandarov"
},
{
  "conference": "Software",
    "date": "2018-02-15",
    "city": "Oslo",
    "country": "Norway",
    "title": "Technology is fun, but the domain is important",
    "link": "https://event.dnd.no/software/sessions/teknologi-er-artig-men-domenet-er-viktig-vanne-landro-og-mads-opheim-computas/",
    "video": "",
    "cospeaker": "Anne Landro"
},
{
  "conference": "JavaZone",
    "date": "2017-09-13",
    "city": "Oslo",
    "country": "Norway",
    "title": "DDD + legacy-monolitt=sant?",
    "link": "https://2017.javazone.no/program/bcbb8c889b204ddbb59a4c5d67035897",
    "video": "",
    "cospeaker": "Anne Landro"
},
{
  "conference": "Booster",
    "date": "2017-02-15",
    "city": "Bergen",
    "country": "Norway",
    "title": "Politikk og programmering - det liknar meir enn du trur",
    "link": "https://2017.boosterconf.no/talks/877",
    "video": "",
    "cospeaker": ""
},
{
  "conference": "NTNU Tech Talks",
    "date": "2017-02-07",
    "city": "Trondheim",
    "country": "Norway",
    "title": "Politikk og programmering - det liknar meir enn du trur",
    "link": "https://techtalks.no/",
    "video": "",
    "cospeaker": ""
}
];
