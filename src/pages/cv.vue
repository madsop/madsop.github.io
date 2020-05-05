<template>
    <Layout>
        <div id="wrapper" class="content-box">
            <h1>CV</h1>
            <p>I'm a tech lead and developer. <a href="/about/">Read more about me.</a></p>
            Mads Opheim
            <a href="mailto:mads.opheim@gmail.com">mads.opheim@gmail.com</a>
            <a href="http://madsopheim.com">madsopheim.com</a>

            <h2>Tech I'm frequently using using</h2>
                <p>Java (8&amp;11), Maven, Jakarta EE 8, Eclipse MicroProfile, Git, Mercurial, Jenkins, SonarQube, Google Cloud Platform,
                    Quarkus, Wildfly, REST, Mockito, JUnit, Docker, Microsoft SQL Server, Vue, HTML, TypeScript, GitHub, yarn, npm and a lot more</p>
            <h2>Methodologies</h2>
            <p>Tech is important to solve the problem right, but you also need to solve the right problem. I've in-depth knowledge of Domain-driven design,
                and stick to test-driven development and <a href="http://modernagile.org/">Modern agile</a>.
                I know Kanban, behaviour-driven development and Scrum and other methodologies as well.
            </p>
            <h2>Formal knowledge</h2>
                <ul>
                    <li><a href="https://www.ntnu.edu/studies/mtdt">Master of Technology in computer science</a> from <a href="https://www.ntnu.no/">NTNU</a>
                    , specialization in AI (2014). <a href="https://ntnuopen.ntnu.no/ntnu-xmlui/handle/11250/253748">Master's thesis</a></li>
                    <li><a href="https://www.microsoft.com/en-us/learning/exam-70-483.aspx">70-483</a> Programming in C# (2014)</li>
                    <li>Certified Scrum master (2015)</li>
                    <li><a href="https://education.oracle.com/java-se-8-programmer-i/pexam_1Z0-808">1Z0-808</a> Oracle Certified Associate, Java SE 8 Programmer I (2016)</li>
                </ul> 
            <h2>Presentations</h2>
            <p>I've been doing a lot of presentations on various topics at meetups, conferences and other events both domestically and internationally. <a href="/talks">See the full list here.</a></p>

            <h2>Jobs</h2>
            <ul>
                <li>2014-present: <a href="https://computas.com/en/">Computas</a>, currently as principal engineer. 
                <a href="https://computas.com/jobb/vare-ansatte/mads">Read more about my experiences at Computas</a></li>
                <li>2013-2014: Leader for <a href="https://umeu.no/">Ungdom mot EU</a> (Youth against Norwegian EU membership)</li>
                <li>2011-2012: Knowledge engineer at <a href="https://computas.com/en/">Computas</a></li>
                <li>2007-2014: Studied at NTNU</li>
            </ul>

            <h2>Side projects</h2>
            <ul>
                <li>This webpage. Built using Vue.js, based on <a href="https://gridsome.org/">Gridsome</a></li>
                <li>Viatrumf scraper. Scraping bonus point earnings from online stores at <a href="https://viatrumf.no/">Viatrumf</a>.

                Running version at <a href="http://viatrumf.madsopheim.com/">http://viatrumf.madsopheim.com/</a><br />

                Scraping with Python and Scrapy, running with Google Cloud Functions. <a href="https://github.com/madsop/viatrumf-scraper">GitHub</a><br />
                Backend-for-frontend running on Quarkus on Java 11 at Google Cloud Run. <a href="https://github.com/madsop/viatrumf-scraper-bff">GitHub</a>

                Frontend built with Vue.js, utilizing Axios and Chart.js, running on Netlify. <a href="https://github.com/madsop/viatrumf-scraper-frontend">GitHub</a>
                </li>
                <li>MicroProfile IoT. Controlling Philips Hue light bulbs through a set of microservices.
                    Mainly intended as a showcase for Eclipse MicroProfile, running on several different appservers, including Quarkus, Thorntail,
                    KumuluzEE and OpenLiberty. Co-project with <a href="http://mehmandarov.com/">Rustam Mehmandarov</a>.
                    <a href="https://github.com/mehmandarov/microprofile-iot">GitHub</a>
                </li>
                <li>And others, which are available on GitHub</li>
            </ul>
            <Profiles />
        </div>
    </Layout>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import Profiles from '@/components/Profiles.vue';


export default Vue.extend({
    data() {
        return {
            metaInfo: {
                title: 'CV'
            }
        }
    }
});
</script>

<style scoped lang="scss">

div#wrapper {
    width: 70%;
    display: grid;
}
h2 {
    margin-top: 0.5em;
}
.icon {
	height: 24px;
	width: 24px;
    margin: 0.3em;
}

</style>