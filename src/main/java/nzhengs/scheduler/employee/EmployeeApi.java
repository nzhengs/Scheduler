package nzhengs.scheduler.employee;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static nzhengs.scheduler.employee.EmployeeApi.baseUrl;

@RestController
@RequestMapping(baseUrl)
@RequiredArgsConstructor
public class EmployeeApi {

    static final String baseUrl = "/api/employees";

    private final EmployeeRepo employeeRepo;

    @GetMapping
    public List<Employee> getEmployees() {
        return employeeRepo.findAll();
    }

    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepo.save(employee);
    }

    @PutMapping(path = "/{id}")
    public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        employee.setId(id);
        return employeeRepo.save(employee);
    }

}
