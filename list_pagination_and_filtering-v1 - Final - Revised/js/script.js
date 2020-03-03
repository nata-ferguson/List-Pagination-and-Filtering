const allStudents = document.querySelectorAll(".student-item");
const itemsPerPage = 10;

// function to hide all but ten students //
function showPage (list, page) {
   const startIndex = (page*itemsPerPage) - itemsPerPage;
   const endIndex = (page*itemsPerPage);

   for (let i = 0; i < list.length; i++) {
      list[i].style.display = "none";
      if (i >= startIndex && i < endIndex) {
         list[i].style.display = "block";
      }
   };
};
//calling the function to show the first page//
showPage(allStudents, 1)

const appendPageLinks = (list) => {
   // pages  needed for the list //
    const totalPages = Math.ceil(list.length / 10);
    const page = document.querySelector(".page");
    
    //Created a div with pagination class, appended it to the .page div//
    const div = document.createElement("div");
    div.className = "pagination";
    const ul = document.createElement("ul");
    page.appendChild(div);
    div.appendChild(ul);
    
    //for every page added li and a tags //
    for (let i = 0; i < totalPages; i ++) {
      const ul = div.getElementsByTagName("ul")[0];
      const li = document.createElement("li");
      const a = document.createElement("a");
      li.appendChild(a);
      ul.appendChild(li);
      a.href = "#";
      a.textContent = i + 1;

      if(a.textContent == 1){
         a.className = "active";
      };
    };

    //Added  event listener to each a tag, called the showPage function to display the right page//
   ul.addEventListener("click", (event) => {
      const buttons = ul.getElementsByTagName("a");
      for (let i = 0; i < totalPages; i ++ ) {
         buttons[i].className = "";
      };
      event.target.className = "active";
      showPage(allStudents, event.target.textContent);
      })
   }
   
   //calling the function//
   appendPageLinks(allStudents);