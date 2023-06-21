// ajax in js
function loadAjaxExampleOld() {
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var data = xhr.responseText;
        
        var resultDiv = document.getElementById('result');
        resultDiv.innerHTML = data;
      }
    };
    
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
    xhr.send();
  }
// ajax in jquery
  function loadData() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      type: 'GET',
      success: function(data) {
        var resultDiv = document.getElementById('result');
        resultDiv.innerHTML = JSON.stringify(data);
      },
      error: function(xhr, status, error) {
        console.error(error);
      }
    });
  }
  
  
  