## Overview:
- The URL for the API is http://localhost:8080
- The API comes with user information, specific user information such as education, work experience, projects, skills & references
- All this information is stored in a SQL Database
- **Note**: Any objects a user adds for either a new user, a new education, a new work experience, a new project, a new skill or a new reference object, this object and its details will be saved onto the database directly

## API Errors:
This API may return a 400 or 500 error
#### Example Error Body:
```json
{
    "message": "User with ID: 8 not found"
}
```

## Routes:

### GET `/users/:id`
- `:id`: This is the ID of User Information You are Getting
- Returns an object of a single user
- Example response body
```json
{
    "id": 1,
    "user_name": "Anurag",
    "user_email": "anuragbtor@gmail.com",
    "user_phoneNum": "+1 (416) 557-1119",
    "user_summary": "My Name is Anurag\nI have 2+ Work Experience",
    "user_linkedIn": "https://www.linkedin.com/in/anurag-bhattacharya/",
    "user_github": "https://github.com/Anurag-Bhattacharya4199",
    "user_primaryColor": "Red",
    "user_secondaryColor": "Orange",
    "created_at": "2024-01-27T21:19:13.000Z",
    "updated_at": "2024-01-27T21:19:13.000Z"
}
```

### GET `/users/:id/educations`
- `:id`: This is the ID of User Information You are Getting
- Returns an array of education information for a user
- Example response body
```json
  [
    {
        "edId": 1,
        "user_id": 1,
        "school_name": "Brebeuf College School",
        "certification_name": "High School Diploma",
        "graduation_date": "2018",
        "created_at": "2024-01-27T21:19:53.000Z",
        "updated_at": "2024-01-27T21:19:53.000Z"
    },
    {
        "edId": 2,
        "user_id": 1,
        "school_name": "University of Guelph",
        "certification_name": "Bachelor of Computing",
        "graduation_date": "2023",
        "created_at": "2024-01-27T21:20:22.000Z",
        "updated_at": "2024-01-27T21:20:22.000Z"
    },
    {
        "edId": 4,
        "user_id": 1,
        "school_name": "Test",
        "certification_name": "Test",
        "graduation_date": "2024",
        "created_at": "2024-01-29T04:41:37.000Z",
        "updated_at": "2024-01-29T04:41:37.000Z"
    }
]
```

### GET `/users/:id/workExperiences`
- `:id`: This is the ID of User Information You are Getting
- Returns an array of work experiences information for a user
- Example response body
```json
[
    {
        "workExpId": 1,
        "user_id": 1,
        "work_title": "test",
        "company_name": "test2",
        "work_desc": "desciption",
        "start_date": "2018",
        "created_at": "2024-01-27T21:36:27.000Z",
        "updated_at": "2024-01-27T21:36:27.000Z"
    },
    {
        "workExpId": 2,
        "user_id": 1,
        "work_title": "test",
        "company_name": "test2",
        "work_desc": "desciption",
        "start_date": "2018",
        "created_at": "2024-01-27T21:36:51.000Z",
        "updated_at": "2024-01-27T21:36:51.000Z"
    },
    {
        "workExpId": 3,
        "user_id": 1,
        "work_title": "Test",
        "company_name": "Test",
        "work_desc": "Tes",
        "start_date": "2024",
        "created_at": "2024-01-27T22:44:16.000Z",
        "updated_at": "2024-01-27T22:44:16.000Z"
    },
    {
        "workExpId": 5,
        "user_id": 1,
        "work_title": "Full-Stack Developer",
        "company_name": "Newage Solutions Canada Inc.",
        "work_desc": "Web Development",
        "start_date": "2023",
        "created_at": "2024-02-01T01:46:43.000Z",
        "updated_at": "2024-02-01T01:46:43.000Z"
    }
]
```

## GET `/users/:id/projects`
- `:id`: This is the ID of User Information You are Getting
- Returns an array of projects information for a user
- Example response body
```json
[
    {
        "projectId": 1,
        "user_id": 1,
        "project_name": "Test",
        "project_desc": "Description",
        "project_link": "Link",
        "created_at": "2024-01-29T04:46:36.000Z",
        "updated_at": "2024-01-29T04:46:36.000Z"
    },
    {
        "projectId": 2,
        "user_id": 1,
        "project_name": "Bandsite",
        "project_desc": "Music Band Website",
        "project_link": "https://github.com/Anurag-Bhattacharya4199/anurag-bhattacharya-bandsite",
        "created_at": "2024-01-30T00:34:00.000Z",
        "updated_at": "2024-01-30T00:34:00.000Z"
    },
    {
        "projectId": 3,
        "user_id": 1,
        "project_name": "Test",
        "project_desc": "Test",
        "project_link": "Link",
        "created_at": "2024-01-30T02:15:34.000Z",
        "updated_at": "2024-01-30T02:15:34.000Z"
    },
    {
        "projectId": 5,
        "user_id": 1,
        "project_name": "BandSite",
        "project_desc": "Music Band Website",
        "project_link": "https://github.com/Anurag-Bhattacharya4199/anurag-bhattacharya-bandsite",
        "created_at": "2024-02-02T02:35:31.000Z",
        "updated_at": "2024-02-02T02:35:31.000Z"
    }
]
```

