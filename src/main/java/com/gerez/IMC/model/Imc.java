package com.gerez.IMC.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "imcs")
public class Imc {

	@Id
	@GeneratedValue
	
	@Column(name="id")
	private int id;
	
	@Column(name="usuario_id")
	private int usuario_id;
	
	@Column(name="peso")
	private float peso;
	
	@Column(name="estatura")
	private float estatura;
	
	@Column(name="imc")
	private float imc;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="fechahora",nullable = false)
	private Date fechahora;
	
	public Imc() {
		
	}
	
	public int getId() {
		return id;
	}
	
	public int getUsuario_id() {
		return usuario_id;
	}
	
	public float getEstatura() {
		return estatura;
	}
	
	public void setPeso(float peso) {
		this.peso	 = peso;
	}
	
	public void calcula() {
		this.imc = this.peso / (this.estatura*this.estatura);
		this.fechahora = new Date();
	}
	
	public void setEstatura(float estatura) {
		this.estatura = estatura;
	}
	
	public float getPeso() {
		return peso;
	}
	
	public float getImc() {
		return imc;
	}
	
	
	public Date getFechahora() {
		return fechahora;
	}
	
	
	public Imc(float peso,float estatura,int usuario_id) {
		this.peso = peso;
		this.estatura = estatura;
		this.imc = this.peso / (this.estatura*this.estatura);
		this.fechahora = new Date();
		this.usuario_id = usuario_id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public void setUsuario_id(int usuario_id) {
		this.usuario_id = usuario_id;
	}


}
