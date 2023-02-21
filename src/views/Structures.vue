<template>
    <div>
        <TopBarVue/>
        <div style="padding:5%; text-align: left;color:black">
            <span class="Headings">STRUCTURES DU PARTI GUD</span>
            <br>
            <br>
            <span class="Headings">
                LE CONSEIL NATIONAL
            </span>
            <br>
            <span>
                Le Conseil national est l’organe national du Parti. Il assure la direction du Parti dans l’intervalle de deux
sessions du Congrès national, prend toutes les dispositions nécessaires pour l’application des présents
statuts et la bonne marche du Parti.
            </span>
            <br>
            <br>
            <span>
                Il est composé de la façon suivante : 
            </span>
            <br>
            <br>
            <ul class="UnorderedList">
                <li>Le Président du Parti ;</li>
                <li>Le Secrétaire National ;</li>
                <li>Trente (30) Secrétaires délégués proposés à l’investiture de la session nationale du Congrès par
le Président du Parti;
                </li>
            </ul>
            <br>
            <br>
            <span>
                Des membres de droit dont :
            </span>
            <br>
            <br>
            <ul class="UnorderedList">
                <li>Cinq (5) délégués par Fédération (Le Secrétaire Fédéral, le Secrétaire Fédéral Adjoint, La
Présidente du Comité́fédéral du Mouvement des Femmes (MFE), le Secrétaire Fédéral du
Comité fédéral du Mouvement des Jeunes (MJE) et le Secrétaire Général du Comité́fédéral
du Mouvement de la Corporation de l’Espoir (MCE) ; </li>
                <li>Les militants, membres du Gouvernement en exercice ; </li>
                <li>Le Président du groupe parlementaire du Parti en fonction à l’Assemblée Nationale ; </li>
                <li>Les députés du Parti en fonction ;</li>
                <li>Les membres des Comités nationaux des jeunes, des femmes et des corporations ; </li>
            </ul>
            <br>
            <br>
            <span class="Headings">
                Les organismes spécialisés nationaux
            </span>
            <br>
            <br>
            <span class="Headings">Le Comité́ national des Jeunes est composé de dix-sept (17) membres ci-après désignés :</span>
            <br>
            <br>
            <ul class="UnorderedList">
                <li>Un (1) Secrétaire Général ;</li>
                <li>Un (1) Secrétaire Général adjoint ; </li>
                <li>Un (1) Trésorier ; </li>
                <li>Deux (2) Secrétaires à l’Organisation ;</li>
                <li>Deux (2) Secrétaires à l’Information et à la Communication ; </li>
                <li>Deux (2) Secrétaires aux Affaires Économiques et à l’Environnement ;</li>
                <li>Deux (2) Secrétaires à la Culture, aux Sport et à l’Éducation civique ;</li>
                <li>Deux (2) Secrétaires à la Discipline ;</li>
                <li>Deux (2) Secrétaires aux Affaires Sociales ; </li>
                <li>Deux (2) Secrétaires à la Propagande et aux Adhésions ; </li>
            </ul>
            <br>
            <br>
            <span class="Headings">Le Comité́ national des Femmes est composé de dix-sept (17) membres ci-après désignés :</span>
            <br>
            <br>
            <ul class="UnorderedList">
                <li>Une (1) Présidente ; </li>
                <li>Une (1) Vice-Présidente</li>
                <li>Une (1) Secrétaire Générale ; </li>
                <li>Une (1) Trésorière ;</li>
                <li>Trois (3) Secrétaires à l’Organisation ;</li>
                <li>Deux (2) Secrétaires à l’Information et à la Communication ; </li>
                <li>Deux (2) Secrétaires aux Affaires Économiques et à l’Environnement ;</li>
                <li>Deux (2) Secrétaires aux Affaires Sociales ; </li>
                <li>Deux (2) Secrétaires aux Arts et à la Culture ; </li>
                <li>Deux (2) Secrétaires à la Propagande et aux Adhésions.</li>
            </ul>
            <br>
            <br>
            <span class="Headings">Le Comité́ national des Corporations est composé de dix-sept (17) membres ci-après désignés :</span>
            <br>
            <br>
            <ul class="UnorderedList">
                <li>Un (1) Secrétaire Général ;</li>
                <li>Un (1) Secrétaire Général adjoint ;</li>
                <li>Un (1) Trésorier ;  </li>
                <li>Trois (3) Secrétaires à l’Organisation ; </li>
                <li>Deux (2) Secrétaires à l’Information et à la Communication ;</li>
                <li>Deux (2) Secrétaires aux Affaires Économiques et à l’Environnement ; </li>
                <li>Trois (3) Secrétaires aux Relations Interprofessionnelles ;</li>
                <li>Deux (2) Secrétaires à la Discipline ; </li>
                <li>Deux (2) Secrétaires aux Affaires Sociales ; </li>
                <li>Deux (2) Secrétaires à la Propagande et aux Adhésions ; </li>
            </ul>
            <br>
            <br>
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
.Headings{
    font-weight: 600;
    color:#000
}
.UnorderedList{
    margin: 0% 3%;
}
</style>