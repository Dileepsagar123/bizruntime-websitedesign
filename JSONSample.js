var obj1 = {"name":"Dileep Sagar","email":"dileepsagar1@gmail.com"};
var obj2 = {"state":"Shimla","country":"India"};
var obj3 = {"ID":1 , "contact":8449777583};
var obj4 = {"aos":obj3 , "aos1":obj2};

document.writeln("Name = " + obj1.name) ;
document.writeln("Email = " + obj2.email) ;
JSON.stringify(obj1);
for(key in obj1 )
{
  document.writeln(obj1[key]);
}
