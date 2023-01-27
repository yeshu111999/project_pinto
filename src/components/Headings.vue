<template>
    <div class="text-center" style="padding: 12px 0% 0% 0%;" :class="$mq != 'desktop' ? 'mainClassMobile' : ''">
        <v-menu
        transition="scroll-y-transition"
        open-on-click
        bottom
        offset-y
        open-on-hover
        :min-width="$mq != 'desktop' ? '100%' : ''"
        >
        <template v-slot:activator="{ on, attrs }">
            <v-hover v-slot="{ hover }" >
                <v-btn
                text
                v-bind="attrs"
                v-on="on"
                @click="routeToRightMethod(headingName)"
                style="text-transform: capitalize;font-size: 17px;font-family:Noto; font-weight:400;letter-spacing: 0rem;"
                :style="{ 'color': hover ? '#F19B14' : '#000000'}"
                >
                <div v-if="headingName == 'More'" align-items = "right">
                    <v-app-bar-nav-icon color="#000000"></v-app-bar-nav-icon>
                </div>
                <span v-else>{{headingName}}</span>
                </v-btn>
            </v-hover>
        </template>
        <v-card :class="$mq != 'desktop' ? 'menuClass' : 'desktopMenuClass'">
            <v-list v-if="items">
                <v-list-item
                v-for="(item, index) in items"
                :key="index"
                >
                <v-hover v-slot="{ hover }" >
                <v-list-item-title >
                   
                    <v-btn
                    hide-details
                    text
                    style="text-transform: capitalize; display: flex;justify-content: flex-start;font-family:Noto; font-size: 17px;font-weight:400; letter-spacing: 0rem;padding: 1% 0%;width:100%;box-shadow: unset;"
                    :style="{ 'background-color': hover ? '#403229' : '#FFFFFF', 'color': hover ? '#FFFFFF' : '#000000' }"
                    @click="routeToRightMethod(item.title)"
                    >
                        {{ item.title }}
                    </v-btn>
                    <v-divider></v-divider>
                </v-list-item-title>
                </v-hover>
                </v-list-item>
            </v-list>
        </v-card>
        </v-menu>
        <div>
            <v-dialog
            v-model="unauthorized"
            :max-width="$mq != 'desktop' ? '600px' : '800px'"
            hide-overlay
            
            >
                <login @setAuthorized="setAuthorized()"/>
            </v-dialog>
        </div>
    </div>
</template>

<script>
export default {
    props:['headingName' , 'items', 'page'],
    data: () => ({
        unauthorized : null
    }),
    methods:{
        routeToRightMethod(route){
            if(route=="HOME"){
                this.$router.push({
                    name: 'Home'
                })
            }
            else if(route=="ACTUALITES"){
                this.$router.push({
                    name: 'Actualites'
                })
            }
            else if (route=="Titlepal") {
                window.open("https://titlepal.com/" , "_blank")
            }
            else if (route=="STRUCTURES") {
                this.$router.push({
                    name: 'Actualites'
                })
            }
            else if (route=="ADHESION") {
                this.$router.push({
                    name: 'Adhesion'
                })
            }
            else if (route=="MISSION") {
                this.$router.push({
                    name: 'Actualites'
                })
            }
            else if (route=="PRIORITES") {
                this.$router.push({
                    name: 'Priorites'
                })
            }
            else if (route=="DONATION") {
                this.$router.push({
                    name: 'Donation'
                })
            }
            else if (route=="Home") {
                this.$router.push({
                    name: 'Home'
                })
            }
            else if (route=="Pawn Scan") {
                this.$router.push({
                    name: 'SearchDetails'
                })
            }
            else if (route=="Pawn It") {
                if(this.$cookies.get('authorized')){
                    this.unauthorized = false;
                    this.$router.push({
                        name: 'PawnIt'
                    })
                }
                else{
                    this.unauthorized = true;
                }
            }
            else if (route=="Sell It") {
                if(this.$cookies.get('authorized')){
                    this.unauthorized = false;
                    this.$router.push({
                        name: 'SellIt'
                    })
                }
                else{
                    this.unauthorized = true;
                }
            }
            else {
                console.log("No other possible route");
            }
        },
        setAuthorized(){
            this.unauthorized = false;
            if (this.$props.page == 'SellIt') {
                this.$router.push({
                        name: 'SellIt'
                    })
            }
            else if(this.$props.page == 'PawnIt'){
                this.$router.push({
                        name: 'PawnIt'
                    })
            }
        }
    }
}
</script>

<style scoped>
.menuClass{
    width:100%;
}

.desktopMenuClass{
    background-color: #403229 !important;
}

.mainClassMobile{
    display: flex;
    justify-content: flex-end;
}
</style>