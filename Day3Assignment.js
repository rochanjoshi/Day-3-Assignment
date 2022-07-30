//QUESTION1
let names=["abc","abcde","efg","efgh","pqr"]
let n=names.length-1
while(n>=0)
{console.log(names[n]);
n--;}


//QUESTION2
let countries=[
    {
        name:"India",
        capital:"Delhi",
        population:3000
    },
    {
        name:"USA",
        capital:"Washington D.C.",
        population:1500
    },
    {
        name:"UK",
        capital:"London",
        population:1000
    }
]
for(let i=0;i<countries.length;i++)
{
if(countries[i].population<2000)
{
    console.log("Countries having population less than 2000 are: "+countries[i].name)
}
}