 Admission Table

 Purpose
This table maintains complete student admission records, including personal details, contact information, admission lifecycle status, and workflow-driven progress.

 Fields

| Field Name       | Type   | Description                                                             |
|------------------|--------|-------------------------------------------------------------------------|
| Student Name     | String | Full name of the student                                                |
| Grade            | Choice | Class/grade the student is applying for                                 |
| Admission Number | String | System-generated unique admission identifier                            |
| Address          | String | Full residential address                                                |
| Father Cell      | String | Primary contact number                                                  |
| Mother Cell      | String | Secondary contact number                                                |
| Admission Status | Choice | Tracks admission lifecycle: New → In Progress → Joined → Rejected → Rejoined → Closed → Cancelled |

 Notes
- Acts as the central master table for the student onboarding process  
- Integrated with the Admission Workflow for automated status transitions  
- Serves as the core reference for Student Progress and other academic records  
