$( document ).ready(function() {
    $("#currentDay").text(moment().format("MMM Do YY"));

    for (let i = 0; i < 8; i++) {

        // create a row
        var row = $('<div class="row">');

        // create a column
        var col1 = $('<div class="col-md-2"><p class="hour">');

        //create column 2
        var col2 = $('<div class="col-md-8"><textarea class="description" placeholder="Add your event here..."></textarea>');        
       
        //create column 3
        var col3 = $('<div class="col-md-2"><button class="saveBtn">Save</button>')
        
        // append col to row
        row.append(col1);
        row.append(col2);
        row.append(col3);

        // last step add rows to container
        $(".container").append(row);

    }

    var inputText = $(".description");
    var saveBtn = $('.saveBtn');

    inputText.textContent = localStorage.getItem('');
    console.log(inputText);
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