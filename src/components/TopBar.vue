<template>
    <div>
        <div v-if="$mq == 'desktop'" class="commonHeaderClass">
            <Heading :heading-name="'HOME'" :items="homeItems"/>
            <Heading :heading-name="'MANIFESTO'" :items="homeItems"/>
            <Heading :heading-name="'BECOME A MEMBER'"/>
            <Heading :heading-name="'TAKE ACTION!'" :items="homeItems"/>
            <Heading :heading-name="'EVENTS'" :items="homeItems"/>
            <Heading :heading-name="'CONTACT'" />
        </div>
        <div v-else>
            <Heading :heading-name="'More'" :items="allItems"/>
        </div>
    </div>
</template>

<script>
import Heading from '../components/Headings.vue';
export default {
        components: { Heading },
        props:['page'],
        data(){
            return{
                search : '',
                homeItems : [
                    { title: 'Lorem Ipsum' },
                    { title: 'Lorem Ipsum' },
                    { title: 'Lorem Ipsum' },
                    { title: 'Lorem Ipsum' },
                ],
                moreItems : [
                    {title: 'Contact Us'},
                    { title: 'About Us' },
                    { title: 'Investor Relations' },
                ],
                allItems :[
                    { title: 'HOME'},
                    { title: 'MANIFESTO' },
                    { title: 'BECOME A MEMBER' },
                    { title: 'TAKE ACTION!' },
                    { title: 'EVENTS' },
                    { title: 'CONTACT' }
                ]
            }
        },
        methods: {
            searchMethod(word){
                console.log("Entered in search Area");
                this.$router.push({
                    name:'Pawn Scan',
                    params : {
                        searchword : word
                    }
                })
            },
            SignIn(){
                this.$router.push({
                    name:'Login'
                })
            },
            SignUp(){
                this.$router.push({
                    name:'SignUp'
                })
            }
        }
    }
</script>

<style scoped>
.mainMobileClass {
    display:flex; flex-direction : row;justify-content:flex-end; width: 100%;padding: 8px;
}
.mainDesktopClass {
    display:flex; flex-direction : row;justify-content:center; width: 100%;padding: 8px;
}

.topBarMobile{
    display:flex; flex-direction : column;align-items: flex-end; padding:1%;
}

.topBarDesktop{
    display:flex; flex-direction : row;justify-content:space-around;padding:14px
}

.headerAlignMobile{
    display:flex; flex-direction : row;justify-content:flex-end;padding: 1% 0%;
}
.headerAlignMobile2{
    width:50%; display:flex; flex-direction : row;justify-content:space-between; padding: 1% 0%;
}

.headerAlignMobile3{
    width:60%; display:flex; flex-direction : row;justify-content:space-between; padding: 1% 0%;
}

.headerAlignDesktop{
    display:flex; flex-direction : row;justify-content:space-around;width:20%;
}

.mobileLogo{
    width: 100%;display: flex;flex-direction: row; justify-content: center;align-items:center;
}

.DesktopLogo{
    width: 30%;display: flex;flex-direction: row; justify-content: center;align-items:center;
}
.mobileTopBarContent{
    width:100%;
}
.DesktopTopBarContent{
    width:70%;
}
.logoImageMobile{
    width:100%;
}
.headerClass {
    font-size: 16px;
    font-weight: 600;
    padding: 12px 0% 0% 0%;
    display: flex;
    flex-direction: column;
}
.commonHeaderClass {
    display:flex;
    flex-direction : row;
    justify-content: space-evenly;
}

.emailandPhone {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;
}

.avatarClass {
    display:flex;flex-direction: row; justify-content:center;
}

.mobileMenuClass{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>