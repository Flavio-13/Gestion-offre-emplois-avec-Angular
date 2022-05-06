package com.restapi.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import java.util.Date;

@Entity
@Table(name = "Users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idUser;

    private String nomUser;

    private String prenomUser;

    @Column(nullable = false)
    private String emailUser;
    
    private String telUser;

    @Temporal(value = TemporalType.DATE)
    private Date dateNaiss;

    @Column(nullable = false)
    private String mdpUser;

    public User() {
    }

    

    public User(String nomUser, String prenomUser, String emailUser, String telUser, Date dateNaiss, String mdpUser) {
        this.nomUser = nomUser;
        this.prenomUser = prenomUser;
        this.emailUser = emailUser;
        this.telUser = telUser;
        this.dateNaiss = dateNaiss;
        this.mdpUser = mdpUser;
    }



    public Long getIdUser() {
        return idUser;
    }

    public void setIdUser(Long idUser) {
        this.idUser = idUser;
    }

    public String getNomUser() {
        return nomUser;
    }

    public void setNomUser(String nomUser) {
        this.nomUser = nomUser;
    }

    public String getPrenomUser() {
        return prenomUser;
    }

    public void setPrenomUser(String prenomUser) {
        this.prenomUser = prenomUser;
    }

    public String getEmailUser() {
        return emailUser;
    }

    public void setEmailUser(String emailUser) {
        this.emailUser = emailUser;
    }

    public String getTelUser() {
        return telUser;
    }

    public void setTelUser(String telUser) {
        this.telUser = telUser;
    }

    public Date getDateNaiss() {
        return dateNaiss;
    }

    public void setDateNaiss(Date dateNaiss) {
        this.dateNaiss = dateNaiss;
    }



    public String getMdpUser() {
        return mdpUser;
    }



    public void setMdpUser(String mdpUser) {
        this.mdpUser = mdpUser;
    }

    

}
