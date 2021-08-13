import React, { Component } from 'react';
import Bouton from "../../../components/Bouton/Bouton"

class FormulaireAjout extends Component {
    state = {
        nomSaisi : "",
        prenomSaisi : "",
        emailSaisi : "",
        telephoneSaisi : "",
        adresseSaisi : "",
        fonctionSaisi : "",
        competenceSaisi : "",
        promotionSaisi : "",
        diplomeSaisi : ""
    }

    handleValidationForm = (event) => {
        event.preventDefault();
        this.props.validation(this.state.nomSaisi,this.state.prenomaisi,this.state.emailSaisi , this.state.telephoneSaisi , this.state.adresseSaisi,
            this.state.fonctionSaisi , this.state.competenceSaisi, this.state.promotionSaisi, this.state.diplomeSaisi);
        this.setState({
            nomSaisi : "",
            prenomSaisi : "",
            emailSaisi : "",
            telephoneSaisi : "",
            adresseSaisi : "",
            fonctionSaisi : "",
            competenceSaisi : "",
            promotionSaisi : "",
            diplomeSaisi : ""
        })
    }

    render() {
        return (
            <>
                <h2 className="text-center text-primary" style={{fontFamily:'Sigmar One'}}>Affichage du formulaire d'ajout</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="nom">Nom du membre</label>
                        <input type="text" 
                            className="form-control" 
                            id="nom" 
                            value={this.state.nomSaisi}
                            onChange={(event) => this.setState({nomSaisi:event.target.value})} 
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="prenom">Prenom</label> 
                        <input type="text" className="form-control" id="prenom" 
                        value={this.state.auteurSaisi}
                        onChange={(event) => this.setState({prenomSaisi:event.target.value})} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label> 
                        <input type="text" className="form-control" id="email" 
                        value={this.state.emailSaisi}
                        onChange={(event) => this.setState({emailSaisi:event.target.value})} 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="telephone">Telephone </label> 
                        <input type="text" className="form-control" id="telephone" 
                        value={this.state.telephoneSaisi}
                        onChange={(event) => this.setState({telephoneSaisi:event.target.value})} 
                        />
                    </div>


                    <div className="form-group">
                        <label htmlFor="adresse">Adresse </label> 
                        <input type="text" className="form-control" id="adresse" 
                        value={this.state.adresseSaisi}
                        onChange={(event) => this.setState({adresseSaisi:event.target.value})} 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="fonction">Fonction </label> 
                        <input type="text" className="form-control" id="fonction" 
                        value={this.state.fonctionSaisi}
                        onChange={(event) => this.setState({fonctionSaisi:event.target.value})} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="competence">Competence </label> 
                        <input type="text" className="form-control" id="competence" 
                        value={this.state.competenceSaisi}
                        onChange={(event) => this.setState({competenceSaisi:event.target.value})} 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="promotion">Promotion </label> 
                        <input type="text" className="form-control" id="promotion" 
                        value={this.state.promotionSaisi}
                        onChange={(event) => this.setState({promotionSaisi:event.target.value})} 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="diplome">Diplome Obtenu </label> 
                        <input type="text" className="form-control" id="diplome" 
                        value={this.state.diplomeSaisi}
                        onChange={(event) => this.setState({diplomeSaisi:event.target.value})} 
                        />
                    </div>

                    <Bouton typeBtn="btn-primary" clic={this.handleValidationForm}>Valider</Bouton>
                </form>
            </>
        );
    }
}

export default FormulaireAjout;
