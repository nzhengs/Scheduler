package nzhengs.scheduler.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class EmployeeController {

    private final EmployeeRepo employeeRepo;

    @Autowired
    public EmployeeController(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    @GetMapping(path = "/employees")
    Iterable<Employee> getEmployees() {
        return employeeRepo.findAll();
    }

    @PostMapping(path = "/employees")
    Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepo.save(employee);
    }
    @PutMapping(path = "/employees/{id}")
    Employee updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        return employeeRepo.save(employee);
    }

}
