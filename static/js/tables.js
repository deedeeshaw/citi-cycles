// CREATE ROWS IN THE TABLE

  d3.json("/data").then(data => {
    var column=["year", "startstationname", 
    "endstationname",
    "usertype", "gender", "birthyear", "tripduration"];
    var tbody = d3.select("tbody");
    data.forEach(cycle => {

        var row = tbody.append("tr");
        
        Object.entries(cycle).forEach(([key, value])=> {
  
          if (column.includes(key)) {
                
                row.append("td").text(value);
            }
          });
         });
    });

  // ########### FILTERING TABLE #####################
    (function(document) {
      'use strict';
    
      var LightTableFilter = (function(Arr) {
    
        var _input;
    
        function _onInputEvent(e) {
          _input = e.target;
          var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
          Arr.forEach.call(tables, function(table) {
            Arr.forEach.call(table.tBodies, function(tbody) {
              Arr.forEach.call(tbody.rows, _filter);
            });
          });
        }
    
        function _filter(row) {
          var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
          row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
        }
    
        return {
          init: function() {
            var inputs = document.getElementsByClassName('light-table-filter');
            Arr.forEach.call(inputs, function(input) {
              input.oninput = _onInputEvent;
            });
          }
        };
      })(Array.prototype);
    
      document.addEventListener('readystatechange', function() {
        if (document.readyState === 'complete') {
          LightTableFilter.init();
        }
      });
    
    })(document);


