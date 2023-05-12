var input = document.getElementById('input-file')
var csvContainer = document.getElementById('csv-container')
var clrBtn = document.getElementById('clr-btn');
clrBtn.onclick = function(){
  // reset container
  csvContainer.innerHTML = ''
  csvContainer.className = ''
}
input.onchange = function () {
  var file = this.files[0]
  var reader = new FileReader()

  reader.onload = function (e) {
    var csv = e.target.result
    var data = Papa.parse(csv, {
      header: true,
      skipEmptyLines: true
    })

    // reset container
    csvContainer.innerHTML = ''
    csvContainer.className = ''

    Handsontable(csvContainer, {
      data: data.data,
      rowHeaders: true,
      colHeaders: data.meta.fields,
      columnSorting: true,
      width: '100%',
      licenseKey: 'non-commercial-and-evaluation',
    })
  }
  file && reader.readAsText(file)
}
