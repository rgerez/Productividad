package com.gerez.IMC.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.gerez.IMC.model.Imc;

public interface ImcRepository extends JpaRepository<Imc, Integer> {

	@Query("SELECT u FROM Imc u WHERE u.usuario_id = ?1")
	public List<Imc> findByUsuario(int usuario);
	
}
