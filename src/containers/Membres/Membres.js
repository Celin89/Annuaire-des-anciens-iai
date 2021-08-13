import React, { Component } from 'react';
import Membre from "./Membre/Membre";
import FormulaireAjout from "./FormulaireAjout/FormulaireAjout";
import FormulaireModification from "./FormulaireModification/FormulaireModification";
import Alert from "../../components/Alert/Alert";
import { getDefaultNormalizer } from '@testing-library/react';

class Membres extends Component {
    state = {
        membres : [
            {id:1, nom:"NKOUKA", prenom:"Christ Celin", email:"celinbas@gmail.com", telephone:"0033605837471", adresse:"23 bis rue du general schmitz 95300 Pontoise , France",
        fonction: "Consultant études et developpement PHP/JS", competence:"PHP, SYMFONY, ANGULAR, REACT", promotion:"2010-2016" , diplome:"Master CSI"},
            {id:3, nom:"MOUVOULOU", prenom: "Harvey Gracia", email: "mouvoulouharvey@gmail.com" , telephone:"0033605837471", adresse:"23 bis rue du general schmitz 95300 Pontoise , France",
            fonction: "Consultant études et developpement PHP/JS", competence:"PHP, SYMFONY, ANGULAR, REACT", promotion:"2010-2016" , diplome:"Master CSI"},
            {id:5, nom:"GAMATH GOUBILI", prenom: "Igor Josphin", email: "ig.gamath@gmail.com", telephone:"0033605837471", adresse:"23 bis rue du general schmitz 95300 Pontoise , France",
            fonction: "Consultant études et developpement PHP/JS", competence:"PHP, SYMFONY, ANGULAR, REACT", promotion:"2010-2016" , diplome:"Master CSI"},
            {id:8, nom:"BANGA ", prenom: "Jovial Bodenan", email: "jovialbanga@gmail.com" , telephone:"0033605837471", adresse:"23 bis rue du general schmitz 95300 Pontoise , France",
            fonction: "Consultant études et developpement PHP/JS", competence:"PHP, SYMFONY, ANGULAR, REACT", promotion:"2010-2016" , diplome:"Master CSI"},
        ],
        lastIdMembre : 8,
        idMembreAModifier : 0,
        alertMessage : null
    }

    handleSuppressionMembre = (id) => {
        const membreIndexTab = this.state.membres.findIndex(l => {
            return l.id === id;
        })

        const newMembres = [...this.state.membres];
        newMembres.splice(membreIndexTab,1);

        this.setState({
            membres:newMembres,
            alertMessage: {
                message : "Suppression effectuée",
                type : "alert-danger"
            }
        });
    }

    handleAjoutMembre = (nom, prenom, email,telephone,adresse,fonction,competence,promotion,diplome) => {
        const newMembre = {
            id:this.state.lastIdMembre + 1, 
            nom:nom, 
            prenom: prenom, 
            email: email ,
            telephone,
            adresse,
            fonction,
            competence,
            promotion,
            diplome
        };

        const newListeMembres = [...this.state.membres];
        newListeMembres.push(newMembre);

        this.setState(oldState => {
            return {
                membres: newListeMembres,
                lastIdMembre: oldState.lastIdMembre + 1,
                alertMessage: {
                    message : "Ajout effectuée",
                    type : "alert-success"
                }
            }
        })
        this.props.fermerAjoutMembre();
    }

    handleModificationMembre = (id,nom,prenom,email,telephone, adresse ,fonction, competence,promotion,diplome) => {
        const caseMembre = this.state.membres.findIndex(l => {
            return l.id === id;
        });

        const newMembre = {id,nom,prenom,email,telephone,adresse,fonction,competence,promotion,diplome};

        const newListe = [...this.state.membres];
        newListe[caseMembre] = newMembre;

        this.setState({
            membres : newListe,
            idMembreAModifier : 0,
            alertMessage: {
                message : "Modification effectuée",
                type : "alert-warning"
            }
        })

    }

    render() {
        return (
            <>
                {this.state.alertMessage && <Alert typeAlert={this.state.alertMessage.type}>{this.state.alertMessage.message}</Alert>}
                <table className="table text-center">
                    <thead>
                        <tr className="table-dark">
                            <th>Nom</th>
                            <th>Prenom</th> 
                            <th>Email</th>
                            <th>Telephone</th>
                            <th>Adresse</th> 
                            <th>Fonction</th>
                            <th>Competence</th>
                            <th>Promotion</th>
                            <th>Diplôme </th> 
                            <th colSpan="3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.membres.map(membre => {
                                if(membre.id !== this.state.idMembreAModifier){
                                    return (
                                    <tr key={membre.id}>
                                            <Membre 
                                                nom={membre.nom}
                                                prenom={membre.prenom} 
                                                email={membre.email}
                                                telephone={membre.telephone}
                                                adresse={membre.adresse}
                                                fonction={membre.fonction}
                                                competence={membre.competence}
                                                promotion={membre.promotion} 
                                                diplome={membre.diplome} 
                                                suppression={() => this.handleSuppressionMembre(membre.id)}
                                                modification={() => this.setState({idMembreAModifier:membre.id})}
                                            />
                                    </tr>
                                    );
                                } else {
                                    return (
                                        <tr key={membre.id}>
                                            <FormulaireModification 
                                            id={membre.id}
                                            nom={membre.nom}
                                            prenom={membre.prenom} 
                                            email={membre.email}
                                            telephone={membre.telephone}
                                            adresse={membre.adresse}
                                            fonction={membre.fonction}
                                            competence={membre.competence}
                                            promotion={membre.promotion} 
                                            diplome={membre.diplome} 
                                            validationModification={this.handleModificationMembre}
                                            />
                                        </tr>
                                        )
                                    ;
                                }
                            })
                        }
                    </tbody>
                </table>
                {this.props.ajoutMembre && <FormulaireAjout validation = {this.handleAjoutMembre}/>}
            </>
        );
    }
}

export default Membres;