 Salesforce Table

Purpose
This table stores the initial student information captured during inquiries or lead-generation activities.  
It acts as the preliminary dataset before creating an official admission record.

 Fields

| Field Name     | Type   | Description                     |
|----------------|--------|---------------------------------|
| Student Name   | String | Full name of the student        |
| Father Cell    | String | Primary contact number          |
| Mother Cell    | String | Secondary contact number        |
| Address        | String | Residential address             |
| Email          | String | Email address (optional)        |

 Notes
- Serves as the source table for admission creation  
- Helps validate inquiry data before generating an Admission record  
- Useful for tracking pre-admission leads and communication  
