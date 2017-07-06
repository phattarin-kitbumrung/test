View all items in task

Path : http://localhost:3000/todolist/todolist/viewall
Method : POST
Require Example 
{ 
  "list_id" : "12c078e0-5923-4f77-bc6b-e7f578578a65",
  "owner_id" : "952c68d6-ec8b-4a08-a0c6-35a025f985ca"
}

Output Example 
{
  "status": 1,
  "message": "",
  "result": {
    "list_id": "12c078e0-5923-4f77-bc6b-e7f578578a65",
    "name": "testlist3",
    "task": [
      {
        "task_id": "7577be46-452f-4d01-b55b-148931c84160",
        "subject": "task1",
        "detail": "detail1",
        "task_status": 1
      },
      {
        "task_id": "ec6f03d1-eafb-4191-8732-54d2dfe9d748",
        "subject": "task2",
        "detail": "detail2",
        "task_status": 1
      },
      {
        "task_id": "c519591d-2503-4dac-9fce-a13dfcefd4bc",
        "subject": "task3",
        "detail": "detail3",
        "task_status": 1
      }
    ],
    "date": "2017-06-26 15:48:53",
    "owner_id": "952c68d6-ec8b-4a08-a0c6-35a025f985ca"
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