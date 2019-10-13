function getLocalStorage(key) {
    let value = localStorage.getItem(key);
    if (value) {
        $(`#text${key}`).text(value);
    }
}

$( document ).ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    // we have to assume that first time the page opens, nothing is saved to localStorage
    
    for (let i = 9; i < 18; i++) {

        // create a row
        var row = $('<div class="row">');

        // create a column
        var col1 = $('<div class="col-md-2"><p class="hour">' + formatAMPM(i) + '</p>');

        //create column 2
        var col2 = $(`<div class="col-md-8"><textarea id=text${i} class="description" placeholder="Add your event here..."></textarea>`);        
       
        //create column 3
        var col3 = $(`<div class="col-md-2"><button class="saveBtn" id=${i}><i class="fas fa-save"></i></button>`)
        
        // append col to row
        row.append(col1);
        row.append(col2);
        row.append(col3);

        // last step add rows to container
        $(".container").append(row);

        getLocalStorage(i);
    }
    function formatAMPM(hours) {
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        return hours + ampm;
      }

    var saveBtn = $('.saveBtn');
    saveBtn.on('click', function(){
        let eventId = $(this).attr('id');
        let eventText = $(this).parent().siblings().children('.description').val();
        localStorage.setItem(eventId, eventText);
    });
    /*

    key - the id number
    value - text

    */

    // inputText.textContent = localStorage.getItem('');
    // console.log(inputText);
});

{/* <div class="col-md-2">
          <p class="hour"></p>
        </div>
        <div class="col-md-8">
          <textarea class="description" placeholder="Add your event here..."></textarea>
        </div>
        <div class="col-md-2">
          <button class="saveBtn">Save</button>
        </div> */}




// const person = {};
// Set a property "name" with value "Stephany" on object
// person.name = "Stephany";
// person['name'] = "Stephany"; // defensive programming
// console.log(person);
// {name: 'stephany'};

// localStorage is the name of the localStorage object
// .setItem();
// .getItem();
// objectName.method(key, value)
// localStorage.setItem('name', 'Stephany');
// localStorage.getItem('name');

// let animals = ['dog','cat'];
// // Save animals array to locaStorage. Key will be name of array.
// // Remember you can only save strings to localStorage
// localStorage.setItem('animals', JSON.stringify(animals));
// let rVal = localStroage.getItem('animals'); // returns the value which is a stringified array
// // What do we do with the reutrn value to turn it back into an array?
// JSON.parse(rVal) // this returns the original array