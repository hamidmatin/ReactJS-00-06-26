const teacher = {
  firstName: 'Hamid Rezad',
  lastName: 'Izadi Matin',
};

const myFucntion = () => {
  // console.log('My Function');
  console.log(`${teacher.firstName} ${teacher.lastName}`);
};

class Course {
  constructor(name, duration) {
    this.name = name;
    this.duration = duration;
    this.teacher = teacher;
  }

  showInfo() {
    return `Course Name : ${this.name}, 
            Duration : ${this.duration}, 
            Teacher : ${this.teacher.firstName} ${this.teacher.lastName}`;
  }
}

const studentList = [
  {
    firstName: 'Hossein',
    lastName: 'Abdoli',
    fullName: function(){ return `${this.firstName} ${this.lastName}`}
  },
  {
    firstName: 'Samira',
    lastName: 'Alamdari',
    fullName: function(){ return `${this.firstName} ${this.lastName}`}
  },
  {
    firstName: 'Erfan',
    lastName: 'Abbasian',
    fullName: function(){ return `${this.firstName} ${this.lastName}`}
  },
  {
    firstName: 'Ali',
    lastName: 'Taheri',
    fullName: function(){ return `${this.firstName} ${this.lastName}`}
  },
]

// export { myFucntion, Course }
// export default studentList

export { myFucntion, Course, studentList as default}