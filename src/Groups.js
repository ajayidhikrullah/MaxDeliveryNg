module.exports =  class Groups{

  //initialize a constructor which will serve as a default function that will be 
  //automatically called whenevr a user calls this class or whenever he wants to use this class
  constructor(inputs) {//inputs is the sample data to test this constructor
    //assume group as an array becus we dont know in advance number of groups that will be used in testing this class
    this.groups = []; 
    //initiallize number of groups counter to be zero so that we can use it to count and store the total number of groups 
    //passed in from the sample data
    this.noOfGroups = 0;
    this.groupClassify(inputs);
  }

  //this function creates new group based on the inserted sample data
  createNewGroup(member, regNo) {
    let new_group = {
      //array destructuring
      members: [member],
      //array destructuring using the key value pair method.
      regNos: [regNo],
      oldest: member.age,
      youngest: member.age,
      sum: member.age
    }
    console.log(new_group);
    //save the group in the initially declared array using the js default push method
    this.groups.push(new_group);
    //update the initial variable declared in the constructor based on the number of groups count 
    this.noOfGroups = this.groups.length;
  }

  //this function collects a single sample data and make some computation on it
  categorize_student_function(input) {//here input is the sample data of somebody
    let classified = false;
    //substract the current here we are (2018) from the sample data year of the group member
    //e.g input.dob = 2000. 2018 - 2000 = 18yrs of age
    let age = (new Date()).getFullYear() - (new Date(input.dob)).getFullYear();
    let new_member = {
      name: input.name,
      age,
    }
    for (let i = this.groups.length - 1; i >= 0; i--) {
      if(this.groups[i].members && this.groups[i].members.length < 3 && !classified){
        if( age >= this.groups[i].oldest - 5 && age <= this.groups[i].youngest + 5){
          this.groups[i].members.push(new_member);
          this.groups[i].regNos.push(input.regNo)
          if(age > this.groups[i].oldest) this.groups[i].oldest = age;
          if(age < this.groups[i].youngest) this.groups[i].youngest = age; 
          this.groups[i].sum += age;
          classified = true
        }
      }
    };


    if(!classified){
      this.createNewGroup(new_member, input.regNo);
    }
  }

  groupClassify(inputs) {
    //console.log(inputs.length)
    for (let i = inputs.length - 1; i >= 0; i--) {
      this.categorize_student_function(inputs[i]);
    }
  }
}