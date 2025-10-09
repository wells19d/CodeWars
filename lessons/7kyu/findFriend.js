function friend(friends){
let output =[];

friends.forEach((friend, index) =>{ 
if (friend?.length === 4 && isNaN(friend)){
output.push(friend)
}})


console.log('output',output)
return output

}

friend(["Ryan","Kieran", "Mark"])
friend(["Ryan","Jimmy","123","Cool Man"])
friend(["Jimm","Cari","aret","truehdnviegkwgvke","sixtyiscoooool"])
friend(["Love","Your","Face","1"])
