import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.css']
})

export class DragComponent {

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);

  }

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    var isEmpty = ev.target.innerHTML === "";
    var isArrivingHarbour = document.getElementById(ev.target.id).parentElement.id === "arriving_harbours";
    if(isEmpty && isArrivingHarbour) {
      ev.target.appendChild(document.getElementById(data));
      document.getElementById(data).ondragstart = function() { return false; };
    }

    console.log("data: "+data);
    console.log("event.target.id: " + ev.target.id );
    console.log("event.target.innerHTML: " + ev.target.innerHTML);
    console.log("event.target.hasChildNodes(): " + ev.target.hasChildNodes() );
    console.log("document.getElementById(ev.target.id).parentElement.id: " + document.getElementById(ev.target.id).parentElement.id );
    console.log("document.getElementById(ev.target.id).parentNode.nodeName: " + document.getElementById(ev.target.id).parentNode.nodeName );
    console.log("event.target.innerHTML==='':" + isEmpty);
    console.log("document.getElementById(ev.target.id).parentElement.id: " + isArrivingHarbour);

  }
}