## GET `/users/:id/skills`
- `:id`: This is the ID of User Information You are Getting
- Returns an array of skills information for a user
- Example response body
```json
[
    {
        "skillId": 1,
        "user_id": 1,
        "skill_name": "Coding",
        "skill_proficiencyLevel": 5,
        "created_at": "2024-01-30T01:51:37.000Z",
        "updated_at": "2024-01-30T01:51:37.000Z"
    },
    {
        "skillId": 2,
        "user_id": 1,
        "skill_name": "Testing",
        "skill_proficiencyLevel": 5,
        "created_at": "2024-01-30T03:10:44.000Z",
        "updated_at": "2024-01-30T03:10:44.000Z"
    },
    {
        "skillId": 3,
        "user_id": 1,
        "skill_name": "Testing",
        "skill_proficiencyLevel": 4,
        "created_at": "2024-01-30T03:15:12.000Z",
        "updated_at": "2024-01-30T03:15:12.000Z"
    }
]
```

## GET `/users/:id/references`
- `:id`: This is the ID of User Information You are Getting
- Returns an array of references information for a user
- Example response body
```json
[
    {
        "referenceId": 1,
        "user_id": 1,
        "reference_name": "Anurag",
        "reference_comment": "Great!",
        "created_at": "2024-01-30T05:09:35.000Z",
        "updated_at": "2024-01-30T05:09:35.000Z"
    },
    {
        "referenceId": 2,
        "user_id": 1,
        "reference_name": "ddasd",
        "reference_comment": "sadas",
        "created_at": "2024-01-30T05:43:50.000Z",
        "updated_at": "2024-01-30T05:43:50.000Z"
    },
    {
        "referenceId": 3,
        "user_id": 1,
        "reference_name": "Bob",
        "reference_comment": "Awesome",
        "created_at": "2024-01-30T05:45:40.000Z",
        "updated_at": "2024-01-30T05:45:40.000Z"
    },
    {
        "referenceId": 4,
        "user_id": 1,
        "reference_name": "Billy",
        "reference_comment": "Good!",
        "created_at": "2024-01-30T05:46:26.000Z",
        "updated_at": "2024-01-30T05:46:26.000Z"
    }
]
```

### POST `/users`
- Creates a new user object
- Post body example
```
{
    "user_name": "Anurag",
    "user_email": "anuragbtor@gmail.com",
    "user_phoneNum": "+1 (416) 557-1119",
    "user_summary": "My Name is Anurag\nI have 2+ Work Experience",
    "user_linkedIn": "https://www.linkedin.com/in/anurag-bhattacharya/",
    "user_github": "https://github.com/Anurag-Bhattacharya4199",
    "user_primaryColor": "Red",
    "user_secondaryColor": "Orange"
}
```
- response body example
```
[
    {
        "id": 8,
        "user_name": "Anurag",
        "user_email": "anuragbtor@gmail.com",
        "user_phoneNum": "+1 (416) 557-1119",
        "user_summary": "My Name is Anurag\nI have 2+ Work Experience",
        "user_linkedIn": "https://www.linkedin.com/in/anurag-bhattacharya/",
        "user_github": "https://github.com/Anurag-Bhattacharya4199",
        "user_primaryColor": "Red",
        "user_secondaryColor": "Orange",
        "created_at": "2024-02-23T01:43:03.000Z",
        "updated_at": "2024-02-23T01:43:03.000Z"
    }
]
```

### POST `/educations`
- Creates a new education object
- Post body example
```
{
   "user_id": 8,
   "school_name": "Brebeuf College School",
   "certification_name": "High School Diploma",
   "graduation_date": "2018-06-30"
}
```
- response body example
```
[
    {
        "edId": 11,
        "user_id": 8,
        "school_name": "Brebeuf College School",
        "certification_name": "High School Diploma",
        "graduation_date": "2018-06-30T04:00:00.000Z",
        "created_at": "2024-02-23T01:48:36.000Z",
        "updated_at": "2024-02-23T01:48:36.000Z"
    }
]
```

### POST `/workExperiences`
- Creates a new work experience object
- Post body example
```
{
   "user_id": 8,
    "work_title": "test",
    "company_name": "test2",
    "work_desc": "desciption",
    "start_date": "2018-02-22"
}
```
- response body example
```
[
    {
        "workExpId": 11,
        "user_id": 8,
        "work_title": "test",
        "company_name": "test2",
        "work_desc": "desciption",
        "start_date": "2018-02-22T05:00:00.000Z",
        "created_at": "2024-02-23T01:52:31.000Z",
        "updated_at": "2024-02-23T01:52:31.000Z"
    }
]
```

### POST `/projects`
- Creates a new projects object
- Post body example
```
{
   "user_id": 8,
   "project_name": "Test",
   "project_desc": "Description",
   "project_link": "Link"
}
```
- response body example
```
[
    {
        "projectId": 14,
        "user_id": 8,
        "project_name": "Test",
        "project_desc": "Description",
        "project_link": "Link",
        "created_at": "2024-02-23T01:54:52.000Z",
        "updated_at": "2024-02-23T01:54:52.000Z"
    }
]
```

### POST `/skills`
- Creates a new skills object
- Post body example
```
{
   "user_id": 8,
   "skill_name": "Coding",
   "skill_proficiencyLevel": 5
}
```
- response body example
```
[
    {
        "skillId": 8,
        "user_id": 8,
        "skill_name": "Coding",
        "skill_proficiencyLevel": 5,
        "created_at": "2024-02-23T01:57:37.000Z",
        "updated_at": "2024-02-23T01:57:37.000Z"
    }
]
```

### POST `/references`
- Creates a new reference object
- Post body example
```
{
    "user_id": 8,
    "reference_name": "Anurag",
    "reference_comment": "Great!"
}
```
- response body example
```
[
    {
        "referenceId": 9,
        "user_id": 8,
        "reference_name": "Anurag",
        "reference_comment": "Great!",
        "created_at": "2024-02-23T01:59:42.000Z",
        "updated_at": "2024-02-23T01:59:42.000Z"
    }
]
```