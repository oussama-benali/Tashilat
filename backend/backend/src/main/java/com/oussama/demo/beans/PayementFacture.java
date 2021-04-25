package com.oussama.demo.beans;

import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;

@Entity
@PrimaryKeyJoinColumn(referencedColumnName = "id")
public class PayementFacture extends Operation{
    private String refContrat;
    private int mois;

    public int getMois() {
        return mois;
    }

    public void setMois(int mois) {
        this.mois = mois;
    }

    public String getRefContrat() {
        return refContrat;
    }

    public void setRefContrat(String refContrat) {
        this.refContrat = refContrat;
    }
}
