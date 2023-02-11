<template>
    <div>
        <TopBarVue/>
        <div style="display: flex; flex-direction : column ; align-items:flex-start;padding: 3% 3%">
            <h3  style="margin-bottom:2%;">DEVENIR MEMBRE DU PARTI GUD</h3>
            <div style="display: flex; flex-direction : row;justify-content: space-between; align-items: center; width: 50%;padding: 1%;">
                <div>
                    <span>NOM PRENOM</span>
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
            <div style="display: flex; flex-direction : row;justify-content: space-between; align-items: center; width: 50%;padding: 1%;">
                <div>
                    <span>E-MAIL</span>
                </div>
                <div>
                    <v-text-field
                        height="10"
                        placeholder="Enter E-MAIL"
                        outlined
                        hide-details
                        dense
                    ></v-text-field>
                </div>
            </div>
            <div style="display: flex; flex-direction : row;justify-content: space-between; align-items: center; width: 50%;padding: 1%;">
                <div>
                    <span>TELEPHONE</span>
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
            <div style="display: flex; flex-direction : row;justify-content: space-between; align-items: center; width: 50%;padding: 1%;">
                <div>
                    <span>ADRESSE</span>
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
            <div style="display: flex; flex-direction : row;justify-content: space-between; align-items: center; width: 50%;padding: 1%;">
                <div>
                    <span>ETAT/ PROVINCE</span>
                </div>
                <div>
                    <v-text-field
                        height="10"
                        placeholder="Enter ETAT/ PROVINCE"
                        outlined
                        hide-details
                        dense
                    ></v-text-field>
                </div>
            </div>
            <div style="display: flex; flex-direction : row;justify-content: space-between; align-items: center; width: 50%;padding: 1%;">
                <div>
                    <span>PAYS</span>
                </div>
                <div>
                    <v-text-field
                        height="10"
                        placeholder="Enter PAYS"
                        outlined
                        hide-details
                        dense
                    ></v-text-field>
                </div>
            </div>
            <div style="display: flex; flex-direction : row;justify-content: space-between; align-items: center; width: 50%;padding: 1%;">
                <div>
                    <span>CODE POSTAL</span>
                </div>
                <div>
                    <v-text-field
                        height="10"
                        placeholder="Enter CODE POSTAL"
                        outlined
                        hide-details
                        dense
                    ></v-text-field>
                </div>
            </div>
            <div style="display: flex; flex-direction : row;justify-content: space-between; align-items: center; width: 50%;padding: 1%;">
                <v-checkbox v-model="checkbox" hide-details>
                    <template v-slot:label>
                        <div style="color:black">
                        J`ADHERE AU STATUT ET AU REGLEMENT INTERIEUR DU PARTI
                        </div>
                    </template>
                </v-checkbox>
            </div>
            <div style="display: flex; flex-direction : row;justify-content: space-between; align-items: center; width: 50%;padding: 1%;">
                <v-checkbox v-model="checkbox" hide-details>
                    <template v-slot:label>
                        <v-btn style="color:RED; font-weight:bold;box-shadow: none;background-color: lightcoral;">
                        JE JOINT GUD
                        </v-btn>
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