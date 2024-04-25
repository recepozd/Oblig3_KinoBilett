package com.example.oblig3_kinobilett;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public class BiletRepository {

    @Autowired
    private JdbcTemplate db;
    public void lagreBilet(Bilet innBilet){
        String sql ="INSERT INTO Bilets (film, antall, " +
                "fornavn, etternavn, telefonnr, epost) " +
                "VALUES(?,?,?,?,?,?)";
        db.update(sql,innBilet.getFilm(),
                innBilet.getAntall(),
                innBilet.getFornavn(),
                innBilet.getEtternavn(),
                innBilet.getTelefonnr(),
                innBilet.getEpost());
    }
    public List<Bilet> hentAlle(){
        String sql = "SELECT * FROM Bilets";
        return db.query(sql,
                new BeanPropertyRowMapper(Bilet.class));
    }
    public void slettAlle(){
        String sql = "DELETE FROM Bilets";
        db.update(sql);
    }

    public void sletEtBilet(int id){
        String sql = "DELETE FROM KinoBilletter WHERE id = ?";
        db.update(sql, id);
    }
}
