package nzhengs.scheduler.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeeApi {

    EmployeeRepo employeeRepo;

    @Autowired
    public EmployeeApi(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    @GetMapping(path = "/employees")
    Iterable<Employee> getEmployees() {
        return employeeRepo.findAll();
    }

}
