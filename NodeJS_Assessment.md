# NodeJS_Assessment
## Build a NodeJS Rest API project  
- Express Framework  
- Typescript  

## Design a Service that can ...
- read/scan all files and subfolders of a specific root folder  
- write file metadata (path, filename, filetype=extension, filesize, modification date, scan date=now) into a database  
- nice to have: scheduling every x minutes to rescan the folder and rewrite/update files or drop and reinsert  

## REST API  
1. GET /folders  
Delivers a list of folders and subfolders sorted by name  

2. GET /filesize?ftype=xxx  
- Delivers folders and subfolders with aggregated filesize sorted by size  
- Filtered by filetype/extension=xxx if avail  

Add some unit tests  
Make as much as you can, build stubs or write some comments if you cannot solve something. 

**Good luck!**