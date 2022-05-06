package com.restapi.models;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "Offres")
public class Offre {
 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idOffre;

    private String description;

    @Temporal(TemporalType.DATE)
    private Date expiration;

    @ManyToOne
    private CategorieOffre categorie;

    @ManyToOne
    private Societe societe;
    

    public Offre() {
    }

    

    public Offre(String description, Date expiration, CategorieOffre categorieOffre) {
        this.description = description;
        this.expiration = expiration;
        this.categorie = categorieOffre;
    }


    

    public CategorieOffre getCategorie() {
        return categorie;
    }



    public void setCategorie(CategorieOffre categorie) {
        this.categorie = categorie;
    }



    public Societe getSociete() {
        return societe;
    }



    public void setSociete(Societe societe) {
        this.societe = societe;
    }



    public Long getIdOffre() {
        return idOffre;
    }

    public void setIdOffre(Long idOffre) {
        this.idOffre = idOffre;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getExpiration() {
        return expiration;
    }

    public void setExpiration(Date expiration) {
        this.expiration = expiration;
    }
}
