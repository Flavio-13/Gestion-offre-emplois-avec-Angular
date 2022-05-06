package com.restapi.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Societes")
public class Societe {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idSociete;
    
    @Column(nullable = false)
    private String nomSociete;
}
