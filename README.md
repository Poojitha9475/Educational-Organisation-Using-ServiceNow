Educational Organization Management System - ServiceNow

This project is a custom educational organization automation system built on the ServiceNow platform.  
It automates student admissions, maintains academic records, and streamlines academic workflows.

 Features

- Automated Admission Workflow  
- Dynamic Admission Number Generation  
- Student Progress Tracking  
- Form Builder UI Layouts  
- Client Scripts for auto-calculations  
- Structured Data Storage in Custom Tables  
- Professional Workflow Statuses  
- Clean Form Design (Two-column layout)


Technologies Used

- ServiceNow Tables  
- Form Builder  
- Workflows  
- Client Scripts  
- Business Rules  
- UI Policies  


Project Structure

Educational-Organization-Mgmt-System/
│
├── Documentation/
│   └── Project_Document.docx
│
├── Tables/
│   ├── Salesforce_Table.md
│   ├── Admission_Table.md
│   └── Student_Progress_Table.md
│
├── Forms/
│   ├── Admission_Form_Layout.json
│   ├── Salesforce_Form_Layout.json
│   └── StudentProgress_Form_Layout.json
│
├── ClientScripts/
│   ├── DisableFields.js
│   ├── TotalUpdate.js
│   ├── PercentageCalc.js
│   └── ResultScript.js
│
├── BusinessRules/
│   └── Admission_Number_Generation.js
│
├── Workflows/
│   └── Admission_Workflow.md
│
└── README.md



 Deployment Steps

1. Create the three custom tables in ServiceNow  
2. Add required fields & field types  
3. Import Form Layout JSON files  
4. Add Client Scripts  
5. Add Business Rule  
6. Configure Workflow  
7. Test end-to-end Admissions process  






