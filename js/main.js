;(function () {
  document.addEventListener("DOMContentLoaded", main);
  function main () {
    setTimeout(fixNoteAnywhere, 1000)
  }

  // fix note-anywhere
  function fixNoteAnywhere () {
    var closeAll = document.createElement('span')
    closeAll.innerHTML = 'close'
    closeAll.id = 'close-all-note'
    closeAll.style = 'position:fixed;right:0;top:0;z-index:100000000;cursor:pointer;background-color:#eee;'
    var note = document.querySelectorAll('.note-anywhere')
    if (note.length) {
      document.body.appendChild(closeAll)
      setTimeout(function () {
        var closeButton = document.querySelector('#close-all-note')
        closeButton.addEventListener('click', function () {
          note = document.querySelectorAll('.note-anywhere')
          note.forEach(function (item) {
            var itemClose = item.querySelector('.closebutton')
            itemClose.dispatchEvent(new Event('click'))
          })
        })
      },0)
    }
  }
})()
