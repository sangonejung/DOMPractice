document.addEventListener('DOMContentLoaded',function(){
    const list = document.querySelector("#book-list ul")

    //Delete Books
    list.addEventListener('click',function(e){
        if(e.target.className == "delete"){
            const li = e.target.parentElement
            list.removeChild(li)
        }
    })

    //Add Books
    const addForm = document.forms["add-book"];
    addForm.addEventListener('submit',function(e){
        e.preventDefault()
        const value = addForm.querySelector('input[type="text"]').value

        //Create Elements
        const li = document.createElement('li')
        const bookName = document.createElement('span')
        const delbtn = document.createElement('span')

        //add Content
        delbtn.textContent = 'delete'
        bookName.textContent = value

        //add Class
        bookName.classList.add('name')
        delbtn.classList.add('delete')

        //append book and del btn to the li element
        li.appendChild(bookName)
        li.appendChild(delbtn)
        list.appendChild(li)
    })

    //Hide Books
    const hideBox = document.querySelector("#hide")
    hideBox.addEventListener('change',function(e){
        if(hideBox.checked){
            list.style.display = "none"
        } else {
            list.style.display = "initial"
        }
    })

    //Filter Books
    const searchBar = document.forms['search-books'].querySelector('input');
    searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach((book) => {
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(e.target.value) != -1){
        book.style.display = 'block';
        } else {
        book.style.display = 'none';
        }
    });
    });

    //Tabbed Contents
    const tabs = document.querySelector('.tabs');
    const panels = document.querySelectorAll('.panel');
    tabs.addEventListener('click', (e) => {
    if(e.target.tagName == 'LI'){
        const targetPanel = document.querySelector(e.target.dataset.target);
        Array.from(panels).forEach((panel) => {
        if(panel == targetPanel){
            panel.classList.add('active');
        }else{
            panel.classList.remove('active');
        }
        });
    }
    });
})