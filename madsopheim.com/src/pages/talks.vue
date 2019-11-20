<template>
    <Layout class="wrapper">
        <div v-for="talk in this.talks" :key="talk.conference+talk.title" class="myTalks">
            <div id="conference">{{ talk.conference }}</div>
            <div id="date">{{talk.date | formatDate}}</div>
            <div id="title">{{ talk.title }}</div>
            <div><span v-if="talk.cospeaker">with {{ talk.cospeaker }}</span></div>
            <div id="location"><span v-if="talk.city">{{ talk.city }}, </span> {{ talk.country }}</div>
            <div id="link"><a :href="talk.infolink">Link</a><b />
                <a class="videolink" v-if="talk.video" :href="talk.video">Video</a>
            </div>
        </div>
    </Layout>
</template>

<script lang="ts">
import moment from 'moment';
import Vue from 'vue';

export default Vue.extend({
    data: () => ({talks: [
{conference: 'J-Santa', date: '2019-11-30', city: 'Lublin', country: 'Poland', title: 'IoT powered by Microprofile - Microservices in practice', cospeaker: 'Rustam Mehmandarov', infolink: 'https://j-santa.pl'},
{conference: 'JFuture', date: '2019-11-16', city: 'Minsk', country: 'Belarus', title: 'IoT powered by Microprofile – Microservices in practice', infolink: 'https://jfuture.dev/#talk_Mads_Opheim'},
{conference: 'Virtual DDD', date: '2019-11-12', country: 'Virtual', title: 'Make your tests tell the story of your domain', cospeaker: 'Anne Landro', infolink: 'https://www.meetup.com/Virtual-Domain-Driven-Design-meetup/events/266077606'},
{conference: 'KanDDDinsky', date: '2019-10-18', city: 'Berlin', country: 'Germany', title: 'Make your tests tell the story of your domain', cospeaker: 'Anne Landro', infolink: 'https://kandddinsky.de/'},
{conference: 'MakeIT', date: '2019-10-14', city: 'Portoroz', country: 'Slovenia', title: 'IoT powered by Microprofile – Microservices in practice', cospeaker: 'Rustam Mehmandarov', infolink: 'https://www.makeit.si/index.php/vsebina/java-devops/item/90-iot-powered-by-microprofile-microservices-in-practice/'},
{conference: 'Testkonferansen Odin', date: '2019-09-18', city: 'Oslo', country: 'Norway', title: 'Make your tests tell the story of your domain', cospeaker: 'Anne Landro', infolink: 'https://event.dnd.no/odin/make-your-tests-tell-the-story-of-your-domain/'},
{conference: 'JavaZone', date: '2019-09-12', city: 'Oslo', country: 'Norway', title: 'Make your tests tell the story of your domain', cospeaker: 'Anne Landro', video: 'https://vimeo.com/360781128', infolink: 'https://2019.javazone.no/program/31684fcf-7dc4-4b3d-ae1a-1d4e46e0b9e4'},
{conference: 'NDC TechTown', date: '2019-09-05', city: 'Kongsberg', country: 'Norway', title: 'Make your tests tell the story of your domain', cospeaker: 'Anne Landro', video: 'https://www.youtube.com/watch?v=IepYRiQ7Flw', infolink: 'https://ndctechtown.com/talk/make-your-tests-tell-the-story-of-your-domain'},
{conference: 'Jakarta Tech Talks', date: '2019-08-20', country: 'Virtual', title: 'IoT powered by Microprofile – Microservices in practice', cospeaker: 'Rustam Mehmandarov', infolink: 'https://www.meetup.com/jakartatechtalks_/events/263423153/'},
{conference: 'JUGNsk meetup', date: '2019-06-13', city: 'Novosibirsk', country: 'Russia', title: '9 ways to test your spaghetti code', infolink: 'https://www.meetup.com/JUGNsk/events/262010051/'},
{conference: 'Riga Dev Days', date: '2019-05-31', city: 'Riga', country: 'Latvia', title: 'IoT powered by Microprofile – Microservices in practice', cospeaker: 'Rustam Mehmandarov', video: 'https://www.youtube.com/watch?v=Kp5NRcbDvOk', infolink: 'https://2019.rigadevdays.lv/event-sessions/iot-powered-by-microprofile-microservices-in-practice/'},
{conference: 'Nordic Testing Days', date: '2019-05-30', city: 'Tallinn', country: 'Estonia', title: '9 ways to test your spaghetti code', infolink: 'https://nordictestingdays.eu/events/tracks/9-ways-test-your-spaghetti-code'},
{conference: 'JBCNConf', date: '2019-05-27', city: 'Barcelona', country: 'Catalonia', title: 'IoT powered by Microprofile – Microservices in practice', cospeaker: 'Rustam Mehmandarov', infolink: 'http://www.jbcnconf.com/2019/infoTalk.html?id=5c44693a9034ae38180b14b2'},
{conference: 'DevSum', date: '2019-05-23', city: 'Stockholm', country: 'Sweden', title: 'IoT powered by Microprofile – Microservices in practice', cospeaker: 'Rustam Mehmandarov', infolink: 'https://www.devsum.se/sessions/iot-powered-by-microprofile-microservices-in-practice/'},
{conference: 'GeeCon Krakow', date: '2019-05-17', city: 'Krakow', country: 'Poland', title: '9 ways to test your spaghetti code', infolink: 'https://2019.geecon.org/speakers/info.html?id=492'},
{conference: 'JavaDay Istanbul',date: '2019-05-16', city: 'Istanbul', country: 'Turkey', title: '9 ways to test your spaghetti code', video: 'https://www.youtube.com/watch?v=RaPegXzHvhg', infolink: 'https://2019.javaday.istanbul/speaker/mads-opheim'},
{conference: 'Booster', date: '2019-03-14', city: 'Bergen', country: 'Norway', title: 'Domain driven design in the real world', cospeaker: 'Anne Landro', infolink: 'https://2019.boosterconf.no/talks/1216'},
{conference: 'DDD Europe', date: '2019-01-31', city: 'Amsterdam', country: 'Netherlands', title: 'Make your tests tell the story of your domain', cospeaker: 'Anne Landro', infolink: 'https://dddeurope.com/2019/speakers/mads-opheim/'},
{conference: 'DDD Norway meetup', date: '2019-01-22', city: 'Oslo', country: 'Norway', title: 'Make your tests tell the story of your domain', cospeaker: 'Anne Landro', infolink: 'https://www.meetup.com/dddnorway/events/257968490/'},

{conference: 'javaBin Trondheim meetup', date: '2018-11-28', city: 'Trondheim', country: 'Norway', title: 'IoT powered by MicroProfile - Microservices in practice', cospeaker: 'Rustam Mehmandarov', infolink: 'https://www.meetup.com/javaBin-Trondheim/events/255193377/'},
{conference: 'Devoxx Ukraine', date: '2018-11-24', city: 'Kiev', country: 'Ukraine', title: 'IoT powered by Microprofile – Microservices in practice', cospeaker: 'Rustam Mehmandarov', video: 'https://www.youtube.com/watch?v=r6bhFOr_jNg', infolink: 'https://dvua18.confinabox.com/talk/NBH-1424/IoT_powered_by_Microprofile_%E2%80%93_Microservices_in_practice'},
{conference: 'Devoxx Ukraine', date: '2018-11-23', city: 'Kiev', country: 'Ukraine', title: '9 ways to test your spaghetti code', video: 'https://www.youtube.com/watch?v=ZMuI524OP-8', infolink: 'https://dvua18.confinabox.com/talk/XGY-1566/9_ways_to_test_your_spaghetti_code'},
{conference: 'JCON', date: '2018-10-09', city: 'Düsseldorf', country: 'Germany', title: '9 ways to test your spaghetti code', infolink: 'http://jcon.one/en'},
{conference: 'javaBin Stavanger meetup', date: '2018-08-22', city: 'Stavanger', country: 'Norway', title: 'IoT powered by MicroProfile - Microservices in practice', cospeaker: 'Rustam Mehmandarov', infolink: 'https://www.meetup.com/javaBin-Stavanger/events/253537920/'},
{conference: 'Voxxed Days Bucharest', date: '2018-03-22', city: 'Bucharest', country: 'Romania', title: 'IoT powered by MicroProfile - Microservices in practice', cospeaker: 'Rustam Mehmandarov', infolink: 'https://voxxeddays.com/romania/2018/01/16/iot-powered-by-microprofile-microservices-in-practice/'},
{conference: 'Software', date: '2018-02-15', city: 'Oslo', country: 'Norway', title: 'Technology is fun, but the domain is important', cospeaker: 'Anne Landro', infolink: 'https://event.dnd.no/software/sessions/teknologi-er-artig-men-domenet-er-viktig-vanne-landro-og-mads-opheim-computas/'},

{conference: 'JavaZone', date: '2017-09-13', city: 'Oslo', country: 'Norway', title: 'DDD + legacy-monolitt=sant?', cospeaker: 'Anne Landro', infolink: 'https://2017.javazone.no/program/bcbb8c889b204ddbb59a4c5d67035897'},
{conference: 'Booster', date: '2017-02-15', city: 'Bergen', country: 'Norway', title: 'Politikk og programmering - det liknar meir enn du trur', infolink: 'https://2017.boosterconf.no/talks/877'},
{conference: 'NTNU Tech Talks', date: '2017-02-07', city: 'Trondheim', country: 'Norway', title: 'Politikk og programmering - det liknar meir enn du trur', infolink: 'https://techtalks.no/', }
]})});

Vue.filter('formatDate', function(value) {
    if (value)
        return moment(String(value)).format('MMMM Do YYYY')
})

</script>

<style lang="scss" scoped>

div.myTalks {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1.1fr 1fr 2.5fr 1.1fr 1fr 0.6fr;
}

.myTalks div {
    display: flex;
    justify-content: left;
    $mobile-max: 700px;
    text-align: left;
    @media screen and (max-width: $mobile-max) {
        padding: 0.2rem 0.1rem;
        margin: 0.3rem 0.1rem;
        word-break: break-word;
    }
    margin: 0.2rem;
}

a.videolink {
    margin-left: 1em;
}

</style>