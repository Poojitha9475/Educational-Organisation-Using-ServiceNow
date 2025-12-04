 Student Progress Table

 Purpose
This table captures and evaluates the academic performance of each student.  
It stores subject-wise marks, auto-calculated totals, percentages, and the final academic result.

 Fields

| Field Name       | Type    | Description                                           |
|------------------|---------|-------------------------------------------------------|
| Student Name     | String  | Full name of the student                              |
| Admission Number | String  | Links progress record to the Admission table          |
| Subject 1        | Integer | Marks obtained in Subject 1                           |
| Subject 2        | Integer | Marks obtained in Subject 2                           |
| Subject 3        | Integer | Marks obtained in Subject 3                           |
| Total            | Integer | Auto-calculated sum of subject marks                  |
| Percentage       | Decimal | Auto-calculated percentage based on total marks       |
| Result           | Choice  | Final outcome: Pass / Fail                            |

 Notes
- All calculations (Total, Percentage, Result) are automated using Client Scripts  
- Data is linked to the Admission Table through the Admission Number  
- Helps track academic performance and generate performance summaries  
