package nzhengs.scheduler.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static nzhengs.scheduler.employee.EmployeeController.baseUrl;

@RestController
@RequestMapping(baseUrl)
public class EmployeeController {

    static final String baseUrl = "/api/employees";

    private final EmployeeRepo employeeRepo;

    @Autowired
    public EmployeeController(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    @GetMapping
    Iterable<Employee> getEmployees() {
        return employeeRepo.findAll();
    }

    @PostMapping
    Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepo.save(employee);
    }

    @PutMapping(path = "/{id}")
    Employee updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        employee.setId(id);
        return employeeRepo.save(employee);
    }

}
