 = Get-Content 'c:\Users\ADMIN\Desktop\food park\src\data\menuItems.js'  
 = ( | Select-String 'Idli Sambar' | Select-Object -First 1).LineNumber  
[0..(-3)] | Set-Content 'c:\Users\ADMIN\Desktop\food park\src\data\menuItems.js'  
