   const addButton = document.querySelector('#add');

     const addNewNote = (text ='') => {

     const note = document.createElement('div');
     note.classList.add('note');

     const htmlData = '
          <div class="operation">
               <button class="edit"><i class="fas fa-edit"></i></button>
               <button class="delete"><i class="fas fa-trash-alt"></i></button>
          </div>
          <div class="main ${text ? "":"hidden" }"></div>
          <textarea name="" class="${text ? "hidden":""} " ></textarea> ';

          note.insertAdjacentHTML('afterbegin',htmlData);
          //console.log(note);

          //getting the reference
          const editButton = note.querySelector('.edit');
          const delButton = note.querySelector('.delete');
          const mainDiv = note.querySelector('.main');
          const textarea = note.querySelector('textarea');

          //deleting the div
          delButton.addEventListener('click',()=>{
               note.remove();
          })




          document.body.appendChild(note);
          //it appends a node as the last child of a node...
   }

   addButton.addEventListener('click',()=> addNewNote() );