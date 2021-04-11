function mifuncion(){
    let FirstChild=document.getElementById("page").firstChild;
    let LastChild=document.getElementById("page").lastChild;
    let NextSibling=document.getElementById("header").nextSibling;
    let PreviousSibling=document.getElementById("content").previousSibling;
    let ParentNode=document.getElementById("content").parentNode;
    let ChildNodes=document.getElementById("page").childNodes;

    console.log(FirstChild);
    console.log(LastChild);
    console.log(NextSibling);
    console.log(PreviousSibling);
    console.log(ParentNode);
    console.log(ChildNodes);
}