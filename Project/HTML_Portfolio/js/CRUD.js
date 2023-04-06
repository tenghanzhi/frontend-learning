var app = new (function () {
  this.el = document.getElementById("notes");
  this.notes = [
    "Portfolio",
    "Calculator",
    "CRUD",
    "Clean Kitchen",
    "Wash Car",
    "Take Shower",
    "Watch Movie",
    "Video Game",
  ];

  this.Count = function (data) {
    var el = document.getElementById("note");
    var name = "note";

    if (data) {
      if (data > 1) {
        name = "notes";
      }
      el.innerHTML = data + " " + name;
    } else {
      el.innerHTML = "No " + name;
    }
  };

  this.FetchAll = function () {
    var data = "";

    if (this.notes.length > 0) {
      for (i = 0; i < this.notes.length; i++) {
        data += "<tr>";
        data += "<td>" + this.notes[i] + "</td>";
        data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
        data +=
          '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
        data += "</tr>";
      }
    }

    this.Count(this.notes.length);
    return (this.el.innerHTML = data);
  };

  this.Add = function () {
    el = document.getElementById("add-name");
    var note = el.value;

    if (note) {
      this.notes.push(note.trim());
      el.value = "";
      this.FetchAll();
    }
  };

  this.Edit = function (item) {
    var el = document.getElementById("edit-name");
    el.value = this.notes[item];
    document.getElementById("spoiler").style.display = "block";
    self = this;

    document.getElementById("saveEdit").onsubmit = function () {
      var note = el.value;

      if (note) {
        self.notes.splice(item, 1, note.trim());
        self.FetchAll();
        CloseInput();
      }
    };
  };

  this.Delete = function (item) {
    this.notes.splice(item, 1);
    this.FetchAll();
  };
})();

app.FetchAll();

function CloseInput() {
  document.getElementById("spoiler").style.display = "none";
}
