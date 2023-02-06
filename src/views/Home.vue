<template>
    <div>
        <TopBarVue />
        <div style="display:flex; flex-direction : row;">
            <v-carousel
                hide-delimiters
                :show-arrows="false"
                cycle
                :height="$mq == 'desktop' ? '80vh' : '30vh'"
                interval="4000"
                >
                    <v-carousel-item
                    v-for="(slide, i) in imageSlides"
                    :key="i"
                    >
                        <div class="mainPageScroll">
                            <img style='height: 100%; width: 100%; object-fit: contain' :src="slide.image" />
                        </div>
                        <!-- <div class="bannerBackground mainDiv" :style="{'background' : 'url('+ slide.image+')'}"> -->
                            <!-- <v-card class="cardContent" style="box-shadow: none;background-color: rgba(64, 50, 41, 0.9);color: #FFF;">
                                <div class="cardTextContent">
                                    <span class="cardTextStyleOne">LET US BUILD </span>
                                    <span class="cardTextStyleOne">WHAT WE DREAM OF</span>
                                    <span class="cardTextStyleTwo">WITH A FUTURE THAT IS QUITABLE AND FAIR FOR ALL</span>
                                </div>
                            </v-card> -->
                        <!-- </div> -->
                </v-carousel-item>
            </v-carousel>
            <div style="width:40%; height:80vh; display: flex; justify-content: center;align-items: center;">
                <img style='height: 100%; width: 100%; object-fit: contain' src="https://i.postimg.cc/8cTCMZD9/logoCrop.jpg" />
            </div>
        </div>
        <div style="background-color:rgb(24, 167, 152); height:10vh; "></div>
        <div style="background-color:rgb(65, 48, 40);color: #FFF;padding:2% 0%;">
            <span :class="$mq=='desktop' ? 'cardTextStyleOne' : 'cardTextStyleOneBigger'">#OurOwnParty</span>
            <v-divider color="white" width="80%" style="margin:1% auto 2% auto;"></v-divider>
            <span :class="$mq=='desktop' ? 'cardTextStyleTwo' : 'cardTextStyleTwoBigger'">The ONLY Movement-powered, People-owned, Grassroots-driven Political Party. Don’t settle for MEDIOCRITY! Join Us Today</span>
        </div>
        <div v-if="$mq=='mobile'">
            <v-divider color="black" width="20%" style="border:3px rgb(65, 48, 40) solid; margin:12% auto 8% auto"></v-divider>
            <span class="cardTextStyleOneBigger">LATEST NEWS</span>
            <v-carousel
            hide-delimiters
            :show-arrows="false"
            cycle
            :height="$mq == 'desktop' ? '80vh' : '70vh'"
            interval="4000"
            >
                <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
                >
                <div class="newsCard">
                    <v-card>
                        <div class="newsCardImage">
                            <!-- <img src= "../assets/NewsImage1.jpg" /> -->
                        </div>
                        <div style="margin:8% 0%;">
                            <span class="cardTextStyleOneBigger">
                                Our party helps poor children to get educated and get basic needs along with education
                            </span>
                        </div>
                        <v-divider></v-divider>
                        <div>
                            <v-btn class="readMoreButton">READ MORE</v-btn>
                        </div>
                    </v-card>
                </div>
                </v-carousel-item>
            </v-carousel>
        </div>
        <div v-else>
            <v-divider color="black" width="8%" style="border:3px rgb(65, 48, 40) solid; margin:4% auto 2% auto"></v-divider>
            <span class="cardTextStyleOne">DERNIERES ACTUALITES</span>
            <div class="desktopNews">
                <div v-for="(slide, i) in slides"
                    :key="i" class="newsCard">
                    <v-card>
                        <div class="newsCardImage">
                            <!-- <img src= "../assets/NewsImage1.jpg" /> -->
                        </div>
                        <div style="margin:8% 0%;">
                            <span class="cardTextStyleOneBigger">
                                Our party helps poor children to get educated and get basic needs along with education
                            </span>
                        </div>
                        <v-divider></v-divider>
                        <div>
                            <v-btn class="readMoreButton">READ MORE</v-btn>
                        </div>
                    </v-card>
                </div>
            </div>
        </div>
        <div :class="$mq=='desktop' ? 'addMainContentDesktop' : ''">
            <div :style="{'width':$mq == 'desktop'? '25%' : ''}" v-for="(addImage, i) in addImages1" :key="i">
                <div class="addBannerBackground" :style="{'background' : 'url('+ addImage.image+')'}">
                    <span class="addDiv">{{addImage.text}}</span>
                </div>
            </div>
        </div>
        <div :class="$mq=='desktop' ? 'addMainContentDesktop' : ''">
            <div :style="{'width':$mq == 'desktop'? '25%' : ''}" v-for="(addImage, i) in addImages2" :key="i">
                <div class="addBannerBackground" :style="{'background' : 'url('+ addImage.image+')'}">
                    <span class="addDiv">{{addImage.text}}</span>
                </div>
            </div>
        </div>
        <div :class="$mq=='desktop' ? 'addMainContentDesktop' : ''">
            <div :style="{'width':$mq == 'desktop'? '25%' : ''}" v-for="(addImage, i) in addImages3" :key="i">
                <div class="addBannerBackground" :style="{'background' : 'url('+ addImage.image+')'}">
                    <span class="addDiv">{{addImage.text}}</span>
                </div>
            </div>
        </div>

        <div style="padding:5%;">
            <span class="connectWithUs">NOUS JOINDRE</span>
            <div class="connectionItemsAlignment">
                <img :style="{'padding':$mq == 'mobile'? '4% 0%' : '0%'}" src="https://aacparty.com/wp-content/uploads/2015/07/twconnect.png" />
                <img :style="{'padding':$mq == 'mobile'? '4% 0%' : '0%'}" src="https://aacparty.com/wp-content/uploads/2015/07/ytconnect.png" />
                <img :style="{'padding':$mq == 'mobile'? '4% 0%' : '0%'}" src="https://aacparty.com/wp-content/uploads/2015/07/fbconnect.png" />
                <img :style="{'padding':$mq == 'mobile'? '4% 0%' : '0%'}" src="https://aacparty.com/wp-content/uploads/2015/07/igconnect.png" />
            </div>
        </div>
    </div>
