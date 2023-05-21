


function displayPost(){
    window.location.href = './post.html';
}

function viewdeletePostM(id){
    document.getElementById('delete-post').style.display = 'block';
    document.getElementById('delete-post').setAttribute('idToDelete', id);
}

function delCancel(){
    document.getElementById('delete-post').style.display = 'none';  
    event.preventDefault();
}

function confirmDelete(e){
    event.preventDefault();
    document.getElementById('delete-post').style.display = 'none';
    var idToDelete = document.getElementById('delete-post').getAttribute('idToDelete');
    document.getElementById(idToDelete).remove();
}