<template>
    <div>
        <TopBarVue/>
        <div style="display: flex; flex-direction : column ; align-items:flex-start;padding: 3% 3%">
            <h3  style="margin-bottom:2%;">DEVENIR MEMBRE DU PARTI GUD</h3>
            <div style="display:flex; flex-direction :row; justify-content:space-between;">
                <div style="display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: flex-start;
                    width: 40%;
                    padding: 1%;">
                    <div>
                        <span>PRENOM</span>
                    </div>
                    <div>
                        <v-text-field
                            height="10"
                            placeholder="Enter PRENOM"
                            outlined
                            hide-details
                            dense
                        ></v-text-field>
                    </div>
                </div>
                <div style = "display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: flex-start;
                        width: 40%;
                        padding: 1%;"
                    >
                    <div>
                        <span>NOM</span>
                    </div>
                    <div>
                        <v-text-field
                            height="10"
                            placeholder="Enter NOM"
                            outlined
                            hide-details
                            dense
                        ></v-text-field>
                    </div>
                </div>
            </div>
            <div style="display:flex; flex-direction :row; justify-content:space-between;">
                <div style = "display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: flex-start;
                    width: 40%;
                    padding: 1%;
                    ">
                    <div>
                        <span>ADDRESSE</span>
                    </div>
                    <div>
                        <v-text-field
                            height="10"
                            placeholder="Enter ADDRESSE"
                            outlined
                            hide-details
                            dense
                        ></v-text-field>
                    </div>
                </div>
                <div style = "display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: flex-start;
                        width: 40%;
                        padding: 1%;"
                    >
                    <div>
                        <span>NUMERO DE TELEPHONE</span>
                    </div>
                    <div>
                        <v-text-field
                            height="10"
                            placeholder="Enter TELEPHONE"
                            outlined
                            hide-details
                            dense
                        ></v-text-field>
                    </div>
                </div>
            </div>
            <div style = "display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: flex-start;
                        width: 80%;
                        padding: 1%;">
                <div>
                    <span>NUMERO DE TELEPHONE</span>
                </div>
                <v-textarea
                    width="100%"
                    outlined
                    dense
                ></v-textarea>
            </div>
            <div style="display: flex; flex-direction : row;justify-content: space-between; align-items: center; width: 50%;padding: 1%;">
                <v-checkbox v-model="checkbox" hide-details>
                    <template v-slot:label>
                        <div style="color:black; font-weight:bold">
                        ENVOYEZ
                        </div>
                    </template>
                </v-checkbox>
            </div>
        </div>
    </div>
</template>

<script>

import TopBarVue from '../components/TopBar.vue';
export default {
    components : {TopBarVue},
    data:()=>({
    })
}
</script>

<style>

</style>

<style scoped>
 .v-text-field{
      width: 400px;
}
</style>