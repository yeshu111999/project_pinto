<template>
    <div>
        <TopBarVue/>
        <div style="display: flex; flex-direction : column ; align-items:flex-start;padding: 3% 3%">
            <div style="display:flex;flex-direction: row;justify-content: center; align-items: center;padding: 1% 0%;">
                <div style="font-size: 1.2rem;font-weight: 600;">
                    <span>Nom de la Banque :</span>
                </div>
                <div style="font-size: 1.2rem;font-weight: 400;">
                    <span>&nbsp;&nbsp;&nbsp;VISTA GUI(EX BICGUI)</span>
                </div>
            </div>
            <div style="display:flex;flex-direction: row;justify-content: center; align-items: center;padding: 1% 0%;">
                <div style="font-size: 1.2rem;font-weight: 600;">
                    <span>Adresse :</span>
                </div>
                <div style="font-size: 1.2rem;font-weight: 400;">
                    <span>&nbsp;&nbsp;&nbsp;Avenue de la Republique, Commune de Kaloum, Conakry, BP 1484</span>
                </div>
            </div>
            <div style="display:flex;flex-direction: row;justify-content: center; align-items: center;padding: 1% 0%;">
                <div style="font-size: 1.2rem;font-weight: 600;">
                    <span>Intitule de compte :</span>
                </div>
                <div style="font-size: 1.2rem;font-weight: 400;">
                    <span>&nbsp;&nbsp;&nbsp;M CAMARA SEKOU BENNA</span>
                </div>
            </div>
            <div style="display:flex;flex-direction: row;justify-content: center; align-items: center;padding: 1% 0%;">
                <div style="display: flex;flex-direction: column;align-items: center;justify-content: center;">
                    <div style="font-size: 1.2rem;font-weight: 600;">
                        <span>Code Agence</span>
                    </div>
                    <div style="font-size: 1.2rem;font-weight: 600;">
                        <span>&nbsp;&nbsp;&nbsp;09842</span>
                    </div>
                </div>
                <div style="display: flex;flex-direction: column;align-items: center;justify-content: center;">
                    <div style="font-size: 1.2rem;font-weight: 600;">
                        <span>Numero de Compte :</span>
                    </div>
                    <div style="font-size: 1.2rem;font-weight: 600;">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10394701023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;USD</span>
                    </div>
                </div>
            </div>
            <div style="display:flex;flex-direction: row;justify-content: center; align-items: center;padding: 1% 0%;">
                <div style="font-size: 1.2rem;font-weight: 600;">
                    <span>Swift ou Bic :</span>
                </div>
                <div style="font-size: 1.2rem;font-weight: 600;">
                    <span>&nbsp;&nbsp;&nbsp;BICIGNCXXXX</span>
                </div>
            </div>
            <div style="display:flex;flex-direction: row;justify-content: center; align-items: center;padding: 1% 0%;">
                <div style="font-size: 1.2rem;font-weight: 600;">
                    <span>REFERENCE BANCAIRE COMPTE CORRESPONDANT EN USD VISTAGUI :</span>
                </div>
                <div style="font-size: 1.2rem;font-weight: 400;">
                    <span>&nbsp;&nbsp;</span>
                </div>
            </div>
            <div style="display:flex;flex-direction: row;justify-content: center; align-items: center;padding: 1% 0%;">
                <div style="font-size: 1.2rem;font-weight: 600;">
                    <span>NOM DE LA Banque :</span>
                </div>
                <div style="font-size: 1.2rem;font-weight: 400;">
                    <span>&nbsp;&nbsp;&nbsp;BIAT TUNISIE (BANQUE INTERNATIONALE ARABE DE TUNISIE)</span>
                </div>
            </div>
            <div style="display:flex;flex-direction: row;justify-content: center; align-items: center;padding: 1% 0%;">
                <div style="font-size: 1.2rem;font-weight: 600;">
                    <span>Code Swift ou Bic :</span>
                </div>
                <div style="font-size: 1.2rem;font-weight: 600;">
                    <span>&nbsp;&nbsp;&nbsp;BIATTNTTXXXX</span>
                </div>
            </div>
            <span>Nous vous en souhaitons bonne reception</span>
        </div>
        <!-- <div style="display: flex; flex-direction : column ; align-items:flex-start;padding: 3% 3%">
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
                        <v-btn style="color:black; font-weight:bold; box-shadow: none; background-color: lightcoral;">
                        ENVOYEZ
                        </v-btn>
                    </template>
                </v-checkbox>
            </div>
        </div> -->
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