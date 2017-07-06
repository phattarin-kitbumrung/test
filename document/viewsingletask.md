View a single task in the list

Path : http://localhost:3000/todolist/todolist/viewsingletask
Method : POST
Require Example 
{ 
  "list_id" : "12c078e0-5923-4f77-bc6b-e7f578578a65",
  "owner_id" : "952c68d6-ec8b-4a08-a0c6-35a025f985ca",
  "task_id" : "c519591d-2503-4dac-9fce-a13dfcefd4bc"
}

Output Example 
{
  "status": 1,
  "message": "",
  "result": {
    "task_id": "c519591d-2503-4dac-9fce-a13dfcefd4bc",
    "subject": "task3",
    "detail": "detail3",
    "task_status": 1
  }
}
_______________________________________ 

{
  "status": 0,
  "message": "not found data",
  "result": {}
}

*** status 0 = Fail, 1 = Complete
*** task_status 0 = Pending, 1 = Done 