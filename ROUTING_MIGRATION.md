# Next.js App Router Migration Guide

## Route Mapping from React Router to Next.js

This document maps the existing React Router routes to Next.js App Router structure.

### Dashboard Routes
- `/pages/dashboard` → `Dashboard`

### General Settings Routes
- `/pages/settings/institute-profile` → `InstituteProfile`
- `/pages/settings/fee-particulars` → `FeeParticulars`
- `/pages/settings/fee-challan-details` → `DetailsForFeeChallan`
- `/pages/settings/rules-regulations` → `RulesAndRegulations`
- `/pages/settings/marks-grading` → `MarksGradings`
- `/pages/settings/theme-language` → `ThemeAndLanguage`
- `/pages/settings/account-settings` → `AccountSettings`
- `/pages/settings/logout` → `LogOut`

### Classes Routes
- `/pages/classes/all` → `AllClasses`
- `/pages/classes/new` → `NewClasses`
- `/pages/classes/edit-delete` → `EditORDelete`
- `/pages/classes/edit` → `UpdateClass`

### Subjects Routes
- `/pages/subjects/classes-with-subjects` → `ClassesWithSubjects`
- `/pages/subjects/assign-subjects` → `AssignSubjects`

### Students Routes
- `/pages/students/all` → `AllStudents`
- `/pages/students/add` → `AddStudents`
- `/pages/students/admission-letter` → `AdmissionLetter`
- `/pages/students/admission-letter/view` → `InnerAdmissionLetter`
- `/pages/students/id-cards` → `IDCard`
- `/pages/students/print-list` → `PrintBasicList`
- `/pages/students/promote` → `PromoteStudents`

### Employees Routes
- `/pages/employees/all` → `AllEmployees`
- `/pages/employees/add` → `AddEmployee`
- `/pages/employees/job-letter` → `JobLetter`
- `/pages/employees/job-letter/view` → `InnerJobLetter`

### Accounts Routes
- `/pages/accounts/chart` → `ChartOfAccount`
- `/pages/accounts/income` → `AddIncome`
- `/pages/accounts/expense` → `AddExpense`
- `/pages/accounts/statement` → `AccountStatement`

### Fees Routes
- `/pages/fees/bank-challan` → `GenerateBankChallan`
- `/pages/fees/collect` → `CollectFee`
- `/pages/fees/slip` → `FeeSlip`
- `/pages/fees/defaulters` → `FeeDefaulters`

### Salary Routes
- `/pages/salary/pay` → `PaySalary`
- `/pages/salary/pay/inside` → `InsidePaySalary`
- `/pages/salary/slip` → `SalarySlip`
- `/pages/salary/slip/view` → `InnerSalarySlip`

### Attendance Routes
- `/pages/attendance/mark-students` → `MarkStudentsAttendance`
- `/pages/attendance/mark-students/inner` → `InnerStudentsAttendance`
- `/pages/attendance/mark-employees` → `MarkEmployeesAttendance`
- `/pages/attendance/mark-employees/inner` → `InnerEmployeesAttendance`
- `/pages/attendance/class-wise-report` → `ClassWiseReport`
- `/pages/attendance/student-report` → `StudentsAttendenceReport`
- `/pages/attendance/employee-report` → `EmployeeAttendenceReport`

### Other Routes
- `/pages/homework` → `HomeWork`
- `/pages/messaging` → `Messaging`
- `/pages/sms/free-gateway` → `FreeSMSGateWay`
- `/pages/live-class` → `LiveClass`
- `/pages/exams/create` → `CreateNewExam`
- `/pages/exams/edit-delete` → `EditORDeleteExam`
- `/pages/exams/add-marks` → `AddORUpdateExam`
- `/pages/exams/result` → `ResultCard`
- `/pages/class-tests/create` → `CreateNewTest`
- `/pages/class-tests/results` → `TestResults`
- `/pages/reports/student-report-card` → `StudentsReportCard`
- `/pages/reports/student-info` → `StudentInfoReport`
- `/pages/reports/parents-info` → `ParentsInfoReport`
- `/pages/certificates/leave` → `LeaveCertificate`
- `/pages/certificates/character` → `CharacterCertificate`

## Implementation Status

- [x] Base layout and dashboard
- [ ] Complete all route files
- [ ] Convert components to TypeScript
- [ ] Remove React Router dependencies
