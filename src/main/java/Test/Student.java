package Test;

class Student{
    private String name;
    private Integer age;
    private Integer status;

    public Student(String name, int age, int status) {
        this.name = name;
        this.age = age;
        this.status = status;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Integer getAge() {
        return age;
    }
    public void setAge(Integer age) {
        this.age = age;
    }
    public Integer getStatus() {
        return status;
    }
    public void setStatus(Integer status) {
        this.status = status;
    }
}
