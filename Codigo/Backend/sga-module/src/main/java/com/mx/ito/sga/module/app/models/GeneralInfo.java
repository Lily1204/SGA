package com.mx.ito.sga.module.app.models;

public class GeneralInfo {

    private String codigo = "2102";
    private String mensaje = "Some message";
    private Titular titular = new Titular();
    private DynaCache dynacache = new DynaCache();

    public String getCodigo() {
        return codigo;
    }

    public String getMensaje() {
        return mensaje;
    }

    public GeneralInfo.Titular getTitular() {
        return titular;
    }

    public DynaCache getDynacache() {
        return dynacache;
    }

    public class Titular {

        private String saldoSARTotal = "200000";

        public String getSaldoSARTotal() {
            return saldoSARTotal;
        }
    }
}
