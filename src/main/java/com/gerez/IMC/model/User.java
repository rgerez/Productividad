package com.gerez.IMC.model;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {
     
	@Id
	@GeneratedValue
	
	@Column(name="id")
	private int id;
	
	@Column(name="usuario")
	private String usuario;
	
	@Column(name="nombre_completo")
	private String nombre_completo;
	
	@Column(name="password")
	private String password;
	
	@Column(name="edad")
	private int edad;
	
	@Column(name="sexo")
	private String sexo;
	
	@Column(name="estatura")
	private float estatura;
	
	@Column(name="peso")
	private float peso;
	
	public User() {
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	public String getNombre_completo() {
		return nombre_completo;
	}

	public void setNombre_completo(String nombre_completo) {
		this.nombre_completo = nombre_completo;
	}

	public void setEstatura(float estatura) {
		this.estatura = estatura;
	}
	
	public void setSexo(String sexo) {
		this.sexo = sexo;
	}
	
	public void setEdad(int edad) {
		this.edad = edad;
	}
	
	public void setPeso(float peso) {
		this.peso = peso;
	}
	
	public float getPeso() {
		return  peso;
	}
	
	public float getEstatura() {
		return estatura;
	}
	
	
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}