package nzhengs.scheduler.kernel;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class ForwardController {

    @GetMapping("/**/{path:[^.]*}")
    public String forward(@PathVariable String path) {
        return "forward:/";
    }

}