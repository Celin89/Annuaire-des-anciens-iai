import React from "react";
import Bouton from "../../../components/Bouton/Bouton";

const membre = (props) => (
    <>
        <td>{props.nom}</td>
        <td>{props.prenom}</td>
        <td>{props.email}</td>
        <td>{props.telephone}</td>
        <td>{props.adresse}</td>
        <td>{props.fonction}</td>
        <td>{props.competence}</td>
        <td>{props.promotion}</td>
        <td>{props.diplome}</td> 
        <td><Bouton typeBtn="btn-warning" >Details</Bouton></td> 
        <td><Bouton typeBtn="btn-warning" clic={props.modification}>Modifier</Bouton></td>
        <td><Bouton typeBtn="btn-danger" clic={props.suppression}>Supprimer</Bouton></td>
    </>
);

export default membre;