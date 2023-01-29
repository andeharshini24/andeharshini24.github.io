var names=new Array();
names[0]="Harshi";
names[1]="prasad";
names[2]="Sweety";
names[3]="Chinni";
names[4]="Durga";
names[5]="Siva";
names[6]="Ande";
names[7]="Sowmi";
names[8]="Bhargav";
names[9]="janaki";
for(var i=0;i<names.length; i++){
    if(names[i].charAt()==='J'||names[i].charAt()==='j'){
    console.log("Goodbye" +names[i]);
    }
    else{
        console.log("Hello"+ names[i]);
    }
}
