/*
Exam One - Batch 364
Total 60 (40 + 20) Marks
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/



function studentView(studentName,email,joinedDate,studentImage){
const studentUl = document.querySelector('.student-list');
const studentLi = document.createElement('li');
studentLi.className= `student-item cf`;
studentLi.innerHTML=`
<div class="student-details">
    <img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt="Profile Picture">
    <h3>Ethel Dean</h3>
    <span class="email">ethel.dean@example.com</span>
</div>

<div class="joined-details">
    <span class="date">Joined 12-15-2005</span>
</div>
    `;
studentUl.appendChild(studentLi);
studentLi.querySelector('div.student-details').querySelector('h3').innerText = studentName;
studentLi.querySelector('div.student-details').querySelector('span').innerText = email;
studentLi.querySelector('div.joined-details').querySelector('span').innerText = joinedDate;
studentLi.querySelector('div.joined-details').querySelector('span').innerText = joinedDate;
studentLi.querySelector('div.student-details').querySelector('img').src = studentImage;
}

// console.log(studentUl);

for (let i = 0; i<data.length; i++){
let studentName= data[i].name.title +' '+ data[i].name.first +' ' +data[i].name.last;
let email= data[i].email;
let joinedDate= 'Joined '+ data[i].registered.date;
let studentImage= data[i].picture.thumbnail;


studentView(studentName,email,joinedDate,studentImage);
}




/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/





/*
(Bonus Task)
Create the `searchPage` function
This function will search and display results from all students
Only the filtered result will be displayed in the view
*/




// Call functions

