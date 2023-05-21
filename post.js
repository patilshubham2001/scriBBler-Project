


function toggelEditSave() {
    if(document.getElementById("postText").getAttribute("contentEditable")=== "true"){
        document.getElementById("postText").setAttribute("contentEditable", "false");
        document.getElementById("postTitle").setAttribute("contentEditable", "false");
        document.getElementById("postText").style.border = 'none'
        document.getElementById("postTitle").style.border = 'none'
        document.getElementById("editPostContainer").innerHTML = '<span class="edit-txt">Edit</span><iclass="fa fa-edit"></i>';

    }else{

        document.getElementById("postText").setAttribute("contentEditable", "true");
        document.getElementById("postTitle").setAttribute("contentEditable", "true");
        document.getElementById("postText").style.border = '2px solid blue'
        document.getElementById("postTitle").style.border = '2px solid blue'
        document.getElementById("editPostContainer").innerHTML = '<span class="edit-txt">Save</span><i class="fa-solid fa-floppy-disk"></i>';
    }
}

var count = 0;
function LikeCount() {
    document.getElementById('likePostBtn').innerHTML = '<i class="fa fa-thumbs-up"></i><span class="like-txt">Liked</span>';
    document.getElementById('likeCount').style.fontSize = '20px'
    count++
    document.getElementById('likeCount').innerHTML = count+'person is like this!';
}

function addComment(id) {
    var comTxt = document.getElementById(id).value;

    if(comTxt === ""){
        alert("Please write comment!")
    }else{
    var templete = '<li>'+ comTxt +'</li>'
    var commentElement = document.getElementById('comme');
    
    if(commentElement){
        commentElement.innerHTML += templete;
    }
    document.getElementById(id).value = '';
}
}