</template>

<script>
import TopBarVue from '../components/TopBar.vue';
export default {
    components : {TopBarVue},
    data:()=>({
        slides : 3,
        imageSlides : [
            { image : 'https://i.postimg.cc/bJyJ26qM/DSC00061.jpg' },
            { image : 'https://i.postimg.cc/1ghbw7qd/DSC00102.jpg' },
            { image : 'https://i.postimg.cc/R0n8L9ZJ/DSC00121.jpg' },
            { image : 'https://i.postimg.cc/ZKV1TVQn/usa-gud-meeting.jpg' },
        ],
        addImages1 : [
            {
                image : 'https://aacparty.org/wp-content/uploads/2018/08/Security-600x450.jpg',
                text : 'Security'
            },
            {
                image : 'https://aacparty.org/wp-content/uploads/2018/08/Power-600x450.jpg',
                text : 'Power'
            },
            {
                image : 'https://aacparty.org/wp-content/uploads/2018/08/Infrastructure-600x450.jpg',
                text : 'Infrastructure'
            },
            {
                image : 'https://aacparty.org/wp-content/uploads/2018/08/Corruption-600x450.jpg',
                text : 'Corruption'
            }
        ],
        addImages2 : [
            {
                image : 'https://aacparty.org/wp-content/uploads/2018/08/ECO-600x450.jpg',
                text : 'Economy and Job Growth'
            },
            {
                image : 'https://aacparty.org/wp-content/uploads/2018/08/Restructuring-600x450.jpg',
                text : 'Restructuring'
            },
            {
                image : 'https://aacparty.org/wp-content/uploads/2018/08/Healthcare-600x450.jpg',
                text : 'HealthCare'
            },
            {
                image : 'https://aacparty.org/wp-content/uploads/2018/08/Education-600x450.jpg',
                text : 'Education'
            }
            ],
        addImages3 : [
            {
                image : 'https://aacparty.org/wp-content/uploads/2018/08/AGRIC-600x450.jpg',
                text : 'Agriculture'
            },
            {
                image : 'https://aacparty.org/wp-content/uploads/2018/08/Tourism-600x450.jpg',
                text : 'Tourism'
            },
            {
                image : 'https://aacparty.org/wp-content/uploads/2018/08/Infrastructure-600x450.jpg',
                text : 'Infrastructure'
            },
            {
                image : 'https://aacparty.org/wp-content/uploads/2018/08/Restructuring-600x450.jpg',
                text : 'Restructuring'
            }
        ]
    })
}
</script>

<style>

