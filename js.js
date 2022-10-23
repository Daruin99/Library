const myLibrary = [];
const newBookBtn = document.querySelector(".newBook");
const formModal = document.querySelector(".form-container");
const closeBtn = document.querySelector(".close");
const addBtn = document.querySelector(".add");

function Book (title, author, numberOfPages, readingStatus) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.readingStatus = readingStatus;
}

newBookBtn.addEventListener("click", () => {
    formModal.classList.add('show');
});

closeBtn.addEventListener("click", () => {
    formModal.classList.remove('show');
});

addBtn.addEventListener("click", addBookToLibrary);

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#Author").value;
    let pages = document.querySelector("#pages").value;
    let readingStatus = document.querySelector("#read").checked;

    if (readingStatus == true) {
        readingStatus = "Read";
    }

    else {
        readingStatus = "Not Read";
    }

    myLibrary.push(new Book(title, author, pages, readingStatus));

    formModal.classList.remove('show');
    
    displayBooks();
}




function displayBooks() {
    const cardsContainer = document.querySelector(".cardContainer");
    let books = document.querySelectorAll(".card");
    books.forEach(book => cardsContainer.removeChild(book));
    
    for(let i = 0; i<myLibrary.length; i++) {
        createBook(myLibrary[i])};

}


function createBook(book) {
        const cardsContainer = document.querySelector(".cardContainer");
        const card = document.createElement("div");
        const titleDiv = document.createElement('div');
        const authDiv = document.createElement('div');
        const pageDiv = document.createElement('div');
        const readBtn = document.createElement("button");
        const removeBtn = document.createElement("button");

        card.classList.add("card");

        titleDiv.textContent = book.title;
        card.appendChild(titleDiv);

        authDiv.textContent = book.author;
        card.appendChild(authDiv);

        pageDiv.textContent = book.numberOfPages;
        card.appendChild(pageDiv);

        readBtn.textContent = `${book.readingStatus}`;
        card.appendChild(readBtn);

        removeBtn.textContent = `Remove`;
        card.appendChild(removeBtn);

        cardsContainer.appendChild(card);

        if (book.readingStatus == "Read") readBtn.className = "readTrue";
        
        else {
            readBtn.className = "readFalse";
        }

        
        readBtn.addEventListener("click", () => {

            if (readBtn.textContent == "Read") {
                book.readingStatus = "Not read"
                readBtn.textContent = "Not Read"
                readBtn.className = "readFalse"}
            
            else {

                book.readingStatus = "Read"
                readBtn.className = "readTrue"
                readBtn.textContent = "Read"}
        
        });

        removeBtn.addEventListener("click", () => {
            myLibrary.splice(myLibrary.indexOf(book),1)
            card.remove();
        });
    
}


const FactoryFunction = (string, active) => {
    let capitalizeString = () => string.toUpperCase();
    if (!active) {
        capitalizeString = () => string;
    }
    const printString = () => console.log(`----${capitalizeString()}----`);
    return { printString };
  };

  let x = FactoryFunction ("ahmed",true);
  let y = FactoryFunction ("ahmed",false)

  