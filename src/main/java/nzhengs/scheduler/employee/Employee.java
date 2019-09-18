package nzhengs.scheduler.employee;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class Employee {
    @Id
    @GeneratedValue
    private Long id;
    private String firstName;
    private String middleName;
    private String lastName;
    private String address1;
    private String city;
    private String address2;
    private String state;
    private String zip;
    private Gender gender;
    private String phone;
}
