<template>
    <div>
        <TopBarVue />
        <v-carousel
            hide-delimiters
            :show-arrows="false"
            cycle
            height="80vh"
            interval="4000"
            >
                <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
                >
                    <div class="bannerBackground mainDiv">
                        <v-card class="cardContent" style="box-shadow: none;background-color: rgba(64, 50, 41, 0.9);color: #FFF;">
                            <div class="cardTextContent">
                                <span class="cardTextStyleOne">LET US BUILD </span>
                                <span class="cardTextStyleOne">WHAT WE DREAM OF</span>
                                <span class="cardTextStyleTwo">WITH A FUTURE THAT IS QUITABLE AND FAIR FOR ALL</span>
                            </div>
                        </v-card>
                    </div>
                </v-carousel-item>
            </v-carousel>
        <div style="background-color:rgb(24, 167, 152); height:10vh; "></div>
    </div>
</template>

<script>
import TopBarVue from '../components/TopBar.vue';
export default {
    components : {TopBarVue},
    data:()=>({
        slides : 3
    })
}
</script>

<style>

@media screen and (max-width: 767px) {
    .bannerBackground{
        background:url('https://aacparty.org/wp-content/uploads/2018/08/Nigerian-Flag.png');
        width:100%;
        height:30vh;
        background-size: cover;
        background-repeat: no-repeat;
        background-position:center center;
    }

    .mainDiv{
        margin-top : 16px; display: flex; justify-content: center; align-items: center;
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

    .cardTextStyleTwo{
        font-family:Noto; font-size: 0.7rem;font-weight:400; letter-spacing: 0rem;
    }
}

@media screen and (min-width: 768px) {
    .bannerBackground{
        background:url('https://aacparty.org/wp-content/uploads/2018/08/Nigerian-Flag.png');
        width:100%;
        height:80vh;
        background-size: cover;
        background-repeat: no-repeat;
        background-position:center center;
    }

    .mainDiv{
        margin-top : 16px; display: flex; justify-content: center; align-items: center;
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
}



</style>