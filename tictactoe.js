var a='O';
var c1="";
var c2="";
var c3="";
var c4="";
var c5="";
var c6="";
var c7="";
var c8="";
var c9="";
function play1()
{

    if(a=='X')
    {
        document.getElementById("one").value='O';
        a='O';
        c1=document.getElementById("one").value;
    }
    else
    {
        document.getElementById("one").value='X';
        a='X';
        c1=document.getElementById("one").value;
    }
    check();
   
}
function play2()
{

    if(a=='X')
    {
        document.getElementById("two").value='O';
        a='O';
        c2=document.getElementById("two").value;
    }
    else
    {
        document.getElementById("two").value='X';
        a='X';
        c2=document.getElementById("two").value;
    }
    check();
}
function play3()
{

    if(a=='X')
    {
        document.getElementById("three").value='O';
        a='O';
        c3=document.getElementById("three").value;
    }
    else
    {
        document.getElementById("three").value='X';
        a='X';
        c3=document.getElementById("three").value;
    }
    check();
}
function play4()
{

    if(a=='X')
    {
        document.getElementById("four").value='O';
        a='O';
        c4=document.getElementById("four").value;
    }
    else
    {
        document.getElementById("four").value='X';
        a='X';
        c4=document.getElementById("four").value;
    }
    check();
}
function play5()
{

    if(a=='X')
    {
        document.getElementById("five").value='O';
        a='O';
        c5=document.getElementById("five").value;
    }
    else
    {
        document.getElementById("five").value='X';
        a='X';
        c5=document.getElementById("five").value;
    }
    check();
}
function play6()
{

    if(a=='X')
    {
        document.getElementById("six").value='O';
        a='O';
        c6=document.getElementById("six").value;
    }
    else
    {
        document.getElementById("six").value='X';
        a='X';
        c6=document.getElementById("six").value;
    }
    check();
}
function play7()
{

    if(a=='X')
    {
        document.getElementById("seven").value='O';
        a='O';
        c7=document.getElementById("seven").value;
    }
    else
    {
        document.getElementById("seven").value='X';
        a='X';
        c7=document.getElementById("seven").value;
    }
    check();
}
function play8()
{

    if(a=='X')
    {
        document.getElementById("eight").value='O';
        a='O';
        c8=document.getElementById("eight").value;
    }
    else
    {
        document.getElementById("eight").value='X';
        a='X';
        c8=document.getElementById("eight").value;
    }
    check();
}
function play9()
{

    if(a=='X')
    {
        document.getElementById("nine").value='O';
        a='O';
        c9=document.getElementById("nine").value;
    }
    else
    {
        document.getElementById("nine").value='X';
        a='X';
        c9=document.getElementById("nine").value;
    }
    check();
}

function check()
{
if((c1=='X' && c2=='X' &&c3=='X')||(c1=='X' && c4=='X' && c7=='X')||(c1=='X' && c5=='X' && c9=='X')||(c2=='X' && c5=='X' && c8=='X')||(c3=='X' && c6=='X' && c9=='X')||(c4=='X' && c5=='X' && c6=='X')||(c7=='X' && c8=='X' && c9=='X')||(c3=='X' && c5=='X' && c7=='X'))
{
    x=document.getElementById("playerx").value
    alert("Player "+x+" won the match");
    document. location. reload(); 
}
if((c1=='O' && c2=='O' &&c3=='O')||(c1=='O' && c4=='O' && c7=='O')||(c1=='O' && c5=='O' && c9=='O')||(c2=='O' && c5=='O' && c8=='O')||(c3=='O' && c6=='O' && c9=='O')||(c4=='O' && c5=='O' && c6=='O')||(c7=='O' && c8=='O' && c9=='O')||(c3=='O' && c5=='O' && c7=='O'))
{
    console.log("hi")
    y=document.getElementById("playery").value
    alert("Player "+y+" won the match");
    document. location. reload(); 
}

}