package com.restapi.models;


public class LoginUser {
    private String emailUser;
    private String mdpUser;
   
    public LoginUser() {
    }

    public LoginUser(String emailUser, String mdpUser) {
        this.emailUser = emailUser;
        this.mdpUser = mdpUser;
    }

    public String getEmailUser() {
        return emailUser;
    }

    public void setEmailUser(String emailUser) {
        this.emailUser = emailUser;
    }

    public String getMdpUser() {
        return mdpUser;
    }

    public void setMdpUser(String mdpUser) {
        this.mdpUser = mdpUser;
    }

    

    
    
    
}
