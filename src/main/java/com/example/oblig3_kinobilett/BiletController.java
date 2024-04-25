package com.example.oblig3_kinobilett;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
@RestController
public class BiletController {
    @Autowired
    BiletRepository rep;
    @PostMapping("/lagre")
    public void lagreBilet(Bilet innBilet){
        rep.lagreBilet(innBilet);
    }
    @GetMapping("/hentAlle")
    public List<Bilet> hentAlle(){
        return rep.hentAlle();
    }
    @GetMapping("/slettAlle")
    public void slettAlle(){
        rep.slettAlle();
    }
    @GetMapping("/slettBillett")
    public void sletEtBilet(int id){rep.sletEtBilet(id);}
}