@media screen and (max-width: 767px) {
    .bannerBackground{
        background:url('../assets/NewsImage1.jpg');
        width:100%;
        height:30vh;
        background-size: cover;
        background-repeat: no-repeat;
        background-position:center center;
    }

    .addBannerBackground{
        width:100%;
        height:30vh;
        background-size: cover;
        background-repeat: no-repeat;
        background-position:center center;
    }

    .mainDiv{
        margin-top : 16px; display: flex; justify-content: center; align-items: center;
    }
    .readMoreButton{
        width:100%;
        box-shadow: none;
    }
    .cardContent{
        font-family:Noto; 
        font-size: 0.4rem;
        font-weight:400; 
        letter-spacing: 0rem;
        width: 80%;
    }

    .cardTextContent{
        display: flex; 
        flex-direction : column;
        margin : 4%;
        border: 2px white solid;
        padding:2% 1%;
    }

    .cardTextStyleOne{
        font-family:Noto; font-size: 1.2rem;font-weight:400; letter-spacing: 0rem;
    }

    .cardTextStyleOneBigger{
        font-family:Noto; font-size: 2rem;font-weight:400; letter-spacing: 0rem;
    }

    .cardTextStyleTwo{
        font-family:Noto; font-size: 0.7rem;font-weight:400; letter-spacing: 0rem;
    }

    .cardTextStyleTwoBigger{
        font-family:Noto; font-size: 1.4rem;font-weight:400; letter-spacing: 0rem;
    }

    .newsCard{
        width:90%;
        margin: 4% auto;
    }
    .newsCardImage{
        background:url('../assets/NewsImage1.jpg');
        height:30vh;
        background-size: cover;
        background-repeat: no-repeat;
        background-position:center center;
    }

    .addDiv{
        display: flex;
        height: 30vh;
        justify-content: flex-start;
        align-items: flex-end;
        padding: 8%;
        color: #FFF;
        font-family: Noto;
        font-size: 1.7rem;
        font-weight: 500;
    }

    .connectWithUs{
        font-family:Noto; 
        font-size: 24px;
        font-weight:500; 
        letter-spacing: 0rem;
    }
    .connectionItemsAlignment{
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin: 5% auto;
    }
}

@media screen and (min-width: 768px) {
    .bannerBackground{
        background:url('../assets/logo.jpeg');
        width:100%;
        height:80vh;
        background-size: cover;
        background-repeat: no-repeat;
        background-position:center center;
    }

    .mainPageScroll{
        width:80%;
        height:80vh;
    }
    .newsCard{
        width:30%;
        margin: 4% auto;
    }
    .newsCardImage{
        background:url('../assets/NewsImage1.jpg');
        height:30vh;
        background-size: cover;
        background-repeat: no-repeat;
        background-position:center center;
    }

    .readMoreButton{
        width:100%;
        box-shadow: none;
    }

    .cardTextStyleOneBigger{
        font-family:Noto; font-size: 2rem;font-weight:400; letter-spacing: 0rem;
    }

    .addBannerBackground{
        width:100%;
        height:30vh;
        background-size: cover;
        background-repeat: no-repeat;
        background-position:center center;
    }

    .mainDiv{
        margin-top : 16px; display: flex; justify-content: center; align-items: center;
    }

    .desktopNews{
        display: flex;
        flex-direction: row;
        width:70%;
        margin: auto;
    }

    .cardContent{
        font-family:Noto; 
        font-size: 17px;
        font-weight:400; 
        letter-spacing: 0rem;
        width: 50%;
    }

    .cardTextContent{
        display: flex; 
        flex-direction : column;
        margin : 4%;
        border: 2px white solid;
        padding:2% 1%;
    }

    .cardTextStyleOne{
        font-family:Noto; font-size: 2.5rem;font-weight:400; letter-spacing: 0rem;
    }

    .cardTextStyleTwo{
        font-family:Noto; font-size: 1.4rem;font-weight:400; letter-spacing: 0rem;
    }

    .connectWithUs{
        font-family:Noto; 
        font-size: 24px;
        font-weight:500; 
        letter-spacing: 0rem;
    }
    .connectionItemsAlignment{
        width: 70%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin: 5% auto;
    }

    .addDiv{
        display: flex;
        height: 30vh;
        justify-content: flex-start;
        align-items: flex-end;
        padding: 8%;
        color: #FFF;
        font-family: Noto;
        font-size: 1.7rem;
        font-weight: 500;
    }

    .addMainContentDesktop{
        display: flex;
        flex-direction: row;
    }
}



</style>