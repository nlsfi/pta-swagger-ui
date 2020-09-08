package fi.maanmittauslaitos.pta.docs;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//@RestController
public class Controller {
    //@RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }
}
