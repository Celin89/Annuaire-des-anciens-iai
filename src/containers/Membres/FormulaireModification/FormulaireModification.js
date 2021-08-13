import React, { Component } from 'react';
import Bouton from "../../../components/Bouton/Bouton";

class ModificationMembre extends Component {
    state = { 
        nomSaisi:"",
        prenomSaisi:"",
        emailSaisi:"",
        telephoneSaisi:"",
        adresseSaisi:"",
        fonctionSaisi:"",
        competenceSaisi:"",
        promotionSaisi:"",
        diplomeSaisi:"",
    }

    componentDidMount = () =>{
        this.setState({
            nomSaisi:this.props.nom,
            prenomSaisi:this.props.prenom,
            emailSaisi:this.props.email,
            telephoneSaisi:this.props.telephone, 
            adresseSaisi:this.props.adresse,
            fonctionSaisi:this.props.fonction,
            competenceSaisi:this.props.competence,
            promotionSaisi:this.props.promotion,
            diplomeSaisi:this.props.diplome,
        })
    }

    handleValidation = () => {
        this.props.validationModification(this.props.id,this.state.nomSaisi,this.state.prenomSaisi,this.state.emailSaisi , this.state.telephoneSaisi, this.state.adresseSaisi,
            this.state.fonctionSaisi , this.state.competenceSaisi , this.state.promotionSaisi , this.state.diplome);
    }
    
    render() {
        return (
            <>
                <td><input type="text" className="form-control" value={this.state.nomSaisi} onChange={(event) => this.setState({nomSaisi:event.target.value})}/></td>
                <td><input type="text" className="form-control" value={this.state.prenomSaisi} onChange={(event) => this.setState({prenomSaisi:event.target.value})}/></td>
                <td><input type="text" className="form-control" value={this.state.emailSaisi} onChange={(event) => this.setState({emailSaisi:event.target.value})}/></td>
                <td><input type="text" className="form-control" value={this.state.telephoneSaisi} onChange={(event) => this.setState({telephoneSaisi:event.target.value})}/></td>
                <td><input type="text" className="form-control" value={this.state.adresseSaisi} onChange={(event) => this.setState({adresseSaisi:event.target.value})}/></td>
                <td><input type="text" className="form-control" value={this.state.fonctionSaisi} onChange={(event) => this.setState({fonctionSaisi:event.target.value})}/></td>
                <td><input type="text" className="form-control" value={this.state.competenceSaisi} onChange={(event) => this.setState({competenceSaisi:event.target.value})}/></td>
                <td><input type="text" className="form-control" value={this.state.promotionSaisi} onChange={(event) => this.setState({promotionSaisi:event.target.value})}/></td>
                <td><input type="text" className="form-control" value={this.state.diplomeSaisi} onChange={(event) => this.setState({diplomeSaisi:event.target.value})}/></td>
                <td><Bouton typeBtn="btn-primary" clic={this.handleValidation}>Valider</Bouton></td>
            </>
        );
    }
}

export default ModificationMembre;